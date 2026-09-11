"use client";

import { type ReactNode } from "react";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import { RecentlyViewedProvider } from "@/context/RecentlyViewedContext";
import { WishlistProvider } from "@/context/WishlistContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <WishlistProvider>
        <RecentlyViewedProvider>
          {children}
          <CartDrawer />
        </RecentlyViewedProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
