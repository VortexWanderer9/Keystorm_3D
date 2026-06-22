import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/sections/HeroSection';
import FeaturedKeyboards from './components/sections/FeaturedKeyboards';
import KeyboardBuilder from './components/sections/KeyboardBuilder';
import FeaturesSection from './components/sections/FeaturesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import GallerySection from './components/sections/GallerySection';
import PricingSection from './components/sections/PricingSection';
import NewsletterSection from './components/sections/NewsletterSection';
import Footer from './components/sections/Footer';

function App() {

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Products */}
        <FeaturedKeyboards />

        {/* Keyboard Builder */}
        <KeyboardBuilder />

        {/* Features */}
        <FeaturesSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Gallery */}
        <GallerySection />

        {/* Pricing */}
        <PricingSection />

        {/* Newsletter */}
        <NewsletterSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Cursor Glow Effect */}
      <CursorGlow />
    </div>
  )
}

const CursorGlow = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-30 w-8 h-8 rounded-full border-2 border-neon-cyan opacity-50 transition-all duration-150"
      style={{
        left: `${mousePos.x - 16}px`,
        top: `${mousePos.y - 16}px`,
      }}
    >
      <div className="w-full h-full rounded-full border-2 border-neon-magenta opacity-50"></div>
    </div>
  );
};

export default App;
