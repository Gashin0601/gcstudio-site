/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 宇宙深層パレット（パターン1）
        'dark-bg': '#0A0E17',       // 深い黒に近い青色（プライマリ背景）
        'dark-bg-2': '#141927',     // ダークブルーグレー（セカンダリ背景）
        'accent': '#4A6FA5',         // 控えめなブルー（唯一のアクセント）
        'neon-blue': '#2563EB',      // この色を追加
        'neon-pink': '#EC4899',      // ネオンピンクを追加
        'text-primary': '#E6E8EC',   // オフホワイト（プライマリテキスト）
        'text-secondary': '#8D93A1', // グレー（セカンダリテキスト）
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