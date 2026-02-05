'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'hello@jsuprememarketing.com',
      link: 'mailto:hello@jsuprememarketing.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Remote • Worldwide',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-supreme-black to-supreme-black/80">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-supreme-gold bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <method.icon className="text-2xl text-supreme-gold" />
              </div>
              <h3 className="text-lg font-orbitron font-semibold mb-2 text-platinum-white">
                {method.title}
              </h3>
              {method.link ? (
                <a href={method.link} className="text-steel-gray hover:text-supreme-gold transition-colors duration-300">
                  {method.value}
                </a>
              ) : (
                <p className="text-steel-gray">{method.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-orbitron font-semibold mb-6 text-platinum-white">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-platinum-white hover:text-supreme-gold hover:border-supreme-gold transition-all duration-300"
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
