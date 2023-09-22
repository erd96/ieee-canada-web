/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ieee-red' : '#BA0C2F'
      },
      keyframes: {
        dropdown: {
          '0%': {marginTop:'-15rem'},
          '100%' : {marginTop: '0rem'}
        }
      },
      animation: {
        dropdown: 'dropdown 1s ease-in-out'
      }
    },
  },
  plugins: [],
}
