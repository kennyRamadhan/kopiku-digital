import { Plus } from 'lucide-react';
import type { MenuItem } from '../../types';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import SafeImage from '../ui/SafeImage';
import { formatRupiah } from '../../lib/utils';
import { useCart } from '../../hooks/useCart';

interface MenuCardProps {
  item: MenuItem;
}

function MenuCard({ item }: MenuCardProps) {
  const { addItem } = useCart();

  return (
    <Card padding="sm" className="flex flex-col overflow-hidden">
      <div className="relative aspect-square w-full overflow-hidden rounded-md bg-roast/10 mb-3">
        <SafeImage
          src={item.image}
          alt={item.name}
          fallbackLabel={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {item.bestSeller && (
          <Badge variant="accent" size="sm" className="absolute top-2 left-2 shadow-sm">
            Best seller
          </Badge>
        )}
      </div>

      <h2 className="font-serif text-espresso text-lg leading-snug">{item.name}</h2>
      <p className="mt-1 text-sm text-roast line-clamp-2 flex-1">{item.description}</p>

      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="font-medium text-espresso">{formatRupiah(item.price)}</span>
        <button
          type="button"
          aria-label={`Tambah ${item.name} ke keranjang`}
          onClick={() => addItem(item)}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-caramel text-white hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-beige"
        >
          <Plus className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </Card>
  );
}

export default MenuCard;
