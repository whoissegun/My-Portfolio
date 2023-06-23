/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    screens: {
      'sm': {'max':'640px'},
      'md': {'min':'641px','max':'768px'},
      'lg': {'min':'769px','max':'1024px'},
      'xl': {'min':'1025px','max':'1280px'},
      '2xl': {'min':'1281px'},
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'rubik': ['Rubik', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

