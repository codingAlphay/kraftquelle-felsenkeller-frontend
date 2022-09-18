/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E2D2D',
        secondary: '#F6F6F6',
      },
      fontFamily: {
        'sans': ['KoHo', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        fade: 'fadeIn 2s ease-in-out',
        fastfade: 'fadeIn 1s ease-in-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
        slideup: 'slideup .5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideup: {
          '0%': { bottom:-50 },
          '100%': { bottom:0 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
    },
  },
  plugins: [],
}
