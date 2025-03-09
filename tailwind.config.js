/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1B263B',
        'darker-blue': '#0A0B0E',
        'deep-dark': '#0A0B0E',
        'dark-bg': '#1A1F2C',
        'accent': '#2563EB',
        'neon-green': '#10B981',
        'neon-pink': '#EC4899',
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
        'glow-blue': '0 0 15px rgba(37, 99, 235, 0.5)',
        'glow-green': '0 0 15px rgba(16, 185, 129, 0.5)',
        'glow-pink': '0 0 15px rgba(236, 72, 153, 0.5)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #0A0B0E, #1A1F2C)',
      },
    },
  },
  plugins: [],
}; 