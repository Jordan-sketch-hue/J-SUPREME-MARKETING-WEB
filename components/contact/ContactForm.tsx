'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send via Email (Web3Forms)
      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '68c4a6c9-bbec-46c4-933b-70eb272e8c7a',
          subject: `💬 New Contact Message: ${formData.subject}`,
          from_name: formData.name,
          email: formData.email,
          message: `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}
          `,
        }),
      });

      // Send via WhatsApp
      const whatsappMessage = encodeURIComponent(
        `💬 *NEW CONTACT MESSAGE*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Company:* ${formData.company || 'Not provided'}\n` +
        `*Subject:* ${formData.subject}\n\n` +
        `*Message:*\n${formData.message}`
      );
      
      // Open WhatsApp in new tab
      window.open(`https://wa.me/6582182282?text=${whatsappMessage}`, '_blank');

      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="section-padding bg-supreme-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto glass-effect p-12 rounded-3xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 bg-supreme-gold bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <FiCheckCircle className="text-4xl text-supreme-gold" />
            </motion.div>
            
            <h2 className="text-4xl font-orbitron font-bold mb-4 text-platinum-white">
              Message Sent!
            </h2>
            <p className="text-xl text-steel-gray">
              Thanks for reaching out! We'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-supreme-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-8 md:p-12 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-platinum-white font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-steel-gray border-opacity-30 rounded-lg text-platinum-white placeholder-steel-gray focus:outline-none focus:border-supreme-gold transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-platinum-white font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-steel-gray border-opacity-30 rounded-lg text-platinum-white placeholder-steel-gray focus:outline-none focus:border-supreme-gold transition-colors duration-300"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-platinum-white font-semibold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-steel-gray border-opacity-30 rounded-lg text-platinum-white placeholder-steel-gray focus:outline-none focus:border-supreme-gold transition-colors duration-300"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-platinum-white font-semibold mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-steel-gray border-opacity-30 rounded-lg text-platinum-white focus:outline-none focus:border-supreme-gold transition-colors duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="general" className="bg-supreme-black">General Inquiry</option>
                  <option value="services" className="bg-supreme-black">Services Information</option>
                  <option value="partnership" className="bg-supreme-black">Partnership Opportunity</option>
                  <option value="support" className="bg-supreme-black">Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-platinum-white font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-steel-gray border-opacity-30 rounded-lg text-platinum-white placeholder-steel-gray focus:outline-none focus:border-supreme-gold transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-supreme-black border-t-transparent rounded-full"
                    />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-platinum-white">
                Prefer Email?
              </h3>
              <p className="text-steel-gray mb-4">
                For general inquiries:
              </p>
              <a href="mailto:hello@jsuprememarketing.com" className="text-supreme-gold text-lg hover:underline">
                hello@jsuprememarketing.com
              </a>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-platinum-white">
                Response Time
              </h3>
              <p className="text-steel-gray">
                We typically respond within 24 hours during business days. For urgent matters, 
                please indicate "URGENT" in your subject line.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-platinum-white">
                Office Hours
              </h3>
              <p className="text-steel-gray">
                Monday - Friday<br />
                9:00 AM - 6:00 PM EST
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
