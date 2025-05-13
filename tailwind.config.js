/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        clr: {
          red: '#c12f2f',
          blue: '#0275a4',
          light: '#ffffff',
          dark: '#1e0c0c',
        },
      },
    },
  },
  plugins: [],
}


