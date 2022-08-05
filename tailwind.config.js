/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#222222",
      black900: '#202221',
      black800: "#404343",
      black600: "#808686",
      black100: "#ECEEED",
      tiffany: "#5DD5C4",
      orang: "#FF9F4B",
      gray50: "#F7F7F7"
    },
    extend: {
      backgroundImage: () => ({
        gred01: `linear-gradient(180deg, rgba(29, 29, 29, 0.38) 0%, rgba(29, 29, 29, 0.42) 0.01%, rgba(29, 29, 29, 0.76) 45.31%, rgba(29, 29, 29, 0.76) 100%);`,

      }),
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
