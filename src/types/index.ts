export type Category = 'kopi' | 'non-kopi' | 'cemilan' | 'bundle';

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
  bestSeller?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export type PickupTimeOption = '15min' | '30min' | '1hour' | 'custom';
export type PaymentMethod = 'qris' | 'gopay' | 'ovo' | 'transfer';
