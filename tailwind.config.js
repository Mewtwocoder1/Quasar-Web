/** @type {import('tailwindcss').Config} */
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

