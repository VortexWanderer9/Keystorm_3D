import { create } from "zustand";

export const useStore = create((set) => ({
  // Cart items
  cartItems: [],
  cartOpen: false,

  // Add to cart
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id,
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      };
    }),

  // Remove from cart
  removeFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    })),

  // Update quantity
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((item) => (item.id === productId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    })),

  // Clear cart
  clearCart: () => set({ cartItems: [] }),

  // Toggle cart visibility
  toggleCart: () => set((state) => ({ cartOpen: !state.cartOpen })),

  // Get total price
  getTotalPrice: () => {
    const { cartItems } = useStore.getState();
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  },

  // Get total items
  getTotalItems: () => {
    const { cartItems } = useStore.getState();
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  },

  // Wishlist
  wishlist: [],
  addToWishlist: (product) =>
    set((state) => {
      const exists = state.wishlist.some((item) => item.id === product.id);
      if (exists) {
        return {
          wishlist: state.wishlist.filter((item) => item.id !== product.id),
        };
      }
      return {
        wishlist: [...state.wishlist, product],
      };
    }),
  removeFromWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== productId),
    })),

  // Search and filters
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  filters: {
    priceRange: [0, 300],
    type: [],
    switches: [],
    wireless: null,
  },
  setFilters: (filters) => set({ filters }),

  sortBy: "featured",
  setSortBy: (sort) => set({ sortBy: sort }),
}));
