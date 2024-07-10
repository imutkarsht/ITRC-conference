/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'orange': {
          100: '#ff9a00',
          200: '#ff8c00',
          300: '#ff7f00',
          400: '#ff6600',
          500: '#ff5500',
          600: '#ff4400',
          700: '#ff3300',
          800: '#ff2200',
          900: '#ff1100',
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}