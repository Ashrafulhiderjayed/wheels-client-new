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
      },
      fontFamily:{
        CreteRound: ['Crete Round', 'serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}

