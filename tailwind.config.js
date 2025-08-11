/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1b1b1f",
        ivory: "#f8f6f2",
        champagne: "#d7c7a9"
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["-apple-system", "Inter", "ui-sans-serif", "system-ui"]
      }
    },
  },
  plugins: [],
};
