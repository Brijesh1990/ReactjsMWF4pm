/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
 
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'regal-blue': '#243c5a'
     
    },

    flexBasis: {
      '1/7': '14.2857143%',
      '2/7': '28.5714286%',
      '3/7': '42.8571429%',
      '4/7': '57.1428571%',
      '5/7': '71.4285714%',
      '6/7': '85.7142857%',
    },
    spacing: {
      '112': '28rem',
      '128': '32rem',
    },

   
    size: {
      '128': '32rem',
    },

    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },

    },

    },

   
    
    

    width: {
      '128': '32rem',
    },

    height: {
      '128': '32rem',
    },
   
    

  },

  plugins: [],
}

