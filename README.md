# Keystorm 3D - Premium Mechanical Keyboard Landing Page

A world-class, production-ready React.js landing page for a premium mechanical keyboard brand with advanced 3D effects, real-time mouse interactions, animations, and full e-commerce functionality.

![Keystorm 3D](https://img.shields.io/badge/React-19.2.6-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0-purple?logo=vite)
![Three.js](https://img.shields.io/badge/Three.js-Latest-green?logo=three.js)

## 🎨 Design Features

- **Futuristic Premium Aesthetic**: Apple-level design quality with dark theme and neon RGB accents
- **High-End 3D Product Showcase**: Interactive 3D keyboard model that rotates with mouse movement
- **Glassmorphism Effects**: Modern glass-like UI components with blur effects
- **Smooth Animations**: Page-load cinematics, scroll-triggered animations, and micro-interactions
- **Responsive Design**: Fully responsive for desktop, tablet, and mobile devices
- **Dynamic Particle Effects**: RGB-colored floating particles in 3D scenes
- **Interactive Spotlight**: Mouse cursor glow effect following user movement

## 🚀 Technology Stack

### Core Technologies

- **React.js** (v19.2.6) - UI Framework
- **Vite** (v8.0) - Build tool with Hot Module Replacement
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Framer Motion** - Animation library
- **GSAP** - Advanced animation timeline library
- **Zustand** - State management for shopping cart
- **Lucide React** - Icon library

### Development Tools

- ESLint - Code linting
- PostCSS - CSS processing
- Autoprefixer - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx                 # Header with shopping cart
│   ├── 3d/
│   │   └── InteractiveKeyboard.jsx    # 3D keyboard model
│   └── sections/
│       ├── HeroSection.jsx             # Hero with 3D showcase
│       ├── FeaturedKeyboards.jsx       # Product grid with tilt effect
│       ├── KeyboardBuilder.jsx         # Interactive customizer
│       ├── FeaturesSection.jsx         # Feature highlights
│       ├── TestimonialsSection.jsx     # Customer testimonials
│       ├── GallerySection.jsx          # Image gallery with parallax
│       ├── PricingSection.jsx          # Pricing tiers
│       ├── NewsletterSection.jsx       # Newsletter signup
│       └── Footer.jsx                  # Footer with links
├── store/
│   └── useStore.js                    # Zustand store (cart, wishlist, filters)
├── data/
│   └── products.js                    # Mock product data
├── utils/
│   └── hooks.js                       # Custom React hooks
├── App.jsx                            # Main app component
├── index.css                          # Global styles
└── main.jsx                           # Entry point
```

## ✨ Key Sections

### 1. Hero Section

- Fullscreen 3D mechanical keyboard model
- Real-time mouse interaction (rotates based on cursor position)
- Animated headlines: "Precision Meets Performance"
- Premium CTA buttons with gradient effects
- Animated scroll indicator
- Floating particles and dynamic lighting

### 2. Featured Keyboards

- 6 premium keyboard products in responsive grid
- 3D tilt effect on hover
- Product ratings with star system
- Quick View and Add to Cart buttons
- Wishlist functionality
- Hover-triggered animations

### 3. Custom Keyboard Builder

- Interactive configurator with 5 customization options:
  - Mechanical Switches (Gateron, Cherry MX, Kailh)
  - Keycap Materials (ABS, PBT, OEM Profile)
  - RGB Lighting (Per-Key, Multi-Zone, Static)
  - Frame Materials (Aluminum, Steel, Plastic)
  - Keyboard Layouts (60%, 75%, TKL, Full Size)
- Real-time price calculation
- Visual configuration preview
- "Build Now" CTA

### 4. Features Section

- 6 animated feature cards:
  - Hot-Swappable Switches
  - RGB Lighting
  - Wireless Connectivity
  - CNC Aluminum Frame
  - Custom Firmware
  - Premium Sound Dampening
- Hover animations with icon scale effects

### 5. Testimonials

- 4 customer testimonials with 5-star ratings
- Profile pictures using avatar API
- 3D floating card effects
- Staggered animations on scroll

### 6. Gallery

- 6 premium product images
- Mouse-follow parallax effects
- Smooth zoom on hover
- Border glow effects on interaction
- Interactive hover states

### 7. Pricing Plans

- 3 product tiers (Essential, Pro, Elite)
- Feature lists with checkmarks
- Animated pricing cards
- "Most Popular" badge on Pro tier
- Pulsing border animation

### 8. Newsletter

- Email subscription form
- Email validation
- Success animation
- Privacy notice

### 9. Footer

- Brand information
- Social media links
- Product, Support, and Company link sections
- Contact information
- Copyright and legal links

## 🛒 E-Commerce Features

### Shopping Cart

- **Add to Cart**: Add products with single quantity increment
- **Remove from Cart**: Delete items from cart
- **Quantity Controls**: Increase/decrease quantity with +/- buttons
- **Cart Sidebar**: Slide-out cart panel with animations
- **Total Price**: Real-time calculation of cart total
- **Cart Badge**: Animated badge showing item count
- **Checkout Page**: UI-ready for integration

### Wishlist

- Add/remove products to wishlist
- Heart icon toggle with color change
- Wishlist persistence-ready

### Product Filters

- Search by product name
- Filter by price range
- Filter by type (mechanical, wireless, etc.)
- Filter by switch type
- Sort by featured/price/rating
- All state managed by Zustand

## 🎮 Mouse Interactions & Animations

### Custom Hooks

- `useMousePosition()` - Track real-time cursor position
- `useParallax()` - Parallax effect on mouse movement
- `useTilt()` - 3D tilt effect on elements
- `useScrollVisibility()` - Trigger animations on scroll
- `useScrollPosition()` - Track scroll progress

### Animation Libraries

- **Framer Motion**: Component entrance animations, hover effects, scroll animations
- **GSAP**: Complex animation timelines, RGB gradient animations
- **Three.js**: 3D keyboard model with dynamic lighting and particle effects

### Visual Effects

- Neon glow effects on text and buttons
- RGB gradient animations
- Cursor glow tracking mouse
- Floating particles with emissive materials
- Glass morphism with backdrop blur
- Smooth transitions on all interactive elements

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
cd /home/tyrell-wellick/Projects/Code/KEY

# Install dependencies
npm install

# Start development server
npm run dev
```

Development server will run on `http://localhost:5174/`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder, optimized and minified.

### Preview Production Build

```bash
npm run preview
```

## 📊 Performance Optimizations

- **Lazy Loading**: Components load on-demand via React.lazy and Suspense
- **Code Splitting**: Automatic chunking by Vite
- **Optimized Three.js**: Efficient rendering with proper cleanup
- **Image Optimization**: Using external image URLs for faster loading
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Smooth 60 FPS**: Optimized animations for smooth performance

## 🎯 Production Ready Features

✅ Responsive Design (Mobile, Tablet, Desktop)
✅ SEO-Friendly Structure
✅ Accessibility Support (ARIA labels, semantic HTML)
✅ Performance Optimized (60 FPS animations)
✅ Clean Component Architecture
✅ State Management (Shopping cart, wishlist, filters)
✅ Mock Product Data (Easy to replace with API)
✅ Error Boundaries Ready
✅ HMR Development Experience
✅ Production Build Optimized

## 🔧 Customization

### Change Brand Colors

Edit the color variables in `tailwind.config.js`:

```javascript
colors: {
  neon: {
    cyan: '#00ffff',
    magenta: '#ff00ff',
    lime: '#00ff00',
    purple: '#a020f0',
  }
}
```

### Update Product Data

Edit `src/data/products.js` to add/modify products, testimonials, features, and pricing.

### Modify 3D Scene

Edit `src/components/3d/InteractiveKeyboard.jsx` to customize the 3D keyboard model, materials, and effects.

### Add Real API

Replace mock data in `src/data/products.js` with API calls:

```javascript
// Example: Replace mock data with API
const fetchProducts = async () => {
  const res = await fetch("/api/products");
  return await res.json();
};
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All sections use Tailwind's responsive prefixes (`md:`, `lg:`) for optimal display on all devices.

## 🌟 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile Browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies

### Production

- react: ^19.2.6
- react-dom: ^19.2.6
- three: latest
- @react-three/fiber: latest
- @react-three/drei: latest
- framer-motion: latest
- gsap: latest
- zustand: latest
- lucide-react: latest
- tailwindcss: latest

### Development

- @vitejs/plugin-react: ^6.0.1
- vite: ^8.0.12
- eslint: ^10.3.0
- postcss: latest
- autoprefixer: latest

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

### GitHub Pages

Add to `vite.config.js`:

```javascript
export default {
  base: "/repo-name/",
  // ...
};
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For issues, questions, or suggestions, please open an issue in the repository.

---

**Made with ❤️ using React, Three.js, and Tailwind CSS**

Keystorm 3D - Premium Mechanical Keyboards Landing Page

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
