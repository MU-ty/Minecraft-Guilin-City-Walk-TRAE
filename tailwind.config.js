/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mc-green': '#55FF55',
        'mc-dark-green': '#00AA00',
        'mc-dirt': '#8B4513',
        'mc-stone': '#808080',
        'mc-grass': '#7CFC00',
        'mc-wood': '#DEB887',
        'mc-water': '#0000AA',
        'mc-gold': '#FFAA00',
        'mc-border': '#373737',
        'mc-ui': '#C6C6C6',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'mc': 'inset -4px -4px 0px 0px #555, inset 4px 4px 0px 0px #FFF, 0px 4px 0px 0px #000',
        'mc-active': 'inset 4px 4px 0px 0px #555, inset -4px -4px 0px 0px #FFF, 0px 4px 0px 0px #000',
      }
    },
  },
  plugins: [],
}
