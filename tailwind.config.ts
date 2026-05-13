import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#3D2817',
        roast: '#6F4E37',
        caramel: '#C68B59',
        caramelDeep: '#A0612C',
        cream: '#F5E6D3',
        beige: '#FAF6F0',
        charcoal: '#2C1810',
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
