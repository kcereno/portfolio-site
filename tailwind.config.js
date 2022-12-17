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
    fontSize:{
      'xxs': '1rem',
      'xs': '1.2rem',
      'sm': '1.6rem',
      'md': '2rem',
      'lg': '2.5rem',
      'xl': '3.1rem',
      '2xl': '3.9rem',
      '3xl': '4.8rem',
      '4xl': '6.1rem',
    },
    fontFamily: {
      'display': 'Noe Display, Arial, sans-serif',
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
    container:{
      center: true,
      
    },
    extend: {
      colors: {
        'pink': '#db2777',
      },
    },
    lineHeight: {
      'display': '6.1rem',
   
      'display--sm': '4.2rem',
  },
  },
  plugins: [],
};
