/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dawn-gold': '#FFD700',
        'dawn-orange': '#FF7E5F',
        'dawn-purple': '#C779D0',
        'dawn-navy': '#070a17',
        'dawn-navy-mid': '#0f1426',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'aurora-1': 'aurora1 18s ease-in-out infinite',
        'aurora-2': 'aurora2 23s ease-in-out infinite',
        'aurora-3': 'aurora3 28s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'moving-border': 'moving-border-spin 8s linear infinite',
        'scroll-bounce': 'scroll-bounce 2s ease-in-out infinite',
      },
      keyframes: {
        aurora1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(45px, -35px) scale(1.05)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.97)' },
        },
        aurora2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-55px, 35px) scale(1.08)' },
        },
        aurora3: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '40%': { transform: 'translate(35px, 45px) scale(0.95)' },
          '80%': { transform: 'translate(-40px, -25px) scale(1.04)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'moving-border-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0px)', opacity: '0.6' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(255,215,0,0.3), 0 0 60px rgba(255,215,0,0.1)',
        'glow-gold-lg': '0 0 50px rgba(255,215,0,0.4), 0 0 100px rgba(255,215,0,0.15)',
        'card-premium': '0 20px 60px -15px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
    },
  },
  plugins: [],
}
