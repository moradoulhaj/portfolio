/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8873ef',
        secondary: "#081e21",
        txt: "#193256",
      }
    },
  },
  plugins: [],
}
