/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
       mainFont: ['Roboto', 'sans-serif'],
      },
      colors: {
        //red colors
        primary:{
          50:"#fef2f2",
          100:"#fee2e2",
          200:"#fecaca",
          300:"#fca5a5",
          400:"#f87171",
          500:"#ef4444",
          600:"#dc2626",
          700:"#b91c1c",
          800:"#991b1b",
          900:"#7f1d1d",
          950:"#450a0a"
        },
        //slate colors
        secondary:{
          50:"#f8fafc",
          100:"#f1f5f9",
          200:"#e2e8f0",
          300:"#cbd5e1",
          400:"#94a3b8",
          500:"#64748b",
          600:"#475569",
          700:"#334155",
          800:"#1e293b",
          900:"#0f172a",
          950:"#020617"
        }
      },
      width:{
        default:"1150px"
      }
    },
  },
  plugins: [],
}
