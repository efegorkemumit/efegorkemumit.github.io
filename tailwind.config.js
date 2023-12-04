/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      sm:"640px",
      lg:"1024px",
    },
    content:{
      sliderbgtext:"url('./assets/EvolveText.png')", 
      abstractwaves:"url('./assets/AbstractWaves.png')", 
    },
  },
  plugins: [],
}

