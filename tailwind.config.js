/** @type {import('tailwindcss').Config} */
const colors = require(`tailwindcss/colors`);
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        tmdbDarkBlue : 'rgb(3,37,65)',
      },

    },
  },
  plugins: [],
}
