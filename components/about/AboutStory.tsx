'use client';

import { motion } from 'framer-motion';

const AboutStory = () => {
  return (
    <section className="section-padding bg-supreme-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-platinum-white">
              Our <span className="text-supreme-gold">Story</span>
            </h2>
            <div className="space-y-4 text-steel-gray leading-relaxed">
              <p>
                J Supreme Marketing was born from frustration. Frustration with agencies that promised 
                "brand awareness" but couldn't show revenue. With "gurus" selling tactics instead of systems. 
                With businesses bleeding money on ads that don't convert.
              </p>
              <p>
                We built this agency differently. Every campaign is tracked. Every dollar is accounted for. 
                Every strategy is designed to scale. Because at the end of the day, what matters isn't 
                likes or impressions — it's revenue.
              </p>
              <p>
                Today, we work with ambitious brands who are serious about growth. From startups looking to 
                find product-market fit to established businesses ready to scale to 7 and 8 figures.
              </p>
              <p className="text-supreme-gold font-semibold">
                If you're tired of marketing that doesn't move the needle, you're in the right place.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '2019', label: 'Founded' },
              { number: '200+', label: 'Clients Served' },
              { number: '$50M+', label: 'Revenue Generated' },
              { number: '15+', label: 'Team Members' },
              { number: '3.8x', label: 'Avg. ROAS' },
              { number: '98%', label: 'Retention Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl text-center"
              >
                <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-supreme-gold mb-2">
                  {stat.number}
                </h3>
                <p className="text-steel-gray text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
