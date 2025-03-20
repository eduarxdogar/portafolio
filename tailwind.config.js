/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        104: "26rem", // Ajusta este valor según sea necesario
        108: "45rem", // Ajusta este valor según sea necesario
      },
      fontFamily: {
        custom: ['"YourCustomFont"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
