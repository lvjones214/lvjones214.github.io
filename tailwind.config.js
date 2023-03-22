/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
  
      // Or if using `src` directory:
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    plugins: [
      require('@tailwindcss/forms'),
    ],
    theme: {
      extend: {
        fontFamily: {
          header: ['AlegreyaSansSC-Thin'],
          caveat: ['Caveat'],
          body: ['TenorSans'],
          script: ['DancingScript'],
          headline: ['Belleza'],
          main: ['Jakarta'],
        },
        colors:{
          primary: '#463233',
          secondary: '#FFFBF8',
        }, 
        backgroundImage: {
          office: ['office'],
        }
      },
    },
  };
  