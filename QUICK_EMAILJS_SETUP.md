# Quick EmailJS Setup (5 minutes)

Follow these steps to get real emails sent to your inbox:

## 🚀 Step 1: Sign Up (1 minute)
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create account
3. Verify your email

## 📧 Step 2: Add Email Service (2 minutes)
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your email provider)
4. Connect your Gmail account
5. **Copy the Service ID** (looks like: `service_abc123`)

## 📝 Step 3: Create Template (1 minute)
1. Click "Email Templates"
2. Click "Create New Template"
3. Fill in:
   - **Name**: Contact Form
   - **Subject**: New Message from {{user_name}}
   - **Content**:
   ```
   Name: {{user_name}}
   Email: {{user_email}}
   Message: {{message}}
   ```
4. Save and **copy the Template ID** (looks like: `template_xyz789`)

## 🔑 Step 4: Get Public Key (30 seconds)
1. Click "Account" → "API Keys"
2. **Copy the Public Key** (looks like: `user_def456`)

## ⚙️ Step 5: Update Code (1 minute)
1. Open `src/components/Contact.js`
2. Uncomment line 4: `import emailjs from '@emailjs/browser';`
3. Replace these lines (around line 25-27):
   ```javascript
   // Replace with your actual values:
   const serviceId = 'YOUR_SERVICE_ID';     // e.g., 'service_abc123'
   const templateId = 'YOUR_TEMPLATE_ID';   // e.g., 'template_xyz789'
   const publicKey = 'YOUR_PUBLIC_KEY';     // e.g., 'user_def456'
   ```
4. Uncomment the EmailJS code (remove the `/*` and `*/` around lines 30-45)

## 🧪 Step 6: Test
1. Save the file
2. Fill out the contact form
3. Submit - you should receive an email!

## 📱 What You'll Get
- Real emails sent to your inbox
- Form data: name, email, message
- Professional email format
- Works on live website too

**Total time: ~5 minutes** 