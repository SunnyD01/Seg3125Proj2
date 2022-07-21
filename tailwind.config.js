/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        menucol: '#6365F0',
        menufont: '#6366F1',
        bgcol: '#F1F8FE',
        pagecol: '#F0F0F0',
      }
    },
  },
  plugins: [],
}
