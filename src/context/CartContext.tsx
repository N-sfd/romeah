"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  id: number;
  lineId: string;
  name: string;
  price: number;
  image: string;
  color?: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (
    item: Omit<CartItem, "quantity" | "lineId"> & {
      quantity?: number;
      lineId?: string;
    },
  ) => void;
  removeItem: (lineId: string) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  count: number;
};

const STORAGE_KEY = "romeah-cart-v1";
const CartContext = createContext<CartContextType | null>(null);

function lineIdFor(id: number, color?: string) {
  return `${id}:${color ?? "default"}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const clearCart = useCallback(() => setItems([]), []);

  const addItem = useCallback(
    (
      item: Omit<CartItem, "quantity" | "lineId"> & {
        quantity?: number;
        lineId?: string;
      },
    ) => {
      const lineId = item.lineId ?? lineIdFor(item.id, item.color);
      setItems((current) => {
        const existing = current.find((c) => c.lineId === lineId);
        if (existing) {
          return current.map((c) =>
            c.lineId === lineId
              ? { ...c, quantity: c.quantity + (item.quantity ?? 1) }
              : c,
          );
        }
        return [
          ...current,
          {
            ...item,
            lineId,
            quantity: item.quantity ?? 1,
          },
        ];
      });
      setIsOpen(true);
    },
    [],
  );

  const removeItem = useCallback((lineId: string) => {
    setItems((current) => current.filter((item) => item.lineId !== lineId));
  }, []);

  const updateQuantity = useCallback((lineId: string, quantity: number) => {
    setItems((current) =>
      current
        .map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: Math.max(0, quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      subtotal,
      count,
    }),
    [
      items,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      subtotal,
      count,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be inside CartProvider");
  }
  return context;
}
