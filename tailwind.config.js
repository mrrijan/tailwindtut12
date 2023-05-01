/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing:{
        13:'3.5rem'
      },
      fontSize:{
        '10xl': ['9rem', { lineHeight: '1.5' }]
      }
    },
  },
  plugins: [],
}

