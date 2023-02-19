/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    fontFamily: {
      primary: "Playfair Display",
      body: "Work Sans",
    },
    extend: {
      colors: {
        primary: "#17171F",
        secondary: "#1C1D24",
        tertiary: "#131419",
        accent: {
          DEFAULT: "#ac6b34",
          hover: "#925a2b",
        },
        paragraph: "#878e99",
      },
    },
  },
  plugins: [],
};
