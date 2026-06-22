export const products = [
  {
    id: 1,
    name: "Keystorm Elite Pro",
    price: 299.99,
    rating: 4.9,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1587829191301-6f356ac45c94?w=500&h=500&fit=crop",
    category: "mechanical",
    switches: "hot-swap",
    wireless: false,
    description:
      "Premium mechanical keyboard with hot-swappable switches, aluminum frame, and RGB lighting.",
    specs: {
      switchType: "Hot-Swappable",
      material: "CNC Aluminum",
      rgb: "Per-Key RGB",
      connectivity: "USB-C",
      layout: "Full Size",
    },
  },
  {
    id: 2,
    name: "Keystorm Wireless X",
    price: 249.99,
    rating: 4.8,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1595225476933-0efb8b5f5b8d?w=500&h=500&fit=crop",
    category: "mechanical",
    switches: "gateron",
    wireless: true,
    description:
      "Wireless mechanical keyboard with 80-hour battery life and 2.4GHz connection.",
    specs: {
      switchType: "Gateron Optical",
      material: "Aluminum Alloy",
      rgb: "Multi-Zone RGB",
      connectivity: "2.4GHz Wireless",
      layout: "TKL",
    },
  },
  {
    id: 3,
    name: "Keystorm Compact RGB",
    price: 199.99,
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop",
    category: "mechanical",
    switches: "cherry-mx",
    wireless: false,
    description:
      "Compact 65% mechanical keyboard perfect for gaming and typing.",
    specs: {
      switchType: "Cherry MX Switches",
      material: "Steel & Plastic",
      rgb: "RGB Backlighting",
      connectivity: "USB-C",
      layout: "65%",
    },
  },
  {
    id: 4,
    name: "Keystorm Aurora Pro",
    price: 279.99,
    rating: 4.9,
    reviews: 267,
    image:
      "https://images.unsplash.com/photo-1578506094306-246537150218?w=500&h=500&fit=crop",
    category: "mechanical",
    switches: "hot-swap",
    wireless: false,
    description:
      "Premium 75% keyboard with customizable switches and stunning LED effects.",
    specs: {
      switchType: "Hot-Swappable",
      material: "CNC Aluminum",
      rgb: "Per-Key RGB + Underglow",
      connectivity: "USB-C",
      layout: "75%",
    },
  },
  {
    id: 5,
    name: "Keystorm Ultra Light",
    price: 179.99,
    rating: 4.6,
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1587829191301-6f356ac45c94?w=500&h=500&fit=crop",
    category: "mechanical",
    switches: "kailh",
    wireless: true,
    description:
      "Ultra-lightweight wireless keyboard for on-the-go gaming and work.",
    specs: {
      switchType: "Kailh Box Switches",
      material: "Carbon Fiber",
      rgb: "Static RGB",
      connectivity: "Bluetooth 5.0",
      layout: "60%",
    },
  },
  {
    id: 6,
    name: "Keystorm Creator Series",
    price: 229.99,
    rating: 4.8,
    reviews: 198,
    image:
      "https://images.unsplash.com/photo-1595225476933-0efb8b5f5b8d?w=500&h=500&fit=crop",
    category: "mechanical",
    switches: "lubed",
    wireless: false,
    description:
      "Specifically designed for content creators with macro keys and custom layouts.",
    specs: {
      switchType: "Lubed Switches",
      material: "Aluminum",
      rgb: "Per-Key RGB",
      connectivity: "USB-C",
      layout: "Programmable",
    },
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Professional Gamer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    text: "The Keystorm Elite Pro completely changed my gaming experience. The responsiveness and build quality are unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Software Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    text: "Best keyboard investment I've made. The mechanical switches feel premium and the RGB customization is incredible.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Content Creator",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    text: "Keystorm keyboards are absolute tanks. The build quality is comparable to $400+ keyboards.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Esports Player",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    text: "I use Keystorm for competitive tournaments. The precision and durability are unbeatable.",
    rating: 5,
  },
];

export const features = [
  {
    title: "Hot-Swappable Switches",
    description:
      "Easy switch replacement without soldering. Customize your typing experience.",
    icon: "⚡",
  },
  {
    title: "RGB Lighting",
    description:
      "Per-key RGB with millions of color combinations and dynamic effects.",
    icon: "🌈",
  },
  {
    title: "Wireless Connectivity",
    description: "2.4GHz and Bluetooth 5.0 for lag-free wireless performance.",
    icon: "📡",
  },
  {
    title: "CNC Aluminum Frame",
    description:
      "Premium aluminum construction for durability and aesthetic appeal.",
    icon: "💎",
  },
  {
    title: "Custom Firmware",
    description:
      "Program macros, remaps, and custom lighting with our software.",
    icon: "⚙️",
  },
  {
    title: "Premium Sound",
    description:
      "Specially tuned dampening system for the perfect mechanical click sound.",
    icon: "🔊",
  },
];

export const pricingPlans = [
  {
    name: "Essential",
    price: 129.99,
    description: "Perfect for beginners",
    features: [
      " 60% Layout",
      "Basic RGB",
      "USB-C Connection",
      "1 Year Warranty",
      "Community Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: 199.99,
    description: "For enthusiasts",
    features: [
      "75% or TKL Layout",
      "Per-Key RGB",
      "Hot-Swappable",
      "2 Year Warranty",
      "Priority Support",
      "Free Switches Pack",
    ],
    cta: "Choose Plan",
    featured: true,
  },
  {
    name: "Elite",
    price: 299.99,
    description: "For professionals",
    features: [
      "Full Size Layout",
      "RGB + Underglow",
      "Hot-Swappable",
      "CNC Aluminum",
      "Lifetime Warranty",
      "24/7 Premium Support",
      "Custom Keycaps",
      "Free Shipping Worldwide",
    ],
    cta: "Go Elite",
  },
];

export const galleryImages = [
  {
    id: 1,
    title: "Elite Pro RGB",
    image:
      "https://images.unsplash.com/photo-1587829191301-6f356ac45c94?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Wireless X Lifestyle",
    image:
      "https://images.unsplash.com/photo-1595225476933-0efb8b5f5b8d?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Compact RGB Detail",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Aurora Pro Gaming",
    image:
      "https://images.unsplash.com/photo-1578506094306-246537150218?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Studio Setup",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Ultimate Performance",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
  },
];
