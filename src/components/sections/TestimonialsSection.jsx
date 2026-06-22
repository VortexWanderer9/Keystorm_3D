import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useScrollVisibility } from '../../utils/hooks';
import { testimonials } from '../../data/products';

export const TestimonialsSection = () => {
  const { elementRef, isVisible } = useScrollVisibility();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 20 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8 } }
  };

  return (
    <section
      ref={elementRef}
      className="py-20 px-4 bg-gradient-to-br from-dark-card via-dark-bg to-dark-card relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan opacity-3 rounded-full filter blur-3xl"></div>

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
            className="text-neon-purple uppercase tracking-widest font-bold mb-4"
          >
            Customer Love
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-black mb-4"
          >
            <span className="neon-glow">Loved by Professionals</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            See what our customers are saying about Keystorm keyboards
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -20, scale: 1.05 }}
              className="glass-effect rounded-xl p-6 border border-gray-700/50 hover:border-neon-magenta/50 transition-all duration-300 group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-neon-cyan text-neon-cyan group-hover:fill-neon-magenta group-hover:text-neon-magenta transition-colors"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-neon-cyan"
                />
                <div>
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Animated Border */}
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-neon-cyan to-neon-magenta transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
