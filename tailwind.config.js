/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#7FC0D4",
        "app-green": "#8AC690",
        "app-red": "#DC3E3E",
        "app-blue": "#2A88D8",
        "background": "#E5E5E5"
      }
    },
  },
  plugins: [],
}
