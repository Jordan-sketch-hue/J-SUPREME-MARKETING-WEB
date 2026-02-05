'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const AuditHero = () => {
  const benefits = [
    'Identify revenue leaks in your funnel',
    'Discover untapped growth opportunities',
    'Get a custom 90-day roadmap',
    'No obligation, no sales pitch',
  ];

  return (
    <section className="pt-32 pb-20 bg-supreme-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-supreme-gold bg-opacity-10 text-supreme-gold rounded-full text-sm font-semibold mb-6">
            Free Growth Audit
          </span>
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
            Get a Free
            <br />
            <span className="text-gradient">Growth Audit</span>
            <br />
            of Your Business
          </h1>
          <p className="text-xl text-steel-gray leading-relaxed mb-12">
            We'll analyze your marketing, identify gaps, and show you exactly how to scale — 
            no strings attached.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-center space-x-3 glass-effect p-4 rounded-lg"
              >
                <FiCheckCircle className="text-supreme-gold text-2xl flex-shrink-0" />
                <span className="text-platinum-white text-left">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditHero;
