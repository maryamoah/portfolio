/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#030712',
        midnight: '#07111f',
        panel: 'rgba(15, 23, 42, 0.72)',
        cyanGlow: '#22d3ee',
        azure: '#38bdf8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(34, 211, 238, 0.14)',
        card: '0 24px 80px rgba(2, 6, 23, 0.45)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at top left, rgba(34, 211, 238, 0.16), transparent 34rem), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.13), transparent 34rem)',
      },
    },
  },
  plugins: [],
};
