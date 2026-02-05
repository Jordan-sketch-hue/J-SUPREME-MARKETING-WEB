'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiZap, FiBarChart } from 'react-icons/fi';

const AuditBenefits = () => {
  const benefits = [
    {
      icon: FiTarget,
      title: 'Identify Revenue Leaks',
      description: 'Discover where you\'re losing money in your funnel and how to fix it.',
    },
    {
      icon: FiTrendingUp,
      title: 'Growth Opportunities',
      description: 'Find untapped channels and strategies that your competitors are missing.',
    },
    {
      icon: FiZap,
      title: 'Custom Roadmap',
      description: 'Get a 90-day action plan tailored to your business and goals.',
    },
    {
      icon: FiBarChart,
      title: 'Competitive Analysis',
      description: 'See how you stack up against competitors and where to differentiate.',
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            What You'll <span className="text-supreme-gold">Get</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Your free audit includes a comprehensive analysis of your marketing system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-effect p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-supreme-gold bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="text-3xl text-supreme-gold" />
              </div>
              <h3 className="text-xl font-orbitron font-semibold mb-3 text-platinum-white">
                {benefit.title}
              </h3>
              <p className="text-steel-gray">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-steel-gray">
            <strong className="text-supreme-gold">200+</strong> businesses audited • 
            <strong className="text-supreme-gold"> 95%</strong> found at least 3 major opportunities • 
            <strong className="text-supreme-gold"> No obligation</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditBenefits;
