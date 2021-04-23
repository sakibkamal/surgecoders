module.exports = {
  purge: {
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#EFECFF',
        button: '#6C63FF',
        primary: '#091E42',
        footer: '#282A2B'
      },
      fontFamily: {
        all: ['Montserrat']
      },
      spacing: {
        128: '32rem',
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
