/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.html",
    "./**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: "#38BDF8", // Tailwind's sky-400
        secondary: "#0EA5E9", // Tailwind's sky-500
      },
    },
  },
  plugins: [],
};