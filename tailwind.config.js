module.exports = {
  purge: {
    content: ['./docs/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: { 5: '#A1855D' }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
