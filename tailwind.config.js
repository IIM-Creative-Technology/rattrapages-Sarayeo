/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    fontFamily: {
      'sans': ['poppins'], 
    },
    extend: {
        colors: {
          'regal-blue': '#60A0D8',
          'regal-green':'#B2D234'
        }
    },
  },
  plugins: [],
}

