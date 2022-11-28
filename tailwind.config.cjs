/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'main-primary': '#B8B8B8',
        'main-secondary': '#D4D4D4',
        'main-background': '#F8F9FA',
        'accent-orange': '#FDA403'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    }
  }
};
