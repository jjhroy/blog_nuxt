/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'around': '0 2px 16px 0 rgba(0, 0, 0, 0.06);'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}