/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#0b0d12",
          900: "#121722",
          800: "#192233",
          100: "#f4f7fb",
          300: "#aab6c8",
        },
        crimson: {
          700: "#7a1828",
          600: "#981e32",
          500: "#b4283d",
          300: "#e7a4af",
        },
        cougar: "#262626",
        silver: "#5e6a71",
        wheat: "#d7c6a1",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 0, 0, 0.36)",
        soft: "0 22px 70px rgba(37, 47, 63, 0.16)",
      },
    },
  },
  plugins: [],
};
