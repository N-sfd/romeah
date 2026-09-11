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
import { products, type Product } from "@/data/products";

type WishlistContextType = {
  wishlist: number[];
  items: Product[];
  add: (id: number) => void;
  remove: (id: number) => void;
  toggle: (id: number) => void;
  isSaved: (id: number) => boolean;
};

const STORAGE_KEY = "romeah-wishlist-v1";
const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setWishlist(JSON.parse(raw) as number[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
    } catch {
      /* ignore */
    }
  }, [wishlist, hydrated]);

  const add = useCallback((id: number) => {
    setWishlist((current) =>
      current.includes(id) ? current : [...current, id],
    );
  }, []);

  const remove = useCallback((id: number) => {
    setWishlist((current) => current.filter((item) => item !== id));
  }, []);

  const toggle = useCallback((id: number) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }, []);

  const isSaved = useCallback(
    (id: number) => wishlist.includes(id),
    [wishlist],
  );

  const items = useMemo(
    () => products.filter((p) => wishlist.includes(p.id)),
    [wishlist],
  );

  const value = useMemo(
    () => ({ wishlist, items, add, remove, toggle, isSaved }),
    [wishlist, items, add, remove, toggle, isSaved],
  );

  return (
    <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be inside WishlistProvider");
  }
  return context;
}
