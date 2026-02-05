'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiClock, FiArrowRight } from 'react-icons/fi';

const BlogGrid = () => {
  const blogPosts = [
    {
      title: 'How to Scale Paid Ads Without Killing Your ROAS',
      excerpt: 'Learn the exact framework we use to scale ad accounts from $10k to $100k+ per month while maintaining profitability.',
      category: 'Paid Advertising',
      date: 'Feb 2, 2026',
      readTime: '8 min read',
      slug: 'scale-paid-ads-roas',
    },
    {
      title: 'The Ultimate Guide to High-Converting Landing Pages',
      excerpt: 'Stop losing money on traffic. These 12 elements will transform your landing pages into conversion machines.',
      category: 'Conversion Optimization',
      date: 'Jan 28, 2026',
      readTime: '12 min read',
      slug: 'high-converting-landing-pages',
    },
    {
      title: 'Why Your Funnel is Leaking Money (And How to Fix It)',
      excerpt: 'Discover the 7 most common funnel leaks that cost businesses thousands per month — and how to plug them.',
      category: 'Funnels',
      date: 'Jan 25, 2026',
      readTime: '10 min read',
      slug: 'funnel-leaking-money',
    },
    {
      title: 'Meta Ads in 2026: What Changed and How to Win',
      excerpt: 'Meta algorithm has evolved. Here is what is working now for high-performing advertisers.',
      category: 'Paid Advertising',
      date: 'Jan 20, 2026',
      readTime: '7 min read',
      slug: 'meta-ads-2026',
    },
    {
      title: 'Building a Brand That Sells: The Supreme Framework',
      excerpt: 'Brand is not just pretty colors. It is a sales asset. Here is how to build one that actually drives revenue.',
      category: 'Branding',
      date: 'Jan 15, 2026',
      readTime: '15 min read',
      slug: 'building-brand-that-sells',
    },
    {
      title: 'Email Marketing: The $1M Channel You Are Ignoring',
      excerpt: 'Email still outperforms every other channel for ROI. Here is how to build an email system that prints money.',
      category: 'Email Marketing',
      date: 'Jan 10, 2026',
      readTime: '11 min read',
      slug: 'email-marketing-roi',
    },
  ];

  return (
    <section className="section-padding bg-supreme-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-supreme-gold font-semibold">{post.category}</span>
                    <div className="flex items-center text-steel-gray text-sm">
                      <FiClock className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-orbitron font-bold mb-4 text-platinum-white group-hover:text-supreme-gold transition-colors duration-300">
                    {post.title}
                  </h2>
                  
                  <p className="text-steel-gray mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-steel-gray border-opacity-20 pt-4">
                    <span className="text-steel-gray text-sm">{post.date}</span>
                    <button className="text-supreme-gold font-semibold text-sm hover:underline flex items-center group">
                      Read More
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center space-x-4"
        >
          <button className="px-6 py-3 glass-effect rounded-lg text-platinum-white hover:border-supreme-gold transition-all duration-300">
            Previous
          </button>
          <button className="px-6 py-3 bg-supreme-gold text-supreme-black rounded-lg font-semibold">
            1
          </button>
          <button className="px-6 py-3 glass-effect rounded-lg text-platinum-white hover:border-supreme-gold transition-all duration-300">
            2
          </button>
          <button className="px-6 py-3 glass-effect rounded-lg text-platinum-white hover:border-supreme-gold transition-all duration-300">
            3
          </button>
          <button className="px-6 py-3 glass-effect rounded-lg text-platinum-white hover:border-supreme-gold transition-all duration-300">
            Next
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogGrid;
