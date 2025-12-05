/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'vago-pink': '#FF69B4',
        'vago-green': '#009944',
        'vago-dark': '#0a0a0a',
        'vago-cream': '#f8f5f2',
        'vago-card-dark': '#18181b',
        'vago-card-light': '#ffffff',
      },
      fontFamily: {
        'sans': ['Outfit', 'sans-serif'],
        'handwritten': ['Gloria Hallelujah', 'cursive'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

