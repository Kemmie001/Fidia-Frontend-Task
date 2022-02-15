const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  important: true,
  purge: ['./public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        // 'Inter': ['Inter', sansSerif],
      },
      colors: {
        primary: '#7F56D9',
        'success': '#027A48',
        'error': '#B42318',
        secondary: '#F9F5FF',
        light: '#667085',
        dark: '#101828',
        ash: '#343738',
        'hero-color': '#193F52',
      },
    },
    fontSize: {
      xs: '.75rem',
      sm: '.975rem',
      tiny: '.875rem',
      base: '1.095rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.15rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  variants: {},
  plugins: [],
};
