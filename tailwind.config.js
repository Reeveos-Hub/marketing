/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        reeve: {
          black: '#111111',
          surface: '#181818',
          gold: '#C9A84C',
          white: '#FAFAF8',
          grey: '#999999',
          border: '#222222',
        }
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'btn': '10px',
        'pill': '100px',
      }
    },
  },
  plugins: [],
}
