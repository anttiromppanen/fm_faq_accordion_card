/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"]
      },
      colors: {
        userMainBgGradient1: "hsl(240, 73%, 65%)",
        userMainBgGradient2: "hsl(273, 75%, 66%)",
        userTextVeryDarkBlue: "hsl(237, 12%, 33%)",
        userTextDarkBlue: "hsl(240, 6%, 50%)",
        userDividerBlue: "hsl(240, 5%, 91%)",
      },
    },
  },
  plugins: [],
}