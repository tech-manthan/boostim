/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans-serif"],
        secondary: ["Manrope", "sans-serif"],
        tertiary: ["Roboto", "sans-serif"],
      },
      colors: {
        primaryDark: "#010205",
        secondaryDark: "#020407",
        primaryGray: "#878C91",
        secondaryGray: "#D9D9D9",
        tertiaryGray: "#F0F0F0",
        borderGray: "#FAFAFA",

        green: "#99EA48",
        "green-light": "#BAE289",
        "green-medium": "#99CF63",
        "green-dark": "#77B248",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
