<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        try {
            Mail::to('Kent.andrey.aguhob@gmail.com')->send(
                new ContactFormMail($request->all())
            );

            return back()->with('success', "Thanks for reaching out! I'll respond as soon as possible.");
        } catch (\Exception $e) {
            \Log::error('Contact form error: ' . $e->getMessage(), [
                'exception' => $e,
                'request_data' => $request->except(['_token']),
            ]);
            
            // In development, show the actual error for debugging
            $errorMessage = config('app.debug') 
                ? 'Error: ' . $e->getMessage() 
                : 'Something went wrong. Please try again later.';
            
            return back()->with('error', $errorMessage)->withInput();
        }
    }
}

