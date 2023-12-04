/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {

      colors:{
        primary:"#8B5CF6",
        second:"#7C3AED",
  
      },
      
    },
    screens:{
      sm:"640px",
      lg:"1224px",
    },
   
    content:{
      sliderbgtext:"url('./assets/EvolveText.png')", 
      abstractwaves:"url('./assets/AbstractWaves.png')", 
    },
  },
  plugins: [],
}

