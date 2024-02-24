/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url(/images/pattern-background-mobile.svg)",
        desktop: "url(/images/pattern-background-desktop.svg)",
      },
      colors: {
        background: "#DFE6FB",
        darkBlue: "hsl(223, 47%, 23%)",
        desaturatedBlue: "hsl(224, 23%, 55%)",
        paleBlue: "hsl(225, 100%, 94%)",
        veryPaleBlue: "hsl(225, 100%, 98%)",
        brightBlue: "hsl(245, 75%, 52%)",
        hoverBlue: "#766CF1",
      },
      fontFamily: {
        "red-hat-display": ["Red Hat Display", "sans-serif"],
      },
      maxHeight: {
        card: "697px",
      },
      maxWidth: {
        card: "450px",
      },
      backgroundSize: {
        "auto-100": "100% auto",
      },
    },
  },
  plugins: [],
};
