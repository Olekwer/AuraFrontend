/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#f7d488',
          200: '#f1c40f',
          900: '#533f03'
        }
      }
    }
  },
  plugins: []
}