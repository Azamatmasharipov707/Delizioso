/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primery: '#FF8A00',
        secondary: '#3FA72F',
        thirdstage: '#311F09'
      }
    },
    container: {
      center: true,
      padding: '15px',
      sm: '1130px'
    }
  },
  plugins: [],
}

