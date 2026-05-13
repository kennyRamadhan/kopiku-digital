import type { Category } from '../../types';
import { COPY } from '../../data/copy';
import { cn } from '../../lib/utils';

export type FilterValue = 'all' | Category;

interface MenuFilterProps {
  activeCategory: FilterValue;
  onCategoryChange: (next: FilterValue) => void;
}

function MenuFilter({ activeCategory, onCategoryChange }: MenuFilterProps) {
  return (
    <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto">
      <div
        role="tablist"
        aria-label="Filter kategori menu"
        className="inline-flex gap-2 min-w-max py-1"
      >
        {COPY.menu.filters.map((filter) => {
          const isActive = activeCategory === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onCategoryChange(filter.id as FilterValue)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-beige',
                isActive ? 'bg-espresso text-cream' : 'bg-cream text-roast hover:text-espresso',
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MenuFilter;
