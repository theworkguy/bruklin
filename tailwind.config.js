/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#0066CC',
          cyan: '#00B4D8',
          black: '#000000',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/profilephoto.jpg')",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
};