import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Button, { buttonClasses } from '../components/ui/Button';
import Card from '../components/ui/Card';
import CartItem from '../components/order/CartItem';
import PickupTimeSelector from '../components/order/PickupTimeSelector';
import OrderSummary from '../components/order/OrderSummary';
import CheckoutForm, { type CustomerInfo } from '../components/order/CheckoutForm';
import PaymentMethodSelector from '../components/order/PaymentMethodSelector';
import OrderSuccess from '../components/order/OrderSuccess';
import { useCart } from '../hooks/useCart';
import { COPY } from '../data/copy';
import { cn } from '../lib/utils';
import type { PaymentMethod, PickupTimeOption } from '../types';

type OrderStep = 'cart' | 'checkout' | 'success';

const CHECKOUT_FORM_ID = 'checkout-form';

function StepIndicator({ step }: { step: OrderStep }) {
  const stepIndex: Record<OrderStep, number> = { cart: 0, checkout: 1, success: 2 };
  const currentIndex = stepIndex[step];

  return (
    <ol className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 text-sm">
      {COPY.order.steps.map((label, index) => {
        const isCurrent = index === currentIndex;
        const isDone = index < currentIndex;
        return (
          <li
            key={label}
            aria-current={isCurrent ? 'step' : undefined}
            className={cn(
              'px-3 py-1.5 rounded-full',
              isCurrent && 'bg-espresso text-cream font-medium',
              isDone && 'bg-cream text-espresso',
              !isCurrent && !isDone && 'text-roast/70',
            )}
          >
            {label}
          </li>
        );
      })}
    </ol>
  );
}

function EmptyCart() {
  return (
    <Card padding="lg" className="text-center max-w-md mx-auto">
      <p className="text-roast">{COPY.menu.emptyCart}</p>
      <Link to="/menu" className={buttonClasses('primary', 'md', 'mt-5')}>
        Lihat menu
      </Link>
    </Card>
  );
}

function OrderPage() {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<OrderStep>('cart');
  const [pickupTime, setPickupTime] = useState<PickupTimeOption>('15min');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('qris');

  const handleProceedToCheckout = () => {
    if (items.length === 0) return;
    setStep('checkout');
  };

  const handleConfirmOrder = (_info: CustomerInfo) => {
    void _info;
    clearCart();
    setStep('success');
  };

  const handleOrderAgain = () => {
    setStep('cart');
  };

  if (step === 'success') {
    return (
      <Section>
        <Container>
          <OrderSuccess onOrderAgain={handleOrderAgain} />
        </Container>
      </Section>
    );
  }

  if (items.length === 0) {
    return (
      <Section>
        <Container>
          <StepIndicator step="cart" />
          <EmptyCart />
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <StepIndicator step={step} />

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8 items-start">
          <div className="space-y-6">
            <Card padding="md">
              <h2 className="font-serif text-espresso text-xl mb-3">{COPY.order.cartTitle}</h2>
              <div>
                {items.map((item) => (
                  <CartItem key={item.menuItem.id} item={item} />
                ))}
              </div>
            </Card>

            <Card padding="md">
              <h2 className="font-serif text-espresso text-xl mb-3">{COPY.order.pickupLabel}</h2>
              <PickupTimeSelector value={pickupTime} onChange={setPickupTime} />
            </Card>

            {step === 'checkout' && (
              <Card padding="md">
                <h2 className="font-serif text-espresso text-xl mb-4">
                  {COPY.order.checkoutTitle}
                </h2>
                <CheckoutForm formId={CHECKOUT_FORM_ID} onValidSubmit={handleConfirmOrder} />
                <div className="mt-6">
                  <PaymentMethodSelector value={paymentMethod} onChange={setPaymentMethod} />
                </div>
                <Button
                  type="submit"
                  form={CHECKOUT_FORM_ID}
                  variant="primary"
                  size="lg"
                  className="w-full mt-6"
                >
                  {COPY.order.confirmOrder}
                </Button>
              </Card>
            )}
          </div>

          <div className="lg:sticky lg:top-20">
            <OrderSummary
              subtotal={subtotal}
              onProceed={handleProceedToCheckout}
              showProceed={step === 'cart'}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default OrderPage;
