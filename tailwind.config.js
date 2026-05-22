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
        'dawn-navy': '#0f172a',
        'dawn-navy-mid': '#1e293b',
        // Light theme text tokens
        'ink': '#0f172a',
        'ink-mid': '#334155',
        'ink-soft': '#64748b',
        'ink-faint': '#94a3b8',
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
          '0%, 100%': { transform: 'translateY(0px)', opacity: '0.5' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
        'card-lg': '0 12px 40px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)',
        'pill': '0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)',
        'glow-gold': '0 0 30px rgba(255,180,0,0.25), 0 0 60px rgba(255,180,0,0.1)',
      },
    },
  },
  plugins: [],
}
