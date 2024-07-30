
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
        gezginwhite: '#EDF6ED', 
        gezginlightgreen: '#91EDB6',
        gezginburgundy: '#922E2E',
        gezgingreen: '#33B165',
        gezgindarkgreen: '#266A42',
        gezgindarkestgreen: '#002D04',
      },
      fontSize: {
        'h1': ['3.25rem', { lineHeight: '3.5rem' }], 
        'h2': ['2rem', { lineHeight: '2.25rem' }], 
        'h3': ['1.75rem', { lineHeight: '2rem' }],
        'h4': ['1.5rem', { lineHeight: '1.75rem' }], 
        'h5': ['1.25rem', { lineHeight: '1.5rem' }], 
        'h6': ['1rem', { lineHeight: '1.25rem' }], 
      },
      fontweight: {
        'extra-bold': 2000,
      },
      textColor:  {
        'gezgin-dark-green': '#266A42',
        'gezgin-darkest-green': '#002D04',
        'gezgin-green': '#33B165',
        'gezgin-burgundy': '#922E2E',
        'gezgin-light-green': '#91EDB6',
        'gezgin-white': '#EDF6ED'
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
