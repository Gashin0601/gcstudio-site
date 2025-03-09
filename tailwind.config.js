/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1B263B',
        'darker-blue': '#0F172A',
        'accent': '#4E6E81',
      },
      fontFamily: {
        'serif': ['"Noto Serif JP"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}; 