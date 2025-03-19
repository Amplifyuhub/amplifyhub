/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#fff7ed',
          100: '#fff7ed',
          200: '#ffedd5',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff7026',
          600: '#ff7026',
          700: '#c2410c',
          800: '#9a3412',
          900: '#ff7026',
        }
      }
    },
  },
  plugins: [],
};
