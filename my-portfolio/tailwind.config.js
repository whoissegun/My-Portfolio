/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    screens: {
      'sm': {'max':'640px'},
      'md': {'min':'640px','max':'768px'},
      'lg': {'min':'768px','max':'1024px'},
      'xl': {'min':'1024px','max':'1280px'},
      '2xl': {'min':'1280px','max':'1536px'},
    },
    extend: {},
  },
  plugins: [],
}

