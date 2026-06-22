import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollVisibility } from '../../utils/hooks';

export const KeyboardBuilder = () => {
  const [config, setConfig] = useState({
    switches: 'gateron',
    keycaps: 'abs',
    rgb: 'perKey',
    frame: 'aluminum',
    layout: '75',
  });

  const { elementRef, isVisible } = useScrollVisibility();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const switchOptions = [
    { value: 'gateron', label: 'Gateron Pro', price: 50 },
    { value: 'cherry', label: 'Cherry MX', price: 70 },
    { value: 'kailh', label: 'Kailh Box', price: 45 },
  ];

  const keycapOptions = [
    { value: 'abs', label: 'ABS Keycaps', price: 30 },
    { value: 'pbt', label: 'PBT Keycaps', price: 60 },
    { value: 'oem', label: 'OEM Profile', price: 40 },
  ];

  const rgbOptions = [
    { value: 'perKey', label: 'Per-Key RGB', price: 80 },
    { value: 'zone', label: 'Multi-Zone', price: 50 },
    { value: 'static', label: 'Static Color', price: 20 },
  ];

  const frameOptions = [
    { value: 'aluminum', label: 'CNC Aluminum', price: 120 },
    { value: 'steel', label: 'Steel Frame', price: 80 },
    { value: 'plastic', label: 'Premium Plastic', price: 30 },
  ];

  const layoutOptions = [
    { value: '60', label: '60%', price: 0 },
    { value: '75', label: '75%', price: 20 },
    { value: 'tkl', label: 'TKL', price: 40 },
    { value: 'full', label: 'Full Size', price: 60 },
  ];

  const basePrice = 199.99;
  const totalPrice = basePrice +
    (switchOptions.find(o => o.value === config.switches)?.price || 0) +
    (keycapOptions.find(o => o.value === config.keycaps)?.price || 0) +
    (rgbOptions.find(o => o.value === config.rgb)?.price || 0) +
    (frameOptions.find(o => o.value === config.frame)?.price || 0) +
    (layoutOptions.find(o => o.value === config.layout)?.price || 0);

  return (
    <section
      ref={elementRef}
      className="py-20 px-4 bg-gradient-to-br from-dark-card via-dark-bg to-dark-card relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan opacity-3 rounded-full filter blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Customize Your Build
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-black mb-4"
          >
            <span className="neon-glow">Keyboard Builder</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400"
          >
            Create your perfect keyboard with our interactive customizer
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Customizer */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Switches */}
            <motion.div variants={itemVariants} className="space-y-4">
              <label className="text-lg font-bold flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-neon-cyan flex items-center justify-center text-black font-bold">1</span>
                Mechanical Switches
              </label>
              <div className="grid grid-cols-3 gap-4">
                {switchOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setConfig({ ...config, switches: option.value })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      config.switches === option.value
                        ? 'border-neon-cyan bg-neon-cyan/20'
                        : 'border-gray-700 hover:border-neon-cyan/50'
                    }`}
                  >
                    <p className="font-bold text-sm">{option.label}</p>
                    <p className="text-xs text-gray-400 mt-1">+${option.price}</p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Keycaps */}
            <motion.div variants={itemVariants} className="space-y-4">
              <label className="text-lg font-bold flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-neon-magenta flex items-center justify-center text-black font-bold">2</span>
                Keycap Material
              </label>
              <div className="grid grid-cols-3 gap-4">
                {keycapOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setConfig({ ...config, keycaps: option.value })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      config.keycaps === option.value
                        ? 'border-neon-magenta bg-neon-magenta/20'
                        : 'border-gray-700 hover:border-neon-magenta/50'
                    }`}
                  >
                    <p className="font-bold text-sm">{option.label}</p>
                    <p className="text-xs text-gray-400 mt-1">+${option.price}</p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* RGB */}
            <motion.div variants={itemVariants} className="space-y-4">
              <label className="text-lg font-bold flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-neon-lime flex items-center justify-center text-black font-bold">3</span>
                RGB Lighting
              </label>
              <div className="grid grid-cols-3 gap-4">
                {rgbOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setConfig({ ...config, rgb: option.value })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      config.rgb === option.value
                        ? 'border-neon-lime bg-neon-lime/20'
                        : 'border-gray-700 hover:border-neon-lime/50'
                    }`}
                  >
                    <p className="font-bold text-sm">{option.label}</p>
                    <p className="text-xs text-gray-400 mt-1">+${option.price}</p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Frame */}
            <motion.div variants={itemVariants} className="space-y-4">
              <label className="text-lg font-bold flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-black font-bold">4</span>
                Frame Material
              </label>
              <div className="grid grid-cols-3 gap-4">
                {frameOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setConfig({ ...config, frame: option.value })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      config.frame === option.value
                        ? 'border-purple-500 bg-purple-500/20'
                        : 'border-gray-700 hover:border-purple-500/50'
                    }`}
                  >
                    <p className="font-bold text-sm">{option.label}</p>
                    <p className="text-xs text-gray-400 mt-1">+${option.price}</p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Layout */}
            <motion.div variants={itemVariants} className="space-y-4">
              <label className="text-lg font-bold flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-black font-bold">5</span>
                Keyboard Layout
              </label>
              <div className="grid grid-cols-4 gap-4">
                {layoutOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setConfig({ ...config, layout: option.value })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      config.layout === option.value
                        ? 'border-red-500 bg-red-500/20'
                        : 'border-gray-700 hover:border-red-500/50'
                    }`}
                  >
                    <p className="font-bold text-sm">{option.label}</p>
                    <p className="text-xs text-gray-400 mt-1">+${option.price}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Preview */}
          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-2xl p-8 sticky top-32"
          >
            <h3 className="text-2xl font-black mb-6">Your Build</h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                <span className="text-gray-400">Switches</span>
                <span className="font-bold">{switchOptions.find(o => o.value === config.switches)?.label}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                <span className="text-gray-400">Keycaps</span>
                <span className="font-bold">{keycapOptions.find(o => o.value === config.keycaps)?.label}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                <span className="text-gray-400">RGB</span>
                <span className="font-bold">{rgbOptions.find(o => o.value === config.rgb)?.label}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                <span className="text-gray-400">Frame</span>
                <span className="font-bold">{frameOptions.find(o => o.value === config.frame)?.label}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                <span className="text-gray-400">Layout</span>
                <span className="font-bold">{layoutOptions.find(o => o.value === config.layout)?.label}</span>
              </div>
            </div>

            <div className="mb-8 p-4 bg-neon-cyan/10 rounded-lg border border-neon-cyan/30">
              <p className="text-sm text-gray-400 mb-2">Total Price</p>
              <p className="text-4xl font-black text-neon-cyan">${totalPrice.toFixed(2)}</p>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-magenta text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-105">
              Build Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeyboardBuilder;
