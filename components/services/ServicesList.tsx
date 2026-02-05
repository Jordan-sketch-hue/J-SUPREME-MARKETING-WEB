'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiTarget, FiTrendingUp, FiZap, FiSearch, FiArrowRight } from 'react-icons/fi';

const ServicesList = () => {
  const services = [
    {
      id: 'paid-ads',
      icon: FiTarget,
      title: 'Paid Advertising',
      tagline: 'Data-driven ads that bring buyers, not clicks.',
      description: 'We build and manage paid ad systems designed for ROI, not vanity metrics. Every dollar is tracked, tested, and optimized for maximum return.',
      features: [
        'Meta Ads (Facebook & Instagram)',
        'Google Ads (Search & Shopping)',
        'TikTok Ads',
        'LinkedIn Ads',
        'Retargeting & Lookalike Audiences',
        'Creative Testing & Optimization',
        'Multi-Channel Attribution',
        'Performance Reporting',
      ],
      process: [
        'Audit current ad performance',
        'Build data-driven strategy',
        'Create high-converting creatives',
        'Launch & monitor campaigns',
        'Optimize based on data',
        'Scale winning campaigns',
      ],
    },
    {
      id: 'funnels',
      icon: FiTrendingUp,
      title: 'Funnels & Automation',
      tagline: 'Traffic is useless without conversion. We build funnels that close.',
      description: 'High-converting landing pages, lead magnets, and automation systems that turn cold traffic into paying customers on autopilot.',
      features: [
        'High-Converting Landing Pages',
        'Lead Magnet Creation',
        'Email Marketing Automation',
        'SMS Marketing Sequences',
        'CRM Integration & Setup',
        'Webinar Funnels',
        'Sales Page Optimization',
        'Abandoned Cart Recovery',
      ],
      process: [
        'Map customer journey',
        'Design funnel architecture',
        'Build landing pages & forms',
        'Set up automation sequences',
        'Integrate with CRM',
        'A/B test & optimize',
      ],
    },
    {
      id: 'branding',
      icon: FiZap,
      title: 'Branding & Creative',
      tagline: 'Strong brands do not chase attention — they command it.',
      description: 'From brand identity to ad creative, we build messaging and visuals that sell without begging. Your brand should work as hard as your ads.',
      features: [
        'Brand Identity Development',
        'Logo & Visual Design',
        'Ad Creative Production',
        'Copywriting & Messaging',
        'Content Strategy',
        'Social Media Assets',
        'Video Production',
        'Brand Guidelines',
      ],
      process: [
        'Discover brand positioning',
        'Develop visual identity',
        'Create messaging framework',
        'Produce creative assets',
        'Test & iterate',
        'Build brand guidelines',
      ],
    },
    {
      id: 'seo',
      icon: FiSearch,
      title: 'SEO & Organic Growth',
      tagline: 'Long-term growth systems that compound.',
      description: 'Paid ads bring fast results. SEO builds equity. We create organic growth systems that generate qualified leads for years to come.',
      features: [
        'Technical SEO Audit',
        'On-Page Optimization',
        'Content Strategy & Creation',
        'Keyword Research',
        'Link Building',
        'Local SEO',
        'Blog Systems',
        'Performance Tracking',
      ],
      process: [
        'Complete SEO audit',
        'Identify keyword opportunities',
        'Optimize site structure',
        'Create content strategy',
        'Build quality backlinks',
        'Monitor & refine',
      ],
    },
  ];

  return (
    <section className="section-padding bg-supreme-black">
      <div className="container-custom">
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-supreme-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                    <service.icon className="text-2xl text-supreme-gold" />
                  </div>
                  <span className="text-sm text-supreme-gold font-semibold uppercase tracking-wide">
                    Service {index + 1}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-platinum-white">
                  {service.title}
                </h2>
                
                <p className="text-xl text-supreme-gold mb-6 font-semibold">
                  {service.tagline}
                </p>
                
                <p className="text-steel-gray mb-8 leading-relaxed">
                  {service.description}
                </p>

                <Link href="/free-audit" className="btn-primary inline-flex items-center space-x-2 group">
                  <span>Get Started</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Features Side */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="glass-effect p-8 rounded-2xl">
                  <h3 className="text-2xl font-orbitron font-semibold mb-6 text-platinum-white">
                    What's Included
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="w-1.5 h-1.5 bg-supreme-gold rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-platinum-white">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-steel-gray border-opacity-20 pt-6">
                    <h4 className="text-lg font-orbitron font-semibold mb-4 text-platinum-white">
                      Our Process
                    </h4>
                    <div className="space-y-3">
                      {service.process.map((step, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <span className="w-6 h-6 bg-supreme-gold bg-opacity-20 rounded-full flex items-center justify-center text-supreme-gold text-sm font-semibold">
                            {i + 1}
                          </span>
                          <span className="text-steel-gray text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
