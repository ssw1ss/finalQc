/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#222",
      darkGray: "#333",
      gray: "#575757",
      lightGray: "#eee",
      white: "#fff",
      blue: "#27F",
      lightBlue: "#F5F9FD",
      yellow: "#FFE600",
      lightYellow: "#FFF5CB",
    },
    extend: {},
  },
  plugins: [],
};
