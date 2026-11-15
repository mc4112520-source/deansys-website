/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4FA',
          100: '#D9E2F0',
          200: '#B5C7DF',
          300: '#87A5C9',
          400: '#507EB0',
          500: '#2E5F97',
          600: '#1F4673',
          700: '#163255',
          800: '#10223D',
          900: '#101D32',
          950: '#091220',
        },
        metallic: {
          50: '#F8F9FA',
          100: '#F1F3F6',
          200: '#E2E6EC',
          300: '#C8CFD9',
          400: '#A6B0BF',
          500: '#8793A3',
          600: '#6A7585',
          700: '#525B69',
          800: '#3C434E',
          900: '#282D35',
        },
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F28C28',
          600: '#D97214',
          700: '#B45309',
        },
        surface: {
          light: '#F4F6F8',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'blueprint-grid': "radial-gradient(rgba(135, 147, 163, 0.15) 1px, transparent 1px)",
        'tech-pattern': "linear-gradient(to right, rgba(16, 29, 50, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 29, 50, 0.04) 1px, transparent 1px)",
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}

