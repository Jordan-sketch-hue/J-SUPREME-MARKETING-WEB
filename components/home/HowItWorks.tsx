'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Audit & Strategy',
      description: 'We analyze your current marketing, identify gaps, and build a data-driven growth plan tailored to your goals.',
      details: ['Market research', 'Competitor analysis', 'Strategy roadmap', 'KPI setting'],
    },
    {
      number: '02',
      title: 'Build & Launch',
      description: 'Our team builds your campaigns, funnels, and creative assets — then launches with precision and speed.',
      details: ['Campaign setup', 'Creative production', 'Landing pages', 'Tracking systems'],
    },
    {
      number: '03',
      title: 'Optimize & Scale',
      description: 'Continuous testing and optimization ensure maximum performance. Then we scale what works.',
      details: ['A/B testing', 'Performance tracking', 'Budget scaling', 'Monthly reporting'],
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-supreme-black to-supreme-black/80">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            How It <span className="text-supreme-gold">Works</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            A proven process that delivers predictable growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-supreme-gold via-electric-blue to-supreme-gold opacity-30" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Step Number Circle */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 bg-gradient-to-r from-supreme-gold to-electric-blue rounded-full blur-xl opacity-50"
                  />
                  <div className="relative w-24 h-24 bg-supreme-black border-4 border-supreme-gold rounded-full flex items-center justify-center">
                    <span className="text-4xl font-orbitron font-bold text-supreme-gold">
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="glass-effect p-8 rounded-2xl text-center lg:text-left">
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-platinum-white">
                  {step.title}
                </h3>
                <p className="text-steel-gray mb-6 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-platinum-white">
                      <FiCheckCircle className="text-supreme-gold mr-3 flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
