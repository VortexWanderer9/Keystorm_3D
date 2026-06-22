import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { useStore } from '../store/useStore.js';

export const Navigation = () => {
  const { cartOpen, toggleCart, cartItems, removeFromCart, updateQuantity, getTotalPrice } = useStore();

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      {/* Header */}
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-700/50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black neon-glow cursor-pointer"
          >
            ⌨️ Keystorm 3D
          </motion.div>

          {/* Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {['Products', 'Features', 'Pricing', 'Blog'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold hover:text-neon-cyan transition-colors duration-300 relative group"
              >
                {item}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-magenta group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Cart Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleCart}
            className="relative p-3 rounded-lg border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
          >
            <ShoppingCart size={20} />
            {cartItems.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-gradient-to-r from-neon-magenta to-neon-cyan text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
              >
                {cartItems.length}
              </motion.span>
            )}
          </motion.button>
        </div>
      </motion.header>

      {/* Shopping Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleCart}
              className="fixed inset-0 bg-black/50 z-40 md:z-40"
            />

            {/* Cart Sidebar */}
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed right-0 top-0 h-screen w-full max-w-md bg-dark-card border-l border-gray-700 z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <h2 className="text-2xl font-black">Shopping Cart</h2>
                <button
                  onClick={toggleCart}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart size={48} className="mx-auto mb-4 text-gray-600" />
                    <p className="text-gray-400">Your cart is empty</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="glass-effect rounded-lg p-4 border border-gray-700"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-sm mb-1">{item.name}</h3>
                          <p className="text-neon-cyan font-bold text-sm mb-3">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-700 rounded"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-700 rounded"
                            >
                              <Plus size={16} />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto p-1 text-red-500 hover:bg-red-500/10 rounded"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-gray-700 p-6 space-y-4">
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-neon-cyan text-2xl">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-neon-cyan to-neon-magenta text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300">
                    Checkout
                  </button>
                  <button
                    onClick={toggleCart}
                    className="w-full py-3 border border-neon-cyan text-neon-cyan rounded-lg hover:bg-neon-cyan/10 transition-all duration-300"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
