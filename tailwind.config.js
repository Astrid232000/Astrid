/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        astra: {
          orange: {
            50: '#FFF3EA',
            100: '#FFE2CC',
            200: '#FFC392',
            400: '#FF8A3D',
            500: '#F5680A',
            600: '#D95400',
            700: '#B24400',
          },
          purple: {
            50: '#F4EEFA',
            100: '#E5D5F3',
            400: '#8A4FC2',
            500: '#6B2D8C',
            600: '#54226F',
            700: '#3E1953',
          },
          gold: {
            50: '#FDF6E5',
            100: '#F9E8B8',
            400: '#EEC351',
            500: '#E4B343',
            600: '#C4931F',
          },
          green: {
            50: '#F1F8E4',
            100: '#DFEFC0',
            400: '#93C13C',
            500: '#7CB518',
            600: '#639211',
          },
          cream: '#FFFBF5',
          ink: '#241A15',
        },
      },
      boxShadow: {
        card: '0 4px 20px -4px rgba(107,45,140,0.12), 0 2px 8px -2px rgba(245,104,10,0.08)',
        pop: '0 8px 30px -6px rgba(107,45,140,0.25)',
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out both',
        pulseSoft: 'pulseSoft 2s ease-in-out infinite',
        slideUp: 'slideUp 0.3s ease-out both',
        slideIn: 'slideIn 0.3s ease-out both',
      },
    },
  },
  plugins: [],
}
