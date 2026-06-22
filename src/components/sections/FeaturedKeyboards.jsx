import React from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, ShoppingCart } from 'lucide-react';
import { useTilt, useScrollVisibility } from '../../utils/hooks';
import { products } from '../../data/products';
import { useStore } from '../../store/useStore';

export const FeaturedKeyboards = () => {
  const { addToCart } = useStore();
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
      className="py-20 px-4 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-magenta opacity-5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan opacity-5 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.p
            variants={itemVariants}
            className="text-neon-cyan uppercase tracking-widest font-bold mb-4"
          >
            Featured Collection
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-black mb-4"
          >
            <span className="neon-glow">Premium Keyboards</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Experience our most popular mechanical keyboards with cutting-edge technology and premium build quality.
          </motion.p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variants={itemVariants}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, variants, onAddToCart }) => {
  const { elementRef, tilt } = useTilt();
  const { addToWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <motion.div
      ref={elementRef}
      variants={variants}
      className="group relative h-full"
      whileHover={{ y: -5 }}
    >
      <div
        className="glass-effect rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-2xl hover:shadow-neon-cyan/30 border border-gray-700/50 hover:border-neon-cyan/50"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX * 0.5}deg) rotateY(${tilt.rotateY * 0.5}deg) scale(1)`
        }}
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-dark-input flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          {/* Quick Actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-3 bg-neon-cyan text-black rounded-full hover:scale-110 transition-transform duration-200 shadow-lg">
              <Eye size={20} />
            </button>
            <button
              onClick={() => addToWishlist(product)}
              className={`p-3 rounded-full hover:scale-110 transition-all duration-200 shadow-lg ${
                isWishlisted
                  ? 'bg-neon-magenta text-white scale-110'
                  : 'bg-neon-cyan text-black'
              }`}
            >
              ❤️
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1 group-hover:text-neon-cyan transition-colors duration-200 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-400">{product.category}</p>
              </div>
              <span className="text-2xl font-black text-neon-magenta flex-shrink-0 ml-2">
                ${product.price}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-neon-cyan text-neon-cyan' : 'text-gray-600'}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400">({product.reviews})</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-4 line-clamp-2">
              {product.description}
            </p>

            {/* Specs */}
            <div className="space-y-1 mb-4 text-xs">
              {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                <p key={key} className="text-gray-400">
                  <span className="text-neon-cyan font-semibold capitalize">{key}:</span> {value}
                </p>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 mt-auto">
            <button
              onClick={onAddToCart}
              className="flex-1 bg-gradient-to-r from-neon-cyan to-neon-magenta text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-2 text-sm"
            >
              <ShoppingCart size={16} />
              Add
            </button>
            <button className="flex-1 px-3 py-3 border-2 border-neon-cyan text-neon-cyan rounded-lg hover:bg-neon-cyan/10 transition-all duration-300 font-semibold text-sm">
              View
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedKeyboards;
