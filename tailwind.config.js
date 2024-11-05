/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'open': ['Open Sans', 'sans-serif'],
        'noto': ['Noto Serif', 'serif'],
        'archivo': ["Archivo", 'sans-serif'],
        'julius': ["Julius Sans One", 'sans-serif'],
        'poppins': ["Poppins", 'sans-serif'],
    }
    },
  },
  plugins: [],
}

