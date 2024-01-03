/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rag: ["rag-black", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        nohemi: ["Nohemi", "sans-serif"],
        codenext: ["Code Next", "sans-serif"],
      },
      backgroundImage: {
        "bg-frontend": "url('/frontend.jpg')",
        "bg-backend": "url('/backend.jpg')",
        "bg-web": "url('/web.jpg')",
        "bg-hero": "url('/bg2.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
