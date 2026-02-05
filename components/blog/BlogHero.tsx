'use client';

import { motion } from 'framer-motion';

const BlogHero = () => {
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
            Blog & Insights
          </span>
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
            Marketing <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-steel-gray leading-relaxed">
            Strategies, tactics, and insights to help you scale your marketing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
