import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'Paid Advertising', href: '/services#paid-ads' },
      { name: 'Funnels & Automation', href: '/services#funnels' },
      { name: 'Branding & Creative', href: '/services#branding' },
      { name: 'SEO & Organic Growth', href: '/services#seo' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Results', href: '/results' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    Resources: [
      { name: 'Free Audit', href: '/free-audit' },
      { name: 'Case Studies', href: '/results' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-supreme-black border-t border-steel-gray border-opacity-20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-supreme-black rounded-full flex items-center justify-center border-2 border-supreme-gold">
                <span className="text-platinum-white font-orbitron font-bold">JSM</span>
              </div>
              <span className="font-orbitron text-lg font-bold text-platinum-white">
                J SUPREME <span className="text-supreme-gold">MARKETING</span>
              </span>
            </Link>
            <p className="text-steel-gray mb-6 max-w-md">
              Supreme marketing systems that turn attention into predictable revenue. 
              Building high-performance strategies for ambitious brands.
            </p>
            
            {/* Contact Information */}
            <div className="mb-6 space-y-2">
              <p className="text-steel-gray">
                <a href="mailto:global.jsuprememarketing@gmail.com" className="hover:text-supreme-gold transition-colors">
                  global.jsuprememarketing@gmail.com
                </a>
              </p>
              <p className="text-steel-gray">
                <a href="tel:6582182282" className="hover:text-supreme-gold transition-colors">
                  658-218-2282
                </a>
              </p>
              <p className="text-steel-gray">Kingston, Jamaica</p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white bg-opacity-5 rounded-full flex items-center justify-center 
                           text-platinum-white hover:text-supreme-gold hover:bg-supreme-gold hover:bg-opacity-20 
                           transition-all duration-300"
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-orbitron text-platinum-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-steel-gray hover:text-supreme-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-steel-gray border-opacity-20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-steel-gray text-sm">
            © {currentYear} J Supreme Marketing. All rights reserved.
          </p>
          <p className="text-steel-gray text-sm">
            Built for performance. Designed for growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
