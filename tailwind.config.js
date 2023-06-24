/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    fontWeight: {
      semibold: 600,
      light: 300,
      normal: 400,
      bold: 700,
    },
    extend: {
        colors: {
          'regal-blue': '#60A0D8',
          'regal-green':'#B2D234',
          'white':'#FFFFFF',
          'grey':'#606060'
        }
    },
  },
  plugins: [],
}

