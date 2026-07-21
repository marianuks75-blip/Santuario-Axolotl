/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          950: '#0A2E2B',
          800: '#0F4642',
          600: '#177268',
        },
        turquoise: {
          400: '#3FBFAD',
          200: '#A9E6DB',
        },
        pink: {
          400: '#F2A9C3',
          300: '#F7C7D9',
        },
        sand: {
          100: '#F7EEDD',
        },
        cream: {
          50: '#FFFBF5',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      borderRadius: {
        lg2: '28px',
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        float: {
          '0%': { transform: 'translateY(0)', opacity: 0 },
          '15%': { opacity: 1 },
          '100%': { transform: 'translateY(-140px)', opacity: 0 },
        },
      },
      animation: {
        sway: 'sway 3.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
