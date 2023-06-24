/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
        colors: {
          'regal-blue': '#60A0D8',
          'regal-green':'#B2D234',
          'white':'#FFFFFF',

        }
    },
  },
  plugins: [],
}

