/** @type {import('tailwindcss').Config} */
//npx tailwindcss -i ./src/input.css -o ./static/style.css --watch
module.exports = {
  content: [
    './static/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: ['light', 'dark', 'aqua', 'cyberpunk', 'retro', 'valentine', 'forest'],
  },
}

