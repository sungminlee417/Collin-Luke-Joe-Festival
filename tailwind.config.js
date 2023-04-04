/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
        208: "52rem",
        224: "56rem",
        240: "60rem",
        256: "64rem",
        272: "68rem",
        288: "72rem",
        304: "76rem",
        320: "80rem",
        336: "84rem",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        source: ["Source Sans Pro", "sans-serif"],
      },
      fontSize: {
        "10xl": "140px",
      },
    },
  },
  plugins: [],
};
