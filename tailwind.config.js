/** @type {import('tailwindcss').Config} */
module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // important: "#__next",
  theme: {
    extend: {
      colors: {
        "primary": "#7FC0D4",
        "app-green": "#8AC690",
        "app-red": "#DC3E3E",
        "app-blue": "#2A88D8",
        "app-yellow": "#F79C0D",
        "background": "#E5E5E5"
      }
    },
  },
  plugins: [],
}
