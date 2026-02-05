'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const CTASection = () => {
  const benefits = [
    'Free 30-minute strategy call',
    'Custom growth roadmap',
    'Competitor analysis',
    'No obligation or pressure',
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-supreme-black via-supreme-gold/5 to-electric-blue/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-supreme-gold/10 to-electric-blue/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-12 md:p-16 rounded-3xl text-center max-w-4xl mx-auto"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            Ready to <span className="text-gradient">Scale Smarter</span>?
          </h2>
          
          <p className="text-xl text-steel-gray mb-8 max-w-2xl mx-auto">
            Get a free growth audit and discover the leaks, gaps, and opportunities in your current marketing.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-3 text-left"
              >
                <FiCheckCircle className="text-supreme-gold text-xl flex-shrink-0" />
                <span className="text-platinum-white">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/free-audit" className="btn-primary flex items-center space-x-2 group text-lg">
              <span>Book Your Free Audit</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href="/contact" className="btn-secondary text-lg">
              Contact Us
            </Link>
          </div>

          {/* Trust Badge */}
          <p className="text-steel-gray text-sm mt-8">
            Join 200+ brands already scaling with us • No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
