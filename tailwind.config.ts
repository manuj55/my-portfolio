import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0a0e17',
          'bg-light': '#0f1623',
          green: '#00ff41',
          'green-dim': '#00cc33',
          cyan: '#00d4ff',
          amber: '#ffb800',
          red: '#ff3e3e',
          border: '#1a2332',
          'border-glow': 'rgba(0, 255, 65, 0.15)',
          panel: 'rgba(10, 14, 23, 0.85)',
          comment: '#5a6a7a',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Fira Code', 'Consolas', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        matrixFall: {
          '0%': { transform: 'translateY(-100%)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0,255,65,0.2), 0 0 10px rgba(0,255,65,0.1)' },
          '50%': { boxShadow: '0 0 10px rgba(0,255,65,0.4), 0 0 20px rgba(0,255,65,0.2)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scanline: 'scanline 8s linear infinite',
        glitch: 'glitch 0.3s ease-in-out',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        matrixFall: 'matrixFall 10s linear infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
