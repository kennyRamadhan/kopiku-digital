import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dual-role tokens (text on light bg + intentionally-dark surfaces) stay literal.
        // Dark-mode flips them via .dark overrides in index.css @layer base.
        espresso: '#3D2817',
        caramel: '#C68B59',
        cream: '#F5E6D3',
        // Single-role tokens flip automatically via CSS vars on the .dark class.
        beige: 'rgb(var(--c-beige) / <alpha-value>)',
        charcoal: 'rgb(var(--c-charcoal) / <alpha-value>)',
        roast: 'rgb(var(--c-roast) / <alpha-value>)',
        caramelDeep: 'rgb(var(--c-caramel-deep) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
        screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px' },
      },
    },
  },
  plugins: [],
} satisfies Config;
