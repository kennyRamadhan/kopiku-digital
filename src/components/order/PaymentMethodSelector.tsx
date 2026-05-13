import type { PaymentMethod } from '../../types';
import { COPY } from '../../data/copy';
import { cn } from '../../lib/utils';

interface PaymentMethodSelectorProps {
  value: PaymentMethod;
  onChange: (next: PaymentMethod) => void;
}

function PaymentMethodSelector({ value, onChange }: PaymentMethodSelectorProps) {
  return (
    <div>
      <p className="text-sm text-roast mb-3">{COPY.order.paymentLabel}</p>
      <div
        role="radiogroup"
        aria-label="Metode pembayaran"
        className="grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {COPY.order.paymentMethods.map((method) => {
          const isActive = value === method.id;
          const recommended = 'recommended' in method && method.recommended;
          return (
            <button
              key={method.id}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => onChange(method.id as PaymentMethod)}
              className={cn(
                'flex flex-col items-center justify-center text-center px-3 py-4 rounded-lg bg-[#FFFCF7] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-beige',
                isActive
                  ? 'border-[1.5px] border-espresso'
                  : 'border border-espresso/15 hover:border-espresso/40',
              )}
            >
              <span className="font-medium text-espresso">{method.label}</span>
              {recommended && (
                <span className="mt-1 text-[11px] uppercase tracking-wider text-caramelDeep font-medium">
                  Recommended
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PaymentMethodSelector;
