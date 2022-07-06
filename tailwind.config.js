/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      lg: [{ max: '630px' }, {min: '630px', max: '649px'}],
    },
  },
  plugins: [],
};