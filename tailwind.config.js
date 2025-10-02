/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out forwards",
      },

      backgroundImage: {
        'navbar': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsIuXZh5bcOUhaWrDAy8N8n34JtbGbvAAwQ&s')",
        'footer': "url('https://cdn.vectorstock.com/i/500p/77/19/glitch-game-background-with-abstract-noise-pixels-vector-52167719.avif')",

      },


      keyframes: {
        zoomOut: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "zoom-out": "zoomOut 0.8s ease-out forwards",
      },

      height: {
        "body-height": "65.5rem"
      },
      backgroundSize: {
        '50%': '50%',      // half width
        '16': '4rem',      // 4rem width/height
        'full': '100% 100%', // full width and height stretch
      },

    },
  },
  plugins: [],
}