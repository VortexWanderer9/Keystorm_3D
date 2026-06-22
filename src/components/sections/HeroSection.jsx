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
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-dark-bg via-dark-bg to-dark-card pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-neon-cyan opacity-5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-neon-purple opacity-5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center">
        {/* Content */}
        <motion.div
          className="w-full lg:w-1/2 z-10 px-6 sm:px-12 py-12 flex flex-col items-start justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="text-neon-cyan text-sm sm:text-lg font-bold tracking-widest uppercase">
              Welcome to
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          >
            <span className="neon-glow">Keystorm 3D</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
          >
            Premium mechanical keyboards engineered for perfection. Experience the ultimate blend of performance, precision, and aesthetics.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-cyan to-neon-magenta text-black rounded-lg font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Shop Now
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-neon-cyan text-neon-cyan rounded-lg font-bold uppercase tracking-wider hover:bg-neon-cyan/10 transition-all duration-300 text-sm sm:text-base">
              Explore
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 flex flex-wrap gap-8 sm:gap-12"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-black text-neon-cyan">50K+</p>
              <p className="text-gray-400 text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-neon-magenta">4.9⭐</p>
              <p className="text-gray-400 text-sm">Average Rating</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-neon-lime">100%</p>
              <p className="text-gray-400 text-sm">Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Canvas */}
        <div className="hidden lg:flex w-0 lg:w-1/2 h-96 lg:h-screen items-center justify-center relative">
          <Canvas dpr={[1, 2]} performance={{ min: 0.5 }}>
            <PerspectiveCamera makeDefault position={[0, 0, 3.5]} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <pointLight position={[-10, -10, 10]} intensity={0.7} />
            <Suspense fallback={<mesh><boxGeometry /><meshBasicMaterial color="#00ffff" /></mesh>}>
              <InteractiveKeyboard />
            </Suspense>
          </Canvas>
        </div>

        {/* Mobile 3D Fallback Image */}
        <div className="lg:hidden w-full h-80 flex items-center justify-center mt-8">
          <img
            src="https://images.unsplash.com/photo-1587829191301-6f356ac45c94?w=600&h=400&fit=crop&q=80"
            alt="Mechanical Keyboard"
            className="w-full h-full object-cover rounded-lg shadow-2xl shadow-neon-cyan/30"
            loading="lazy"
          />
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
