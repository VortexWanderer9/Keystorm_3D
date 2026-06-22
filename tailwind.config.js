/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#00ffff",
          magenta: "#ff00ff",
          lime: "#00ff00",
          purple: "#a020f0",
        },
        dark: {
          bg: "#0a0e27",
          card: "#141829",
          input: "#1a1f3a",
        },
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "pulse-neon": "pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 10px #00ffff" },
          "50%": { textShadow: "0 0 20px #00ffff, 0 0 30px #a020f0" },
        },
        "pulse-neon": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0, 255, 255, 0.7)" },
          "50%": { boxShadow: "0 0 0 10px rgba(0, 255, 255, 0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
