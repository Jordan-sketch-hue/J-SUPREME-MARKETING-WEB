'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiTrendingUp, FiTarget, FiZap } from 'react-icons/fi';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'E-Commerce Scale-Up',
      client: 'Fashion Retailer',
      results: {
        roas: '4.2x',
        revenue: '+380%',
        cac: '-42%',
      },
      description: 'Scaled monthly revenue from $50k to $240k through optimized Meta and Google Shopping campaigns.',
      category: 'Paid Advertising',
      icon: FiTarget,
    },
    {
      title: 'SaaS Lead Generation',
      client: 'B2B Software Company',
      results: {
        leads: '+520%',
        cost: '-35%',
        conversion: '+180%',
      },
      description: 'Built high-converting funnels that generated 2,400+ qualified leads with automated nurture sequences.',
      category: 'Funnels & Automation',
      icon: FiTrendingUp,
    },
    {
      title: 'Brand Launch Campaign',
      client: 'Health & Wellness Startup',
      results: {
        reach: '2.1M',
        engagement: '+450%',
        sales: '$180k',
      },
      description: 'Created viral brand campaign that reached 2.1M people and generated $180k in first-month sales.',
      category: 'Brand & Creative',
      icon: FiZap,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-supreme-black to-supreme-black/80">
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
            Featured <span className="text-supreme-gold">Results</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Real campaigns. Real numbers. Real growth.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Project Header */}
              <div className="p-8 bg-gradient-to-br from-supreme-gold/10 to-electric-blue/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-supreme-gold font-semibold">{project.category}</span>
                  <project.icon className="text-2xl text-supreme-gold" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-platinum-white mb-2 group-hover:text-supreme-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-steel-gray text-sm">{project.client}</p>
              </div>

              {/* Results */}
              <div className="p-8 border-t border-steel-gray border-opacity-20">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.results).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <h4 className="text-2xl font-montserrat font-bold text-supreme-gold mb-1">
                        {value}
                      </h4>
                      <p className="text-xs text-steel-gray uppercase">{key}</p>
                    </div>
                  ))}
                </div>
                <p className="text-platinum-white text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <button className="text-supreme-gold font-semibold text-sm hover:underline flex items-center group">
                  View Case Study
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/results" className="btn-secondary inline-flex items-center space-x-2">
            <span>View All Case Studies</span>
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
