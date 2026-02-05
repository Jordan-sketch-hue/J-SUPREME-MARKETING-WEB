'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiTrendingUp } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-supreme-black pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-supreme-gold/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-electric-blue/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-8"
          >
            <FiTrendingUp className="text-supreme-gold" />
            <motion.span 
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-sm text-steel-gray"
            >
              Premium Marketing & Lifestyle Growth
            </motion.span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6 leading-tight"
          >
            Premium Marketing
            <br />
            <span className="text-gradient">Lifestyle Brands</span>
            <br />
            That Sell
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-steel-gray mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We build premium experiences with <span className="text-supreme-gold font-semibold">paid ads</span>,
            <span className="text-supreme-gold font-semibold"> funnels</span>, and
            <span className="text-supreme-gold font-semibold"> conversion-first strategy</span> that turn attention into sales.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/free-audit" className="btn-primary flex items-center space-x-2 group shadow-xl shadow-supreme-gold/30">
                <span>Get a Free Growth Audit</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/services" className="btn-secondary shadow-lg">
                View Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {[
              { number: '200+', label: 'Clients Scaled' },
              { number: '$50M+', label: 'Revenue Generated' },
              { number: '3.8x', label: 'Avg. ROAS' },
              { number: '98%', label: 'Client Retention' },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(201, 162, 77, 0.3)",
                  transition: { duration: 0.2 }
                }}
                className="glass-effect p-6 rounded-xl cursor-pointer"
              >
                <motion.h3 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="text-3xl md:text-4xl font-montserrat font-bold text-supreme-gold mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-steel-gray text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-supreme-gold rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-supreme-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
