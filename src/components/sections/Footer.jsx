import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const socialLinks = [
    { label: 'Facebook', icon: 'f', href: '#' },
    { label: 'GitHub', icon: '⚙️', href: '#' },
    { label: 'LinkedIn', icon: 'in', href: '#' },
    { label: 'Twitter', icon: 'X', href: '#' }
  ];

  const productLinks = [
    'All Keyboards',
    'Custom Builder',
    'Keycaps',
    'Switches',
    'Cables'
  ];

  const supportLinks = [
    'Contact Us',
    'FAQ',
    'Shipping Info',
    'Returns',
    'Warranty'
  ];

  const companyLinks = [
    'About Us',
    'Blog',
    'Press',
    'Careers',
    'Privacy Policy'
  ];

  return (
    <footer className="bg-gradient-to-b from-dark-card to-dark-bg border-t border-gray-700/50 text-gray-400">
      {/* Main Footer */}
      <motion.div
        className="px-4 py-16 max-w-7xl mx-auto"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-2xl font-black neon-glow mb-4">Keystorm 3D</h3>
            <p className="text-sm mb-6 text-gray-500">
              Premium mechanical keyboards engineered for perfection.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-3 rounded-lg border border-gray-700 hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                >
                  <span className="text-lg font-bold">{icon}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-neon-cyan transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-neon-cyan transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-neon-cyan transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm hover:text-neon-cyan transition-colors">
                <Phone size={16} className="text-neon-cyan flex-shrink-0" />
                +1 (800) KEYS-123
              </li>
              <li className="flex items-start gap-3 text-sm hover:text-neon-cyan transition-colors">
                <Mail size={16} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                support@keystorm3d.com
              </li>
              <li className="flex items-start gap-3 text-sm hover:text-neon-cyan transition-colors">
                <MapPin size={16} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                San Francisco, CA 94105
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Bottom */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <p>© {currentYear} Keystorm 3D. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-magenta opacity-2 rounded-full filter blur-3xl -z-10"></div>
    </footer>
  );
};

export default Footer;
