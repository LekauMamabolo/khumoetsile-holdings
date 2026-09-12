import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          950: '#061627',
          900: '#0A2540',
          800: '#123354',
          700: '#1B4066',
        },
        green: {
          DEFAULT: '#1E7A45',
          700: '#175E36',
          600: '#1E7A45',
          500: '#3B9757',
          accent: '#6FBE44',
        },
        sand: {
          DEFAULT: '#F5F6F2',
          100: '#FBFBF9',
          200: '#F5F6F2',
          300: '#E9ECE4',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
      backgroundImage: {
        'k-wedge': "linear-gradient(115deg, #0A2540 0%, #0A2540 55%, #1E7A45 55%, #6FBE44 100%)",
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37,163,79,0.45)' },
          '50%': { boxShadow: '0 0 0 10px rgba(37,163,79,0)' },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        pulseSoft: 'pulseSoft 2.4s ease-in-out infinite',
        riseIn: 'riseIn 0.6s ease-out both',
      },
    },
  },
  plugins: [],
} satisfies Config
