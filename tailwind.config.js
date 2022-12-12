/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      robotoCondensed: ["Roboto Condensed", "sans-serif"],
      aboutH: ["Josefin Sans", "sans-serif"],
      robotoSlab: ["Roboto Slab", "serif"],
    },
  },
  plugins: [],
};
