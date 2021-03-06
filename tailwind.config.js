module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants:{
    extend:{
      
    }
  },
  theme: {
    screens: {
      xs: "350px",
      sm: "650px",
      // => @media (min-width: 576px) { ... }

      md: "1020px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
