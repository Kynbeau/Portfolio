<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
    </div>
    
    <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
        <p style="margin-top: 0; font-size: 16px;">You have received a new message from your portfolio contact form:</p>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
            <p style="margin: 10px 0;"><strong>Name:</strong> {{ $name }}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:{{ $email }}" style="color: #10b981; text-decoration: none;">{{ $email }}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> {{ $phone }}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> {{ $subject }}</p>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #1f2937; font-size: 18px;">Message:</h2>
            <p style="white-space: pre-wrap; color: #4b5563; line-height: 1.8;">{{ $userMessage }}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <a href="mailto:{{ $email }}?subject=Re: {{ $subject }}" style="display: inline-block; background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">Reply to {{ $name }}</a>
        </div>
    </div>
    
    <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
        <p>This email was sent from your portfolio contact form.</p>
    </div>
</body>
</html>

