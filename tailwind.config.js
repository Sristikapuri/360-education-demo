/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Yellow from hero section
        secondary: '#1E90FF', // Blue accent color
        dark: '#1a1a1a', // Dark text
        light: '#f8f9fa', // Light background
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
