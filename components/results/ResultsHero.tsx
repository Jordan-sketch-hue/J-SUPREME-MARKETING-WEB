'use client';

import { motion } from 'framer-motion';

const ResultsHero = () => {
  const stats = [
    { value: '$50M+', label: 'Revenue Generated' },
    { value: '200+', label: 'Successful Projects' },
    { value: '3.8x', label: 'Average ROAS' },
    { value: '98%', label: 'Client Retention' },
  ];

  return (
    <section className="pt-32 pb-20 bg-supreme-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-supreme-gold bg-opacity-10 text-supreme-gold rounded-full text-sm font-semibold mb-6">
            Proven Results
          </span>
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
            Real Campaigns.
            <br />
            <span className="text-gradient">Real Numbers.</span>
          </h1>
          <p className="text-xl text-steel-gray leading-relaxed">
            We measure success by revenue, not impressions. Here's what we've achieved 
            for brands like yours.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-effect p-8 rounded-2xl text-center"
            >
              <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-supreme-gold mb-2">
                {stat.value}
              </h3>
              <p className="text-steel-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsHero;
