/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-jungle-green': 'hsl(188, 63%, 7%)',
        'prussian-blue': 'hsl(200, 69%, 14%)',
        'raisin-black-1': 'hsl(227, 29%, 13%)',
        'raisin-black-2': 'hsl(229, 17%, 19%)',
        'yellow-green': 'hsl(89, 72%, 45%)',
        'orange-soda': 'hsl(9, 100%, 62%)',
        'cultured-1': 'hsl(0, 0%, 93%)',
        'cultured-2': 'hsl(192, 24%, 96%)',
        'misty-rose': 'hsl(7, 56%, 91%)',
        'alice-blue': 'hsl(210, 100%, 97%)',
        'seashell': 'hsl(8, 100%, 97%)',
        'cadet': 'hsl(200, 15%, 43%)',
        'opal': 'hsl(180, 20%, 62%)',
      },
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom-1': '0 5px 20px 0 hsla(219, 56%, 21%, 0.1)',
        'custom-2': '0 16px 32px hsla(188, 63%, 7%, 0.1)',
      }
    },
  },
  plugins: [],
}