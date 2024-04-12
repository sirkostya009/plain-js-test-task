/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        'half': { 'raw': '(max-width: 552px)' },
      },
    },
  },
  plugins: [],
}
