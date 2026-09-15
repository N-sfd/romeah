"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
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

function ProductPanel({
  product,
  onAdd,
  compact,
}: {
  product: Product;
  onAdd: () => void;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "" : "mt-auto border-t border-black/10 pt-6"}>
      <div className="flex gap-4 mb-5">
        <span className="relative w-16 h-20 bg-[#F7F3EE] overflow-hidden shrink-0">
          <Image
            src={product.image}
            alt={product.imageAlt ?? product.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </span>
        <div className="min-w-0">
          <p className="text-[10px] tracking-[0.12em] text-black/45">
            {product.category.toUpperCase()}
          </p>
          <h3 className="font-serif text-xl mt-1">{product.name}</h3>
          <p className="text-sm text-black/55 mt-1">
            {product.color} · ${product.price}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button
          type="button"
          className="w-full bg-[#241F1C] text-white py-4 text-xs tracking-[0.15em]"
          onClick={onAdd}
        >
          ADD TO BAG
        </button>
        <Link
          href={`/product/${product.slug}`}
          className="w-full text-center border border-black py-4 text-xs tracking-[0.15em]"
        >
          VIEW PRODUCT
        </Link>
      </div>
    </div>
  );
}

export default function ShopLookInteractive({ look }: { look: Look }) {
  const items = useMemo(
    () => sortLookProducts(productsByIds(look.productIds)),
    [look.productIds],
  );
  const [activeId, setActiveId] = useState<number | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const active = items.find((p) => p.id === activeId) ?? null;
  const { addItem } = useCart();

  useEffect(() => {
    if (!sheetOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [sheetOpen]);

  function selectProduct(id: number) {
    setActiveId(id);
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) {
      setSheetOpen(true);
    }
  }

  function addActive() {
    if (!active) return;
    addItem({
      id: active.id,
      name: active.name,
      price: active.price,
      image: active.image,
      color: active.color,
    });
  }

  return (
    <section id={look.slug} className="scroll-mt-28">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12">
        <div className="relative min-h-[70vh] lg:min-h-[85vh] bg-[#F7F3EE] overflow-hidden">
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
                onClick={() => selectProduct(spot.productId)}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              >
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span
                    className={`romeah-hotspot-pulse absolute inline-flex h-full w-full rounded-full bg-white/70 ${
                      isActive ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`relative inline-flex h-3.5 w-3.5 rounded-full border border-white shadow-sm transition ${
                      isActive ? "bg-[#241F1C] scale-110" : "bg-white/95"
                    }`}
                  />
                </span>
                <span className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/95 px-2 py-1 text-[10px] tracking-[0.14em] opacity-0 group-hover:opacity-100 transition">
                  {spot.label.toUpperCase()}
                </span>
              </button>
            );
          })}
        </div>

        <aside className="hidden lg:flex flex-col border border-black/10 bg-[#FCFBF9] p-6 lg:p-8">
          <p className="text-xs tracking-[0.2em] text-black/45 mb-3">LOOK</p>
          <h2 className="font-serif text-4xl mb-3">{look.title}</h2>
          <p className="text-black/65 leading-7 mb-8 max-w-md">{look.subtitle}</p>

          <p className="text-xs tracking-[0.16em] mb-4">IN THIS LOOK</p>
          <ul className="space-y-3 mb-8">
            {items.map((product) => (
              <li key={product.id}>
                <button
                  type="button"
                  onClick={() => selectProduct(product.id)}
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

          {active && <ProductPanel product={active} onAdd={addActive} />}
          {!active && (
            <p className="mt-auto text-sm text-black/45">
              Tap a marker to preview a piece.
            </p>
          )}
        </aside>

        <div className="lg:hidden px-1">
          <p className="text-xs tracking-[0.2em] text-black/45 mb-2">LOOK</p>
          <h2 className="font-serif text-3xl mb-2">{look.title}</h2>
          <p className="text-black/65 leading-7 mb-4">{look.subtitle}</p>
          <p className="text-xs tracking-[0.12em] text-black/45">
            Tap the markers to shop each piece
          </p>
        </div>
      </div>

      {sheetOpen && active && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/35"
            aria-label="Close product panel"
            onClick={() => setSheetOpen(false)}
          />
          <div className="absolute inset-x-0 bottom-0 bg-[#FCFBF9] px-6 pt-4 pb-8 rounded-t-sm max-h-[70vh] overflow-y-auto">
            <div className="w-10 h-1 bg-black/15 mx-auto mb-5 rounded-full" />
            <ProductPanel product={active} onAdd={addActive} compact />
          </div>
        </div>
      )}
    </section>
  );
}
