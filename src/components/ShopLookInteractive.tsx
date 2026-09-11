"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Look } from "@/data/editorial";
import { productsByIds } from "@/data/editorial";
import type { Product } from "@/data/products";

const categoryOrder = ["Handbags", "Clothing", "Shoes", "Jewelry", "Travel"] as const;

function sortLookProducts(items: Product[]) {
  return [...items].sort(
    (a, b) =>
      categoryOrder.indexOf(a.category as (typeof categoryOrder)[number]) -
      categoryOrder.indexOf(b.category as (typeof categoryOrder)[number]),
  );
}

export default function ShopLookInteractive({ look }: { look: Look }) {
  const items = useMemo(
    () => sortLookProducts(productsByIds(look.productIds)),
    [look.productIds],
  );
  const [activeId, setActiveId] = useState(items[0]?.id ?? look.productIds[0]);
  const active = items.find((p) => p.id === activeId) ?? items[0];
  const { addItem } = useCart();

  return (
    <section id={look.slug} className="scroll-mt-28">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12">
        <div className="relative aspect-[3/4] bg-[#F7F3EE] overflow-hidden">
          <Image
            src={look.image}
            alt={`${look.title} — Romeah Shop the Look`}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-top"
            priority={look.id === "1"}
          />

          {look.hotspots.map((spot) => {
            const product = items.find((p) => p.id === spot.productId);
            if (!product) return null;
            const isActive = activeId === spot.productId;
            return (
              <button
                key={spot.productId}
                type="button"
                aria-label={`View ${product.name}`}
                onClick={() => setActiveId(spot.productId)}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              >
                <span
                  className={`block w-4 h-4 rounded-full border border-white shadow transition ${
                    isActive ? "bg-[#241F1C] scale-125" : "bg-white/90"
                  }`}
                />
                <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/95 px-2 py-1 text-[10px] tracking-[0.14em] opacity-0 group-hover:opacity-100 transition">
                  {spot.label.toUpperCase()}
                </span>
              </button>
            );
          })}
        </div>

        <aside className="flex flex-col border border-black/10 bg-[#FCFBF9] p-6 lg:p-8">
          <p className="text-xs tracking-[0.2em] text-black/45 mb-3">LOOK</p>
          <h2 className="font-serif text-4xl mb-3">{look.title}</h2>
          <p className="text-black/65 leading-7 mb-8 max-w-md">{look.subtitle}</p>

          <p className="text-xs tracking-[0.16em] mb-4">IN THIS LOOK</p>
          <ul className="space-y-3 mb-8">
            {items.map((product) => (
              <li key={product.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(product.id)}
                  className={`w-full flex gap-3 items-center text-left p-2 transition ${
                    activeId === product.id ? "bg-[#F3ECE7]" : "hover:bg-[#F7F3EE]"
                  }`}
                >
                  <span className="relative w-14 h-[4.5rem] bg-[#F7F3EE] overflow-hidden shrink-0">
                    <Image
                      src={product.image}
                      alt={product.imageAlt ?? product.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] tracking-[0.12em] text-black/45">
                      {product.category.toUpperCase()}
                    </span>
                    <span className="block font-serif text-lg truncate">
                      {product.name}
                    </span>
                    <span className="block text-sm text-black/55">
                      ${product.price}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {active && (
            <div className="mt-auto border-t border-black/10 pt-6">
              <p className="text-xs tracking-[0.14em] text-black/45 mb-2">
                SELECTED
              </p>
              <h3 className="font-serif text-2xl mb-1">{active.name}</h3>
              <p className="text-sm text-black/55 mb-5">
                {active.color} · ${active.price}
              </p>
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="w-full bg-[#241F1C] text-white py-4 text-xs tracking-[0.15em]"
                  onClick={() =>
                    addItem({
                      id: active.id,
                      name: active.name,
                      price: active.price,
                      image: active.image,
                      color: active.color,
                    })
                  }
                >
                  ADD TO BAG
                </button>
                <Link
                  href={`/product/${active.slug}`}
                  className="w-full text-center border border-black py-4 text-xs tracking-[0.15em]"
                >
                  VIEW PRODUCT
                </Link>
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
