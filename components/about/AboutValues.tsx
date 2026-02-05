'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiUsers, FiZap } from 'react-icons/fi';

const AboutValues = () => {
  const values = [
    {
      icon: FiTarget,
      title: 'Performance Over Vanity',
      description: 'We measure success by revenue and ROI, not likes and impressions.',
    },
    {
      icon: FiTrendingUp,
      title: 'Data-Driven Decisions',
      description: 'Every strategy is backed by data, tested rigorously, and optimized continuously.',
    },
    {
      icon: FiUsers,
      title: 'Partnership Mindset',
      description: 'Your success is our success. We are invested in your growth, not just campaign delivery.',
    },
    {
      icon: FiZap,
      title: 'Speed & Execution',
      description: 'We move fast, test quickly, and scale aggressively when we find what works.',
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
            Our <span className="text-supreme-gold">Values</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            The principles that guide every campaign, every strategy, every decision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-supreme-gold bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="text-2xl text-supreme-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-orbitron font-semibold mb-3 text-platinum-white">
                    {value.title}
                  </h3>
                  <p className="text-steel-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
