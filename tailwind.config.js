module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#229C81",
        secondary: "#0E1D2D",
        accent: "#9CCDC1"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
