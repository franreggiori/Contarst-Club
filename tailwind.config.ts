import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        heat: '#ff6a3d',
        cold: '#3da5ff',
        base: '#0b0f17'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.1), 0 8px 30px rgba(61,165,255,0.2)'
      }
    }
  },
  plugins: []
} satisfies Config;
