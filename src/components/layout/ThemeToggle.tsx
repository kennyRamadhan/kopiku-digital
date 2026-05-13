import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
      aria-pressed={isDark}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-cream transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-beige"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-espresso" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5 text-espresso" aria-hidden="true" />
      )}
    </button>
  );
}

export default ThemeToggle;
