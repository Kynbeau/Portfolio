# Email Configuration Instructions

## The Problem
Your `.env` file currently has `MAIL_HOST=mailpit` which is a local testing tool that's not set up. This is why emails aren't being sent.

## Solution: Configure Gmail SMTP

### Step 1: Enable 2-Step Verification on Gmail
1. Go to your Google Account: https://myaccount.google.com/
2. Click "Security" in the left sidebar
3. Under "Signing in to Google", enable "2-Step Verification"

### Step 2: Generate an App Password
1. Still in Security settings, look for "App passwords" (or go to: https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Other (Custom name)"
3. Name it "Portfolio Contact Form"
4. Click "Generate"
5. Copy the 16-character password (you'll need this)

### Step 3: Update Your .env File
Open your `.env` file and update these lines:

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=Kent.andrey.aguhob@gmail.com
MAIL_PASSWORD=your_16_character_app_password_here
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="Kent.andrey.aguhob@gmail.com"
MAIL_FROM_NAME="${APP_NAME}"
```

**Important:** Replace `your_16_character_app_password_here` with the actual app password from Step 2.

### Step 4: Clear Config Cache
After updating `.env`, run this command in your terminal:

```bash
php artisan config:clear
```

### Step 5: Test
Try submitting the contact form again. The email should now be sent to your Gmail inbox.

---

## Alternative: Use Mailtrap (For Testing)

If you want to test without setting up Gmail, you can use Mailtrap (free for testing):

1. Sign up at https://mailtrap.io/
2. Get your SMTP credentials from the inbox
3. Update `.env`:

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your_mailtrap_username
MAIL_PASSWORD=your_mailtrap_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="Kent.andrey.aguhob@gmail.com"
MAIL_FROM_NAME="${APP_NAME}"
```

---

## Troubleshooting

If you still get errors after configuring:
1. Check `storage/logs/laravel.log` for detailed error messages
2. Make sure `APP_DEBUG=true` in `.env` to see specific errors
3. Verify the app password is correct (no spaces)
4. Ensure 2-Step Verification is enabled on your Google account

