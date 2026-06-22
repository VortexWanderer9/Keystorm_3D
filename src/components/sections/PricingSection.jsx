import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useScrollVisibility } from '../../utils/hooks';
import { pricingPlans } from '../../data/products';

export const PricingSection = () => {
  const { elementRef, isVisible } = useScrollVisibility();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section
      ref={elementRef}
      className="py-20 px-4 bg-gradient-to-br from-dark-card via-dark-bg to-dark-card relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-magenta opacity-3 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan opacity-3 rounded-full filter blur-3xl"></div>

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
            className="text-neon-magenta uppercase tracking-widest font-bold mb-4"
          >
            Simple Pricing
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-black mb-4"
          >
            <span className="neon-glow">Choose Your Plan</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Quality keyboards for every budget and need
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -20, scale: 1.02 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 group ${
                plan.featured
                  ? 'glass-effect border-2 border-neon-cyan shadow-2xl shadow-neon-cyan/30'
                  : 'glass-effect border border-gray-700/50 hover:border-neon-cyan/50'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-neon-cyan to-neon-magenta px-6 py-1 rounded-full text-black font-bold text-sm uppercase">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <h3 className={`text-2xl font-black mb-2 ${
                  plan.featured ? 'text-neon-cyan' : 'text-white'
                }`}>
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-black">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 text-sm">Billed annually</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={20} className="text-neon-cyan flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 ${
                plan.featured
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-magenta text-black hover:shadow-lg hover:shadow-neon-cyan/50 hover:scale-105'
                  : 'border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:scale-105'
              }`}>
                {plan.cta}
              </button>

              {/* Animated Border */}
              {plan.featured && (
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  animate={{
                    borderColor: ['rgba(0, 255, 255, 0)', 'rgba(0, 255, 255, 0.5)', 'rgba(0, 255, 255, 0)']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <p className="text-gray-400 text-lg">
            All plans include free shipping, 2-year warranty, and premium customer support
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
