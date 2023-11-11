/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '300px',
      sm: '480px',
      sl: '600px',
      mx: '660px',
      md: '768px',
      lg: '976px',
      lx: '1040px',
      xl: '1440px',
    },

    extend: {
      screens: {
        s:'320px',
        ss:'370px',
        sx:'410px',
        xm:'850px',
        l:'1200px'
      },
      boxShadow: {
        'header': '0px 2px 15px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}