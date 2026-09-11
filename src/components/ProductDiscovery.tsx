"use client";

import Link from "next/link";
import { useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { useRecentlyViewed } from "@/context/RecentlyViewedContext";
import { products } from "@/data/products";

export function RecentlyViewedRail({
  excludeId,
  title = "Recently Viewed",
}: {
  excludeId?: number;
  title?: string;
}) {
  const { ids } = useRecentlyViewed();
  const items = useMemo(
    () =>
      ids
        .filter((id) => id !== excludeId)
        .map((id) => products.find((p) => p.id === id))
        .filter(Boolean)
        .slice(0, 4),
    [ids, excludeId],
  );

  if (items.length === 0) return null;

  return (
    <section className="max-w-[1500px] mx-auto px-6 md:px-10 py-20 border-t border-black/10">
      <p className="text-xs tracking-[0.2em] mb-3">CONTINUE BROWSING</p>
      <h2 className="font-serif text-3xl mb-10">{title}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((product) =>
          product ? <ProductCard key={product.id} product={product} /> : null,
        )}
      </div>
    </section>
  );
}

export function Recommendations({
  productId,
  category,
}: {
  productId: number;
  category: string;
}) {
  const picks = products
    .filter((p) => p.id !== productId && p.category === category)
    .slice(0, 4);

  const fallback = products.filter((p) => p.id !== productId).slice(0, 4);
  const list = picks.length >= 2 ? picks : fallback;

  return (
    <section className="max-w-[1500px] mx-auto px-6 md:px-10 py-20">
      <div className="flex justify-between items-end mb-10">
        <div>
          <p className="text-xs tracking-[0.2em] mb-3">YOU MAY ALSO LIKE</p>
          <h2 className="font-serif text-3xl">Recommended</h2>
        </div>
        <Link
          href="/handbags"
          className="text-xs tracking-[0.15em] border-b border-black pb-1"
        >
          VIEW ALL
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
