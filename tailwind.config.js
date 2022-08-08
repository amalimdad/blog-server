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
      gray100: "#ECEEED",
      tiffany: "#5DD5C4",
      orang: "#FF9F4B",
      gray50: "#F7F7F7",
      "gray-light25": "#FAFAFA"
    },
    spacing: {
      0: '0px',
      1: '0.1rem',
      2: '0.2rem',
      3: '0.3rem',
      4: '.4rem',
      5: '.5rem',
      6: '.6rem',
      7: '.7rem',
      8: '.8rem',
      9: '.9rem',
      10: '1rem',
      12: '1.2rem',
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      20: '2rem',
      22: '2.2rem',
      24: '2.4rem',
      28: '2.8rem',
      30: '3rem',
      32: '3.2rem',
      34: '3.4rem',
      36: '3.6rem',
      40: '4rem',
      48: '4.8rem',
      50: '5rem',
      56: '5.6rem',
      60: '6rem',
      64: '6.4rem',
      70: '7rem',
      80: '8rem',
      90: '9rem',
      100: '10rem',
      110: '11rem',
      120: '12rem',
      140: '14rem',
      150: '15rem',
      180: '18rem',
      200: '20rem',
      250: '25rem',
      300: '30rem',
      400: '40rem',
      500: '50rem',
      700: '70rem',
      '90-screen': '90vh',
      '70-screen': '70vh',
    },
    extend: {
      backgroundImage: () => ({
        gred01: `linear-gradient(180deg, rgba(29, 29, 29, 0.38) 0%, rgba(29, 29, 29, 0.42) 0.01%, rgba(29, 29, 29, 0.76) 45.31%, rgba(29, 29, 29, 0.76) 100%);`,

      }),
      boxShadow: {
        //Shadows using dark color
        card: '0 9px 16px 0 rgba(41, 38, 50, 0.06)',
        popup: '0px 10px 66px 0 rgba(41, 38, 50, 0.1)',
        soft: '0px 2px 4px 0px rgba(47, 127, 115, 0.03)',
        none: 'none',
      },
      zIndex: {
        '1000': '1000',
      },
      fontSize: {
        "text-4xl2": '2.5rem'
      },
      maxHeight: {
        100: '10rem',
        200: '20rem',
        300: '30rem',
        500: '50rem',
      },
      minHeight: {
        32: '3.2rem'
      },

    },
  },
  plugins: [
    require('tailwindcss-rtl'),
    require('@tailwindcss/line-clamp'),
  ],
}
