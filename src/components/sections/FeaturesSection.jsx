import React from 'react';
import { motion } from 'framer-motion';
import { useScrollVisibility } from '../../utils/hooks';
import { features } from '../../data/products';

export const FeaturesSection = () => {
  const { elementRef, isVisible } = useScrollVisibility();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      ref={elementRef}
      className="py-20 px-4 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-magenta opacity-3 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan opacity-3 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.p
            variants={itemVariants}
            className="text-neon-lime uppercase tracking-widest font-bold mb-4"
          >
            Powerful Features
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-black mb-4"
          >
            <span className="neon-glow">What Makes Us Different</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Industry-leading technology and craftsmanship in every keyboard
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, rotate: 1 }}
              className="group glass-effect rounded-xl p-8 border border-gray-700/50 hover:border-neon-cyan/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Icon Border Animation */}
              <div className="mt-6 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-neon-cyan to-neon-magenta transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
