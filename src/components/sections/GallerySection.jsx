import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollVisibility, useMousePosition } from '../../utils/hooks';
import { galleryImages } from '../../data/products';

export const GallerySection = () => {
  const { elementRef, isVisible } = useScrollVisibility();
  const [hoveredId, setHoveredId] = useState(null);
  const mousePos = useMousePosition();
  const containerRef = useRef();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <section
      ref={elementRef}
      className="py-20 px-4 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-lime opacity-3 rounded-full filter blur-3xl"></div>

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
            className="text-neon-cyan uppercase tracking-widest font-bold mb-4"
          >
            Visual Showcase
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-black mb-4"
          >
            <span className="neon-glow">Premium Gallery</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Stunning keyboards in action - explore our collection
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {galleryImages.map((image, index) => (
            <GalleryCard
              key={image.id}
              image={image}
              variants={itemVariants}
              isHovered={hoveredId === image.id}
              onHover={() => setHoveredId(image.id)}
              onHoverEnd={() => setHoveredId(null)}
              mousePos={mousePos}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const GalleryCard = ({ image, variants, isHovered, onHover, onHoverEnd, mousePos }) => {
  const cardRef = useRef();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setOffset({
      x: (x - rect.width / 2) * 0.1,
      y: (y - rect.height / 2) * 0.1
    });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative w-full h-full">
        <img
          src={image.image}
          alt={image.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          style={{
            transform: isHovered ? `scale(1.1) translate(${offset.x}px, ${offset.y}px)` : 'scale(1)'
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Content */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-6"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
          <p className="text-gray-300">Explore the details</p>
        </motion.div>

        {/* Border Glow */}
        <div className={`absolute inset-0 border-2 transition-all duration-300 ${
          isHovered ? 'border-neon-cyan shadow-lg shadow-neon-cyan/50' : 'border-transparent'
        }`}></div>
      </div>
    </motion.div>
  );
};

export default GallerySection;
