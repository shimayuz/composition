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
        primary: {
          DEFAULT: '#3a5a40',
          light: '#588157',
          dark: '#344e41',
        },
        accent: '#a3b18a',
        light: '#f0f4f1',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};