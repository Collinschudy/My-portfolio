/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   'orange': '#FFA500'
    //   orange: {
    //     100: "#ebcccf",
    //     200: "#d699a0",
    //     300: "#c26670",
    //     400: "#ad3341",
    //     500: "#990011",
    //     600: "#7a000e",
    //     700: "#5c000a",
    //     800: "#3d0007",
    //     900: "#1f0003",
    //   },

    //   white: {
    //     100: "#fefdfd",
    //     200: "#fefbfb",
    //     300: "#fdfaf9",
    //     400: "#fdf8f7",
    //     500: "#fcf6f5",
    //     600: "#cac5c4",
    //     700: "#979493",
    //     800: "#656262",
    //     900: "#323131",
    //   },
    //   yellow: {
    //     100: "#ffffcc",
    //     200: "#ffff99",
    //     300: "#ffff66",
    //     400: "#ffff33",
    //     500: "#ffff00",
    //     600: "#cccc00",
    //     700: "#999900",
    //     800: "#666600",
    //     900: "#333300",
    //   },
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
