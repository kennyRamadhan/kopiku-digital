import { Link } from 'react-router-dom';
import { CircleCheck } from 'lucide-react';
import Button from '../ui/Button';
import { COPY } from '../../data/copy';

interface OrderSuccessProps {
  onOrderAgain: () => void;
}

function OrderSuccess({ onOrderAgain }: OrderSuccessProps) {
  return (
    <div className="text-center max-w-md mx-auto py-8">
      <CircleCheck
        className="w-20 h-20 text-caramel mx-auto"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <h1 className="mt-6 font-serif text-espresso text-3xl sm:text-4xl">
        {COPY.order.successTitle}
      </h1>
      <p className="mt-3 text-roast leading-relaxed">{COPY.order.successSubtitle}</p>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <Link to="/menu" onClick={onOrderAgain}>
          <Button variant="primary" size="md">
            {COPY.order.successCta}
          </Button>
        </Link>
        <Link to="/">
          <Button variant="secondary" size="md">
            Kembali ke beranda
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
