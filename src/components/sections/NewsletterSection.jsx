import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollVisibility } from '../../utils/hooks';
import { Mail } from 'lucide-react';

export const NewsletterSection = () => {
  const { elementRef, isVisible } = useScrollVisibility();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section
      ref={elementRef}
      className="py-20 px-4 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan opacity-5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-magenta opacity-5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="glass-effect rounded-2xl p-12 md:p-16 border border-gray-700/50 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-6 text-5xl">
            📬
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            <span className="neon-glow">Stay Updated</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Get exclusive access to new keyboard releases, special discounts, and pro tips delivered to your inbox.
          </motion.p>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neon-cyan" size={20} />
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-4 bg-dark-input border border-gray-700 rounded-lg focus:border-neon-cyan focus:outline-none transition-colors text-white placeholder-gray-500"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-magenta text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              {submitted ? '✓ Subscribed!' : 'Subscribe'}
            </button>
          </motion.form>

          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-500 mt-4"
          >
            We respect your privacy. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
