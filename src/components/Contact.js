import React, { useState, useRef } from 'react';
import ResumeDownload from './ResumeDownload';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Map the EmailJS field names to our formData keys
    const fieldMap = {
      'user_name': 'name',
      'user_email': 'email',
      'message': 'message'
    };
    
    const formDataKey = fieldMap[name] || name;
    setFormData(prev => ({
      ...prev,
      [formDataKey]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // EmailJS configuration
    const serviceId = 'service_yrknfim';
    const templateId = 'template_u4ice8v';
    const publicKey = 'fi_p7xcEb_IznEp5J';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('success');
        setTimeout(() => setSubmitStatus(''), 5000);
      }, (error) => {
        console.log('FAILED...', error.text);
        setIsSubmitting(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(''), 5000);
      });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>

          {/* Download Resume Button */}
          <motion.div 
            className="resume-download-section"
            variants={itemVariants}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <motion.a 
              href="/resume.pdf" 
              className="download-resume-btn enhanced-button glow-effect"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="download-icon">📄</span>
              Download Resume
            </motion.a>
            <p className="download-note">
              Click to download my full resume in PDF format
            </p>
            <ResumeDownload />
          </motion.div>

          <div className="contact-grid">
            <motion.div 
              className="contact-info"
            >
              <h3 id="lets-connect">Let's Connect</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
                             <div className="contact-details">
                 <motion.div 
                   className="contact-item"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.2 }}
                 >
                   <div className="contact-icon">📧</div>
                   <div className="contact-text">
                     <h4>Email</h4>
                     <a href="mailto:pranavvarma79@gmail.com">pranavvarma79@gmail.com</a>
                   </div>
                 </motion.div>
                 
                 <motion.div 
                   className="contact-item"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.2 }}
                 >
                   <div className="contact-icon">📱</div>
                   <div className="contact-text">
                     <h4>Phone</h4>
                     <a href="tel:+919440035646">+91 94400 35646</a>
                   </div>
                 </motion.div>
                 
                 <motion.div 
                   className="contact-item"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.2 }}
                 >
                   <div className="contact-icon">💼</div>
                   <div className="contact-text">
                     <h4>LinkedIn</h4>
                     <a href="https://www.linkedin.com/in/pranav-varma-vatshavai-91a5b1281" target="_blank" rel="noopener noreferrer">
                       <a href="#lets-connect">Connect</a>
                     </a>
                   </div>
                 </motion.div>
               </div>
               
               <div className="social-links">
                 <h4>Let's Connect</h4>
                 <div className="social-icons">
                   <motion.a 
                     href="https://github.com/Pranav0100"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="social-icon github"
                     whileHover={{ scale: 1.1, y: -3 }}
                     transition={{ duration: 0.2 }}
                   >
                     <svg viewBox="0 0 24 24" fill="currentColor">
                       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                     </svg>
                   </motion.a>
                   
                   <motion.a 
                     href="https://www.linkedin.com/in/pranav-varma-vatshavai-91a5b1281"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="social-icon linkedin"
                     whileHover={{ scale: 1.1, y: -3 }}
                     transition={{ duration: 0.2 }}
                   >
                     <svg viewBox="0 0 24 24" fill="currentColor">
                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                     </svg>
                   </motion.a>
                   
                   <motion.a 
                     href="https://unstop.com/u/pranavvarma_001"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="social-icon unstop"
                     whileHover={{ scale: 1.1, y: -3 }}
                     transition={{ duration: 0.2 }}
                   >
                     <svg viewBox="0 0 24 24" fill="currentColor">
                       <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                     </svg>
                   </motion.a>
                   
                   <motion.a 
                     href="https://www.instagram.com/pranav.varma_/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="social-icon instagram"
                     whileHover={{ scale: 1.1, y: -3 }}
                     transition={{ duration: 0.2 }}
                   >
                     <svg viewBox="0 0 24 24" fill="currentColor">
                       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                     </svg>
                   </motion.a>
                 </div>
               </div>
            </motion.div>

            <motion.form 
              ref={form}
              className="contact-form"
              variants={itemVariants}
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
                             <motion.button
                 type="submit"
                 className="submit-btn enhanced-button glow-effect"
                 disabled={isSubmitting}
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ duration: 0.2 }}
               >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.div 
                  className="submit-message success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  className="submit-message error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ❌ Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 