/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards', // Adjust duration as needed
        'slide-in': 'slideIn 0.5s ease-in-out forwards', // Adjust duration as needed

      },
    },
  },
  plugins: [],
}

