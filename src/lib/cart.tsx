import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { plants, type Plant } from "@/lib/nursery-data";

export type CartItem = { id: string; qty: number };

type CartContextValue = {
  items: CartItem[];
  detailed: Array<{ plant: Plant; qty: number; lineTotal: number }>;
  count: number;
  total: number;
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "rk-nursery-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const detailed = items
      .map((i) => {
        const plant = plants.find((p) => p.id === i.id);
        return plant ? { plant, qty: i.qty, lineTotal: plant.price * i.qty } : null;
      })
      .filter((x): x is { plant: Plant; qty: number; lineTotal: number } => !!x);

    return {
      items,
      detailed,
      count: items.reduce((a, i) => a + i.qty, 0),
      total: detailed.reduce((a, d) => a + d.lineTotal, 0),
      add: (id, qty = 1) =>
        setItems((prev) => {
          const existing = prev.find((p) => p.id === id);
          if (existing) return prev.map((p) => (p.id === id ? { ...p, qty: p.qty + qty } : p));
          return [...prev, { id, qty }];
        }),
      remove: (id) => setItems((prev) => prev.filter((p) => p.id !== id)),
      setQty: (id, qty) =>
        setItems((prev) =>
          qty <= 0 ? prev.filter((p) => p.id !== id) : prev.map((p) => (p.id === id ? { ...p, qty } : p))
        ),
      clear: () => setItems([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
