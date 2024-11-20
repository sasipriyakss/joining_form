/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto']
      },
      colors: {
        'main-blue':'#05052f',
      },
    },
  },
  plugins: [],
}

