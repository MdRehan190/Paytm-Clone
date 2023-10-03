/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js,jsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        white: '#ffffff',
        blue: '#1B98F5',
        grey: '#F6F6F6',
        paytmblue: '#00baf2',
        darkblue: '#0f4a8a',
        mygrey: '#eff0f2',
        myskyblue: '#f0fbff',
      }
    },
    plugins: [],
  }
}
