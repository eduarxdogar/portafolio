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
        custom: ['"YourCustomFont"', "sans-serif"],
      },
      animation: {
        scaleRotate: "scaleRotate 2s infinite",
        darkGradient: "darkGradient 10s ease infinite",
        scaleGlow: "scaleGlow 1.5s infinite alternate",
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
      },
      colors: {
        darkPrimary: "#1a202c",
        darkSecondary: "#2d3748",
      },
    },
  },
  plugins: [],
};
