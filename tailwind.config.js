const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colors you want to add go here
        transparent: "transparent",
        current: "currentColor",
        primary: {
          DEFAULT: "#AD6767",
          50: "#EDDEDE",
          100: "#E6D1D1",
          200: "#D8B6B6",
          300: "#C99C9C",
          400: "#BB8181",
          500: "#AD6767",
          600: "#8F4D4D",
          700: "#6A3939",
          800: "#462525",
          900: "#211212",
        },
        secondary: {
          DEFAULT: "#D0C298",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#F6F4EC",
          300: "#EAE3D0",
          400: "#DDD3B4",
          500: "#D0C298",
          600: "#BEAB71",
          700: "#AA934E",
          800: "#84723C",
          900: "#5D502A",
        },
        gray: colors.stone,
      },
    },
  },
  plugins: [],
};
