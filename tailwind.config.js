/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    letterSpacing: {
      tightest: '-.075em',
      tight: '-.025em',
      normal: '0',
      wider: '.05em',
      widest: '.25em',
    }
  },
  plugins: [],
}
