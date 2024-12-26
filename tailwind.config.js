/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        brown: {
          700: '#5D4037',
          800: '#4E342E',
          900: '#3E2723',
        }
      },
      fontFamily: {
        handwriting: ['Caveat', 'cursive'],
      },
      backgroundImage: {
        'noise': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVfJ/YAAAACHRSTlMzMzMzMzMzM85JBgUAAAABYktHRAH/Ai3eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVQ4y2NgQAX8DKiAA4mPAh5hFD6cvQCdj8x/gM5H5m9A56MIgvmEAhPEf4wEokbVqFrDUy2PgYFhIQDxJQuT0YI8dQAAAABJRU5ErkJggg==')",
      }
    },
  },
  plugins: [],
};