'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

const AuditForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    websiteUrl: '',
    adSpend: '',
    challenge: '',
    services: [] as string[],
    email: '',
    phone: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const adSpendOptions = [
    '$0 - $1k/month',
    '$1k - $5k/month',
    '$5k - $20k/month',
    '$20k+/month',
  ];

  const serviceOptions = [
    'Paid Advertising',
    'Funnels & Automation',
    'Branding & Creative',
    'SEO & Organic Growth',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
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
          subject: `🔥 New Free Audit Request from ${formData.businessName}`,
          from_name: formData.businessName,
          email: formData.email,
          message: `
Business: ${formData.businessName}
Website: ${formData.websiteUrl}
Ad Spend: ${formData.adSpend}
Services: ${formData.services.join(', ')}
Challenge: ${formData.challenge}
Phone/WhatsApp: ${formData.phone || 'Not provided'}
          `,
        }),
      });

      // Send via WhatsApp
      const whatsappMessage = encodeURIComponent(
        `🔥 *NEW FREE AUDIT REQUEST*\n\n` +
        `*Business:* ${formData.businessName}\n` +
        `*Website:* ${formData.websiteUrl}\n` +
        `*Ad Spend:* ${formData.adSpend}\n` +
        `*Services:* ${formData.services.join(', ')}\n` +
        `*Challenge:* ${formData.challenge}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone || 'Not provided'}`
      );
      
      // Open WhatsApp in new tab
      window.open(`https://wa.me/6582182282?text=${whatsappMessage}`, '_blank');

      // Track conversion in Google Ads (High-value lead - Purchase conversion)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-11161550773/uCMaCM7A584YELX_nsop',
          'value': 500.0, // Estimated lead value
          'currency': 'USD',
          'transaction_id': Date.now().toString()
        });
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your request. Please try again or contact us directly.');
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
              Request Received!
            </h2>
            <p className="text-xl text-steel-gray mb-8">
              Thanks for your interest! We'll review your information and contact you within 24 hours 
              with your custom growth audit.
            </p>
            <div className="glass-effect p-6 rounded-xl">
              <p className="text-platinum-white mb-2">
                <strong>What happens next:</strong>
              </p>
              <ul className="text-steel-gray space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-start space-x-2">
                  <span className="text-supreme-gold">1.</span>
                  <span>We'll analyze your business and marketing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-supreme-gold">2.</span>
                  <span>Prepare a custom growth roadmap</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-supreme-gold">3.</span>
                  <span>Schedule a strategy call with you</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-supreme-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass-effect p-8 md:p-12 rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Name */}
            <div>
              <label htmlFor="businessName" className="block text-platinum-white font-semibold mb-2">
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white bg-opacity-5 border border-steel-gray border-opacity-30 rounded-lg text-platinum-white placeholder-steel-gray focus:outline-none focus:border-supreme-gold transition-colors duration-300"
                placeholder="Enter your business name"
              />
            </div>

            {/* Website URL */}
            <div>
              <label htmlFor="websiteUrl" className="block text-platinum-white font-semibold mb-2">
                Website URL *
              </label>
              <input
                type="url"
                id="websiteUrl"
                name="websiteUrl"
                required
                value={formData.websiteUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white bg-opacity-5 border border-steel-gray border-opacity-30 rounded-lg text-platinum-white placeholder-steel-gray focus:outline-none focus:border-supreme-gold transition-colors duration-300"
                placeholder="https://yourbusiness.com"
              />
            </div>

            {/* Monthly Ad Spend */}
            <div>
              <label htmlFor="adSpend" className="block text-platinum-white font-semibold mb-2">
                Monthly Ad Spend *
              </label>
              <select
                id="adSpend"
                name="adSpend"
                required
                value={formData.adSpend}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white bg-opacity-5 border border-steel-gray border-opacity-30 rounded-lg text-platinum-white focus:outline-none focus:border-supreme-gold transition-colors duration-300"
              >
                <option value="">Select your ad spend</option>
                {adSpendOptions.map((option) => (
                  <option key={option} value={option} className="bg-supreme-black">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Biggest Challenge */}
            <div>
              <label htmlFor="challenge" className="block text-platinum-white font-semibold mb-2">
                What's your biggest challenge right now? *
              </label>
              <textarea
                id="challenge"
                name="challenge"
                required
                value={formData.challenge}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-white bg-opacity-5 border border-steel-gray border-opacity-30 rounded-lg text-platinum-white placeholder-steel-gray focus:outline-none focus:border-supreme-gold transition-colors duration-300 resize-none"
                placeholder="Tell us what's blocking your growth..."
              />
            </div>

            {/* Services Interested In */}
            <div>
              <label className="block text-platinum-white font-semibold mb-3">
                What services are you interested in? *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceOptions.map((service) => (
                  <label
                    key={service}
                    className="flex items-center space-x-3 glass-effect p-4 rounded-lg cursor-pointer hover:border-supreme-gold transition-colors duration-300"
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleCheckboxChange(service)}
                      className="w-5 h-5 text-supreme-gold bg-white bg-opacity-5 border-steel-gray rounded focus:ring-supreme-gold"
                    />
                    <span className="text-platinum-white">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Email */}
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
                placeholder="you@company.com"
              />
            </div>

            {/* Phone (Optional) */}
            <div>
              <label htmlFor="phone" className="block text-platinum-white font-semibold mb-2">
                Phone / WhatsApp (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white bg-opacity-5 border border-steel-gray border-opacity-30 rounded-lg text-platinum-white placeholder-steel-gray focus:outline-none focus:border-supreme-gold transition-colors duration-300"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || formData.services.length === 0}
              className="w-full btn-primary flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span>Submitting...</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-supreme-black border-t-transparent rounded-full"
                  />
                </>
              ) : (
                <>
                  <span>Request Free Audit</span>
                  <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>

            <p className="text-center text-steel-gray text-sm">
              By submitting this form, you agree to receive marketing communications from J Supreme Marketing.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditForm;
