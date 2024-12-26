// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-color': '#58a6ff',
        'background-color': '#0d1117',
        'text-color': '#c9d1d9',
      },
    },
  },
  darkMode: 'class', // Enables class-based dark mode
  plugins: [],
};
