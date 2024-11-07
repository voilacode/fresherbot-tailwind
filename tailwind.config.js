/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'purple-custom': "#1e1938",
        'purple-lite': '#A64D79',
        'purple-text': '#FFE3E3',
      },
      fontFamily: {
        'open': ['Open Sans', 'sans-serif'],
        'noto': ['Noto Serif', 'serif'],
        'archivo': ["Archivo", 'sans-serif'],
        'julius': ["Julius Sans One", 'sans-serif'],
        'poppins': ["Poppins", 'sans-serif'],
        'roboto': ["Roboto", 'sans-serif'],
    }
    },
  },
  plugins: [],
}