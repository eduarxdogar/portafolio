/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        104: "26rem",
        108: "45rem",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        custom: ['"YourCustomFont"', "sans-serif"],
      },
      colors: {
        darkPrimary: "#1a202c", // Keeping for compatibility or replace if strictly needed, but adding new ones below
        darkSecondary: "#2d3748",
        'dark-surface': '#0a0a0a',
        'dark-primary': '#121212',
        'neon-blue': '#2563eb',
        'neon-purple': '#7c3aed',
      },
      keyframes: {
        scaleRotate: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.1) rotate(10deg)" },
        },
        darkGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        scaleGlow: {
          "0%, 100%": { transform: "scale(1)", textShadow: "0 0 5px rgba(255, 255, 255, 0.8)" },
          "50%": { transform: "scale(1.1)", textShadow: "0 0 10px rgba(255, 255, 255, 1)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      animation: {
        scaleRotate: "scaleRotate 2s infinite",
        darkGradient: "darkGradient 10s ease infinite",
        scaleGlow: "scaleGlow 1.5s infinite alternate",
        slideDown: "slideDown 0.8s ease-out",
        fadeIn: "fadeIn 1s ease-in",
        slideUp: "slideUp 0.8s ease-out",
        slideLeft: "slideLeft 0.8s ease-out",
        slideRight: "slideRight 0.8s ease-out",
        wiggle: "wiggle 1s infinite",
      },
    },
  },
  plugins: [],
};
