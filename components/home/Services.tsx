'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiZap, FiSearch } from 'react-icons/fi';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: FiTarget,
      title: 'Paid Advertising',
      description: 'Data-driven ads that bring buyers, not clicks.',
      features: ['Meta & Google Ads', 'TikTok Advertising', 'Retargeting Campaigns', 'Creative Testing'],
      color: 'supreme-gold',
    },
    {
      icon: FiTrendingUp,
      title: 'Funnels & Conversion',
      description: 'Systems that turn traffic into customers.',
      features: ['Landing Pages', 'Lead Magnets', 'Email Automation', 'CRM Integration'],
      color: 'electric-blue',
    },
    {
      icon: FiZap,
      title: 'Brand Strategy',
      description: 'Complete brand systems that drive business growth.',
      features: ['Brand Identity', 'Positioning Strategy', 'Visual Systems', 'Brand Guidelines'],
      color: 'supreme-gold',
    },
    {
      icon: FiSearch,
      title: 'Content Production',
      description: 'Professional photo and video that convert.',
      features: ['Photography', 'Videography', 'Product Shoots', 'Social Content'],
      color: 'electric-blue',
    },
  ];

  return (
    <section className="section-padding bg-supreme-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            What We <span className="text-supreme-gold">Do</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Three pillars of performance marketing that drive measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                boxShadow: "0 20px 60px rgba(201, 162, 77, 0.2)",
                transition: { duration: 0.3 }
              }}
              className="glass-effect p-8 rounded-2xl group hover:border-supreme-gold transition-all duration-300 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 bg-${service.color} bg-opacity-20 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300`}
              >
                <service.icon className={`text-3xl text-${service.color} group-hover:scale-110 transition-transform duration-300`} />
              </motion.div>
              
              <h3 className="text-2xl font-orbitron font-semibold mb-4 text-platinum-white group-hover:text-supreme-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-steel-gray mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-steel-gray">
                    <span className="w-1.5 h-1.5 bg-supreme-gold rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href="/services"
                className="text-supreme-gold font-semibold text-sm hover:underline"
              >
                Learn More →
              </Link>

                  {/* Additional Services Row */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  >
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="glass-effect p-8 rounded-2xl group hover:border-supreme-gold transition-all duration-300"
                    >
                      <div className="w-16 h-16 bg-supreme-gold bg-opacity-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <FiZap className="text-3xl text-supreme-gold" />
                      </div>
                      <h3 className="text-2xl font-orbitron font-semibold mb-4 text-platinum-white group-hover:text-supreme-gold transition-colors duration-300">
                        Influencer Marketing
                      </h3>
                      <p className="text-steel-gray mb-6">
                        Connect with influencers who drive real results.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm text-steel-gray">
                          <span className="w-1.5 h-1.5 bg-supreme-gold rounded-full mr-2"></span>
                          Influencer Partnerships
                        </li>
                        <li className="flex items-center text-sm text-steel-gray">
                          <span className="w-1.5 h-1.5 bg-supreme-gold rounded-full mr-2"></span>
                          Campaign Management
                        </li>
                        <li className="flex items-center text-sm text-steel-gray">
                          <span className="w-1.5 h-1.5 bg-supreme-gold rounded-full mr-2"></span>
                          ROI Tracking
                        </li>
                        <li className="flex items-center text-sm text-steel-gray">
                          <span className="w-1.5 h-1.5 bg-supreme-gold rounded-full mr-2"></span>
                          Creator Vetting
                        </li>
                      </ul>
                      <Link href="/services" className="text-supreme-gold font-semibold text-sm hover:underline">
                        Learn More →
                      </Link>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="glass-effect p-8 rounded-2xl group hover:border-supreme-gold transition-all duration-300"
                    >
                      <div className="w-16 h-16 bg-electric-blue bg-opacity-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <FiTrendingUp className="text-3xl text-electric-blue" />
                      </div>
                      <h3 className="text-2xl font-orbitron font-semibold mb-4 text-platinum-white group-hover:text-supreme-gold transition-colors duration-300">
                        Business Setup
                      </h3>
                      <p className="text-steel-gray mb-6">
                        Launch your business with expert guidance.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm text-steel-gray">
                          <span className="w-1.5 h-1.5 bg-supreme-gold rounded-full mr-2"></span>
                          Business Formation
                        </li>
                        <li className="flex items-center text-sm text-steel-gray">
                          <span className="w-1.5 h-1.5 bg-supreme-gold rounded-full mr-2"></span>
                          Systems & Operations
                        </li>
                        <li className="flex items-center text-sm text-steel-gray">
                          <span className="w-1.5 h-1.5 bg-supreme-gold rounded-full mr-2"></span>
                          Tech Stack Setup
                        </li>
                        <li className="flex items-center text-sm text-steel-gray">
                          <span className="w-1.5 h-1.5 bg-supreme-gold rounded-full mr-2"></span>
                          Go-to-Market Strategy
                        </li>
                      </ul>
                      <Link href="/services" className="text-supreme-gold font-semibold text-sm hover:underline">
                        Learn More →
                      </Link>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="glass-effect p-8 rounded-2xl group hover:border-supreme-gold transition-all duration-300"
                    >
                      <div className="w-16 h-16 bg-supreme-gold bg-opacity-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <FiSearch className="text-3xl text-supreme-gold" />
                      </div>
                      <h3 className="text-2xl font-orbitron font-semibold mb-4 text-platinum-white group-hover:text-supreme-gold transition-colors duration-300">
                        SEO & Growth
                      </h3>
                      <p className="text-steel-gray mb-6">
                        Long-term organic growth that compounds.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm text-steel-gray">
                          <span className="w-1.5 h-1.5 bg-supreme-gold rounded-full mr-2"></span>
                          Technical SEO
                        </li>
                        <li className="flex items-center text-sm text-steel-gray">
                          <span className="w-1.5 h-1.5 bg-supreme-gold rounded-full mr-2"></span>
                          Content Strategy
                        </li>
                        <li className="flex items-center text-sm text-steel-gray">
                          <span className="w-1.5 h-1.5 bg-supreme-gold rounded-full mr-2"></span>
                          Link Building
                        </li>
                        <li className="flex items-center text-sm text-steel-gray">
                          <span className="w-1.5 h-1.5 bg-supreme-gold rounded-full mr-2"></span>
                          Local SEO
                        </li>
                      </ul>
                      <Link href="/services" className="text-supreme-gold font-semibold text-sm hover:underline">
                        Learn More →
                      </Link>
                    </motion.div>
                  </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
