import { Minus, Plus, Trash2 } from 'lucide-react';
import type { CartItem as CartItemType } from '../../types';
import SafeImage from '../ui/SafeImage';
import { useCart } from '../../hooks/useCart';
import { formatRupiah } from '../../lib/utils';

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { menuItem, quantity } = item;

  const handleDecrement = () => {
    if (quantity <= 1) {
      removeItem(menuItem.id);
    } else {
      updateQuantity(menuItem.id, quantity - 1);
    }
  };

  const handleIncrement = () => {
    updateQuantity(menuItem.id, quantity + 1);
  };

  return (
    <div className="flex items-center gap-3 py-3 border-b border-espresso/10 last:border-b-0">
      <div className="w-14 h-14 shrink-0 rounded-md overflow-hidden bg-roast/10">
        <SafeImage
          src={menuItem.image}
          alt={menuItem.name}
          fallbackLabel={menuItem.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-medium text-espresso truncate">{menuItem.name}</p>
        <p className="text-sm text-roast">{formatRupiah(menuItem.price)}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={quantity <= 1 ? `Hapus ${menuItem.name}` : `Kurangi ${menuItem.name}`}
          onClick={handleDecrement}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cream text-espresso hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-beige"
        >
          {quantity <= 1 ? (
            <Trash2 className="w-4 h-4" aria-hidden="true" />
          ) : (
            <Minus className="w-4 h-4" aria-hidden="true" />
          )}
        </button>
        <span
          aria-label={`Jumlah ${quantity}`}
          className="inline-flex items-center justify-center min-w-[1.5rem] text-sm font-medium text-espresso"
        >
          {quantity}
        </span>
        <button
          type="button"
          aria-label={`Tambah ${menuItem.name}`}
          onClick={handleIncrement}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-caramel text-white hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-beige"
        >
          <Plus className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
