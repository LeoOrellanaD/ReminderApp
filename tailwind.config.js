/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      myriad: ['Myriadpro', 'sans-serif'],
      'myriad-bold': ['font-bold', 'sans-serif'],
      'myriad-semi': ['font-semiregular', 'sans-serif']
    },
    extend: {
      colors: {
        'search-color': '#e3e3e8',
        'background-color': '#f2f1f6',
        'card-color': '#ffffff',
        tbc1: '#b3b3b3'
      }
    }
  },
  plugins: []
}
