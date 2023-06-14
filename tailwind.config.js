/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'Crimson',
        primary2: '#d81b60',
        lightRed: '#FF0066',
        customNavy: '#38A2D7',
      },
      fontFamily:{
        CreteRound: ['Crete Round', 'serif'],
      },
      backgroundImage:{
        'bannerImg': "url('https://i.ibb.co/M7WmCxh/banner.jpg')",
      }
    },
  },
  plugins: [require('daisyui')],
}

