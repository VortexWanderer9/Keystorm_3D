import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import InteractiveKeyboard from '../3d/InteractiveKeyboard';
import { useStore } from '../../store/useStore';

export const HeroSection = () => {
  const { toggleCart } = useStore();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-dark-bg via-dark-bg to-dark-card">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-neon-cyan opacity-5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-neon-purple opacity-5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative w-full h-full flex items-center">
        {/* Content */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-1/2 px-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="text-neon-cyan text-lg font-bold tracking-widest uppercase">
              Welcome to
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-7xl font-black mb-6 leading-tight"
          >
            <span className="neon-glow">Keystorm 3D</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
          >
            Premium mechanical keyboards engineered for perfection. Experience the ultimate blend of performance, precision, and aesthetics.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-6"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-lg font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
            <button className="px-8 py-4 border-2 border-neon-cyan text-neon-cyan rounded-lg font-bold uppercase tracking-wider hover:bg-neon-cyan/10 transition-all duration-300">
              Explore
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex gap-12"
          >
            <div>
              <p className="text-3xl font-black text-neon-cyan">50K+</p>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-black text-neon-magenta">4.9⭐</p>
              <p className="text-gray-400">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-black text-neon-lime">100%</p>
              <p className="text-gray-400">Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Canvas */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 3]} />
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-10, -10, 10]} intensity={0.8} />
            <Suspense fallback={null}>
              <InteractiveKeyboard />
            </Suspense>
          </Canvas>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-neon-cyan rounded-full mt-2"
              animate={{ y: [0, 6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
