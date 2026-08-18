/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 新デザイントークン（クリニカルホワイト×ディープネイビー×医療ブルー）
        base: '#f7f9fa',
        ink: '#0f2a43',
        brand: {
          DEFAULT: '#2563a8',
          soft: '#e8f0f7',
        },
        line: '#d6dee6',
        // 旧キーの再マップ（レガシーページ互換。緑系は全廃）
        primary: {
          DEFAULT: '#2563a8',
          light: '#3b7cc4',
          dark: '#0f2a43',
        },
        accent: '#2563a8',
        light: '#f7f9fa',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
