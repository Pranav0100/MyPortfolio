# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form to send emails to your inbox.

## 🚀 Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 📧 Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_yrknfim`) 

## 📝 Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Template Name**: Contact Form
**Subject**: New Message from Portfolio - {{user_name}}

**Email Body**:
```
Name: {{user_name}}
Email: {{user_email}}
Message: {{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_u4ice8v`)

## 🔑 Step 4: Get Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `fi_p7xcEb_IznEp5J`)
## ⚙️ Step 5: Update Contact Component

Replace the placeholder values in `src/components/Contact.js`:

```javascript
// Replace these with your actual EmailJS credentials
const serviceId = 'service_yrknfim';     // e.g., 'service_abc123'
const templateId = 'template_u4ice8v';   // e.g., 'template_xyz789'
const publicKey = 'fi_p7xcEb_IznEp5J';     // e.g., 'user_def456'
```

## 🧪 Step 6: Test the Form

1. Start your development server: `npm start`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email inbox for the message

## 📱 Features Added

- ✅ **Real Email Sending**: Messages are sent to your actual email
- ✅ **Success/Error Messages**: Visual feedback for form submission
- ✅ **Form Validation**: Required fields and email format validation
- ✅ **Loading States**: Shows "Sending..." while processing
- ✅ **Auto-reset**: Form clears after successful submission

## 🔒 Security Notes

- EmailJS credentials are safe to use in frontend code
- The public key is designed for client-side use
- No backend server required
- Free tier allows 200 emails per month

## 🚀 Deployment

After setting up EmailJS, your contact form will work on:
- Local development
- Netlify deployment
- Any static hosting service

The form will send emails to your inbox whenever someone submits a message through your portfolio! 