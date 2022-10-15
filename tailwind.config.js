/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Roboto: ['"Roboto Condensed"', ...defaultTheme.fontFamily.sans],
        Roboto: ["Roboto Condensed", "sans-serif"],
        Bebas: ["Bebas Neue", "sans"],
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide")],
};
