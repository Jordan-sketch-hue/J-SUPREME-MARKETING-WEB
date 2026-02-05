'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrendingUp, FiTarget, FiZap, FiSearch } from 'react-icons/fi';

const ResultsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Paid Ads', 'Funnels', 'Branding', 'SEO'];

  const caseStudies = [
    {
      category: 'Paid Ads',
      icon: FiTarget,
      title: 'E-Commerce Scale-Up',
      client: 'Fashion Retailer',
      challenge: 'Struggling to scale profitably beyond $50k/month with Meta Ads',
      solution: 'Rebuilt entire ad account structure, implemented advanced creative testing, and launched retargeting funnels',
      results: {
        'Revenue Growth': '+380%',
        'ROAS': '4.2x',
        'CAC Reduction': '-42%',
      },
      testimonial: 'J Supreme Marketing completely transformed our advertising. We went from struggling to scale to consistently hitting $240k months.',
      author: 'Sarah Chen, CEO',
      timeframe: '6 months',
    },
    {
      category: 'Funnels',
      icon: FiTrendingUp,
      title: 'SaaS Lead Generation',
      client: 'B2B Software Company',
      challenge: 'Low conversion rates and expensive lead costs',
      solution: 'Designed multi-step funnel with lead magnet, automated email sequences, and conversion-optimized landing pages',
      results: {
        'Leads Generated': '+520%',
        'Cost Per Lead': '-35%',
        'Sales Conversion': '+180%',
      },
      testimonial: 'Our lead quality and quantity both skyrocketed. The automation system alone has saved us 20 hours per week.',
      author: 'Marcus Johnson, Founder',
      timeframe: '4 months',
    },
    {
      category: 'Branding',
      icon: FiZap,
      title: 'Brand Launch Campaign',
      client: 'Health & Wellness Startup',
      challenge: 'New brand with zero market presence',
      solution: 'Created complete brand identity, launched viral content campaign, and built engaged community',
      results: {
        'Reach': '2.1M people',
        'Engagement Rate': '+450%',
        'First Month Sales': '$180k',
      },
      testimonial: 'They didn\'t just create a brand, they created a movement. Our launch exceeded every expectation.',
      author: 'Emily Rodriguez, Founder',
      timeframe: '3 months',
    },
    {
      category: 'SEO',
      icon: FiSearch,
      title: 'Organic Traffic Growth',
      client: 'Local Service Business',
      challenge: 'Zero organic visibility, completely dependent on paid ads',
      solution: 'Technical SEO overhaul, content strategy, local SEO optimization, and link building',
      results: {
        'Organic Traffic': '+720%',
        'Keyword Rankings': '150+ page 1',
        'Leads From Organic': '+890%',
      },
      testimonial: 'We now get more qualified leads from SEO than paid ads. It\'s become our most valuable marketing asset.',
      author: 'David Kim, Owner',
      timeframe: '8 months',
    },
    {
      category: 'Paid Ads',
      icon: FiTarget,
      title: 'Multi-Channel Scaling',
      client: 'DTC Beauty Brand',
      challenge: 'Maxed out on Meta Ads, needed new growth channels',
      solution: 'Expanded to Google Shopping, TikTok Ads, and Pinterest with unified tracking',
      results: {
        'Total Revenue': '+560%',
        'Blended ROAS': '3.9x',
        'New Channels': '3 profitable',
      },
      testimonial: 'They diversified our traffic sources while maintaining profitability. Now we\'re not dependent on one platform.',
      author: 'Lisa Park, Co-Founder',
      timeframe: '5 months',
    },
    {
      category: 'Funnels',
      icon: FiTrendingUp,
      title: 'Webinar Funnel System',
      client: 'Online Course Creator',
      challenge: 'Low show-up rates and poor webinar conversions',
      solution: 'Rebuilt entire webinar funnel with optimized registration, reminder sequences, and sales system',
      results: {
        'Show-up Rate': '+185%',
        'Webinar Conversion': '+230%',
        'Revenue Per Attendee': '+340%',
      },
      testimonial: 'Our webinars went from barely breaking even to being our primary revenue source.',
      author: 'James Martinez, Creator',
      timeframe: '3 months',
    },
  ];

  const filteredStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <section className="section-padding bg-supreme-black">
      <div className="container-custom">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-supreme-gold text-supreme-black'
                  : 'glass-effect text-platinum-white hover:border-supreme-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-2xl overflow-hidden group"
              >
                {/* Header */}
                <div className="p-8 bg-gradient-to-br from-supreme-gold/10 to-electric-blue/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-supreme-gold font-semibold">{study.category}</span>
                    <study.icon className="text-2xl text-supreme-gold" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold text-platinum-white mb-2 group-hover:text-supreme-gold transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-steel-gray">{study.client}</p>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-supreme-gold uppercase mb-2">Challenge</h4>
                    <p className="text-steel-gray text-sm">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-supreme-gold uppercase mb-2">Solution</h4>
                    <p className="text-steel-gray text-sm">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-supreme-gold uppercase mb-3">Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(study.results).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-montserrat font-bold text-supreme-gold mb-1">
                            {value}
                          </div>
                          <div className="text-xs text-steel-gray">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="border-t border-steel-gray border-opacity-20 pt-6">
                    <p className="text-platinum-white text-sm italic mb-3">
                      "{study.testimonial}"
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-steel-gray text-xs">— {study.author}</p>
                      <span className="text-xs text-supreme-gold">{study.timeframe}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ResultsGrid;
