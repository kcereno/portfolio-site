/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'small-desktop': '990px',
      'tablet': '800px',
      'large-mobile': '560px',
      'medium-mobile': '500px',
      'small-mobile': '375px',
    },
    spacing: {
      'xxs': '0.8rem',
      'xs': '1.6rem',
      'sm': '2.4rem',
      'md': '3.2rem',
      'lg': '6.4rem',
      'xl': '7.2rem',
      'xxl':' 12.8rem',
    },
    extend: {},
  },
  plugins: [],
};
