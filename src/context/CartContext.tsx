import { createContext, useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import type { CartItem, MenuItem } from '../types';

export interface CartContextValue {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  subtotal: number;
  totalItems: number;
}

const STORAGE_KEY = 'kopiku-cart-v1';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextValue | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  const hydratedRef = useRef(false);

  useEffect(() => {
    // Hydrate cart from localStorage on first mount. Synchronous setState in effect is
    // intentional here — we need state set before the first paint that reads it.
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setItems(parsed as CartItem[]);
        }
      }
    } catch {
      // ignore corrupt storage
    }
    hydratedRef.current = true;
  }, []);

  useEffect(() => {
    if (!hydratedRef.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore quota errors
    }
  }, [items]);

  const addItem = useCallback((item: MenuItem) => {
    setItems((prev) => {
      const existing = prev.find((row) => row.menuItem.id === item.id);
      if (existing) {
        return prev.map((row) =>
          row.menuItem.id === item.id ? { ...row, quantity: row.quantity + 1 } : row,
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((row) => row.menuItem.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, qty: number) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((row) => row.menuItem.id !== id));
      return;
    }
    setItems((prev) =>
      prev.map((row) => (row.menuItem.id === id ? { ...row, quantity: qty } : row)),
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const subtotal = useMemo(
    () => items.reduce((sum, row) => sum + row.menuItem.price * row.quantity, 0),
    [items],
  );

  const totalItems = useMemo(
    () => items.reduce((sum, row) => sum + row.quantity, 0),
    [items],
  );

  const value = useMemo<CartContextValue>(
    () => ({ items, addItem, removeItem, updateQuantity, clearCart, subtotal, totalItems }),
    [items, addItem, removeItem, updateQuantity, clearCart, subtotal, totalItems],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
