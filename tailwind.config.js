/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-hero': "url('/images/home_01.webp')", // Adjust the path as necessary
      },
    },
  },
  plugins: [],
}