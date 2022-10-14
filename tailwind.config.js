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
        roboto: ['"Roboto Condensed"', ...defaultTheme.fontFamily.sans],
        bebas: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide")],
};
