import Button from '../ui/Button';
import { COPY } from '../../data/copy';
import { formatRupiah } from '../../lib/utils';

interface OrderSummaryProps {
  subtotal: number;
  onProceed?: () => void;
  proceedLabel?: string;
  showProceed?: boolean;
}

function OrderSummary({
  subtotal,
  onProceed,
  proceedLabel = COPY.order.proceedCheckout,
  showProceed = true,
}: OrderSummaryProps) {
  const discount = subtotal > 30000 ? 3000 : 0;
  const total = subtotal - discount;

  return (
    <div className="bg-espresso text-cream rounded-lg p-5 lg:p-6">
      <h2 className="font-serif text-cream text-xl mb-4">{COPY.order.summaryTitle}</h2>

      <dl className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <dt className="text-cream/80">{COPY.order.summarySubtotal}</dt>
          <dd className="text-cream">{formatRupiah(subtotal)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-cream/80">{COPY.order.summaryDiscount}</dt>
          <dd className="text-cream">{discount > 0 ? `− ${formatRupiah(discount)}` : '—'}</dd>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-cream/15">
          <dt className="text-cream font-medium text-base">{COPY.order.summaryTotal}</dt>
          <dd className="text-cream font-serif text-2xl">{formatRupiah(total)}</dd>
        </div>
      </dl>

      {showProceed && (
        <Button
          variant="accent"
          size="md"
          className="w-full mt-5"
          onClick={onProceed}
          disabled={subtotal <= 0}
        >
          {proceedLabel} →
        </Button>
      )}

      <p className="mt-4 inline-block bg-cream text-roast text-xs font-medium px-3 py-1.5 rounded-full">
        {COPY.order.promoHint}
      </p>
    </div>
  );
}

export default OrderSummary;
