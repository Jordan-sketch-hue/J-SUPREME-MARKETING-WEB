'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const AboutCTA = () => {
  return (
    <section className="section-padding bg-supreme-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-12 md:p-16 rounded-3xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Let's Build Your
            <br />
            <span className="text-gradient">Growth System</span>
          </h2>
          <p className="text-xl text-steel-gray mb-8 max-w-2xl mx-auto">
            Ready to work with a team that's as obsessed with your revenue as you are?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/free-audit" className="btn-primary flex items-center space-x-2 group">
              <span>Get Free Audit</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
