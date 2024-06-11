/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html',
    './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#7c51b8',
        'custom-lilac': '#dec6ff',
      },
      spacing: {
        '22': '5.5rem',
      },
      maxWidth: {
        'custom': '600px',
        'form': '800px',
      },
      fontFamily: {
        'arial': ['Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}