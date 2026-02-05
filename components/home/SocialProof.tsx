'use client';

import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStartup',
      content: 'J Supreme Marketing scaled our ad spend from $5k to $50k/month while maintaining a 4.2x ROAS. Their systems work.',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      role: 'Founder, FitLife',
      content: 'Finally, a marketing partner that focuses on revenue, not vanity metrics. Our sales tripled in 6 months.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'CMO, EcoStore',
      content: 'The funnel optimization alone increased our conversion rate by 240%. Best investment we\'ve made.',
      rating: 5,
    },
  ];

  const brandLogos = [
    'Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5', 'Brand 6'
  ];

  return (
    <section className="section-padding bg-supreme-black">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            Trusted by <span className="text-supreme-gold">Growth-Focused</span> Brands
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Startups, creators, and growing brands worldwide trust us to scale their marketing
          </p>
        </motion.div>

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20"
        >
          {brandLogos.map((brand, index) => (
            <div
              key={index}
              className="glass-effect h-24 rounded-xl flex items-center justify-center hover:border-supreme-gold transition-all duration-300"
            >
              <span className="text-steel-gray font-orbitron text-sm">{brand}</span>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-effect p-8 rounded-2xl"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-supreme-gold fill-supreme-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-platinum-white mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-steel-gray border-opacity-20 pt-4">
                <h4 className="font-semibold text-platinum-white">{testimonial.name}</h4>
                <p className="text-sm text-steel-gray">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 glass-effect p-8 rounded-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5.0', label: 'Avg. Rating' },
              { value: '200+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '3.8x', label: 'Average ROAS' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-supreme-gold mb-2">
                  {stat.value}
                </h3>
                <p className="text-steel-gray text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
