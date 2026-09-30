/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#FF6B35",
          hover: "#FF8454",
          subtle: "rgba(255, 107, 53, 0.12)",
          glow: "rgba(255, 107, 53, 0.35)",
        },
        dark: {
          950: "#050507",
          900: "#0a0a0c",
          850: "#121215",
          800: "#18181c",
          700: "#24242b",
        }
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "Orbitron", "sans-serif"],
        dancing: ["var(--font-dancing)", "Dancing Script", "cursive"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
