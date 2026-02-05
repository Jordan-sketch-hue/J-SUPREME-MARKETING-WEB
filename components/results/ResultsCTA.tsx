'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const ResultsCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-supreme-black to-supreme-black/80">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-12 md:p-16 rounded-3xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Want Results Like These?
          </h2>
          <p className="text-xl text-steel-gray mb-8 max-w-2xl mx-auto">
            Let's audit your current marketing and build a custom growth plan for your business.
          </p>
          <Link href="/free-audit" className="btn-primary inline-flex items-center space-x-2 group">
            <span>Get Your Free Audit</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsCTA;
