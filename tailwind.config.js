/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      ripple: theme => ({
          colors: theme('colors')
      }),
    },
  },
  plugins: [
    require('tailwindcss-ripple')(),
    
  ],
});