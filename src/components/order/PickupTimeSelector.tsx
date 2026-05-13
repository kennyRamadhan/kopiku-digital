import type { PickupTimeOption } from '../../types';
import { COPY } from '../../data/copy';
import { cn } from '../../lib/utils';

interface PickupTimeSelectorProps {
  value: PickupTimeOption;
  onChange: (next: PickupTimeOption) => void;
}

function PickupTimeSelector({ value, onChange }: PickupTimeSelectorProps) {
  return (
    <div
      role="radiogroup"
      aria-label={COPY.order.pickupLabel}
      className="flex flex-wrap gap-2"
    >
      {COPY.order.pickupOptions.map((option) => {
        const isActive = value === option.id;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(option.id as PickupTimeOption)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-beige',
              isActive
                ? 'bg-espresso text-cream border-espresso'
                : 'bg-[#FFFCF7] text-espresso border-espresso/15 hover:border-espresso',
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default PickupTimeSelector;
