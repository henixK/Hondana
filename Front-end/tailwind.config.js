/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-japan': '#D12D35',
        'white-japan': '#E4E2E7',
        'black-japan': '#101820',
        'blue-japan': '#004C76',
        'light-blue-japan': '#0E2A48',
      }
    },
  },
  plugins: [],
}