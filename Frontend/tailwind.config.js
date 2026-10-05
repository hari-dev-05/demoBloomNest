/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5F0EB',
          200: '#EFE8DC',
          DEFAULT: '#FDFBF7',
        },
        terracotta: {
          50: '#FDF5F2',
          100: '#FBE8E2',
          200: '#F7D0C4',
          500: '#C86D51',
          600: '#B3563B',
          700: '#94412B',
          DEFAULT: '#C86D51',
        },
        clay: {
          50: '#F9F5F3',
          100: '#F0E6E1',
          500: '#8C5A41',
          600: '#754730',
          700: '#6D432E',
          DEFAULT: '#8C5A41',
        },
        sage: {
          50: '#F4F6F2',
          100: '#E6EBE1',
          300: '#B7C4A5',
          500: '#87986A',
          600: '#6E7F53',
          DEFAULT: '#87986A',
        },
        forest: {
          800: '#2D4030',
          900: '#1E2D20',
          DEFAULT: '#2D4030',
        },
        sand: {
          100: '#F7F3EC',
          200: '#EFE8DC',
          300: '#E5DACB',
          DEFAULT: '#EFE8DC',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(45, 64, 48, 0.06), 0 2px 6px -1px rgba(45, 64, 48, 0.04)',
        'soft-hover': '0 12px 30px -4px rgba(45, 64, 48, 0.12), 0 4px 12px -2px rgba(45, 64, 48, 0.08)',
        'floating': '0 20px 40px -10px rgba(200, 109, 81, 0.15)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
