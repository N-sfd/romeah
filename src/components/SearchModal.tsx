"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { products } from "@/data/products";

export default function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) setQ("");
  }, [open]);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return products.slice(0, 6);
    return products
      .filter((p) =>
        [p.name, p.category, p.color, p.subcategory, p.collection]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(query),
      )
      .slice(0, 8);
  }, [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/35" onClick={onClose}>
      <div
        className="absolute inset-x-0 top-0 bg-[#FCFBF9] border-b border-black/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-[900px] mx-auto px-6 py-8">
          <div className="flex items-center gap-4 border-b border-black/15 pb-4">
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  router.push(`/search?q=${encodeURIComponent(q.trim())}`);
                  onClose();
                }
              }}
              placeholder="Search bags, clothing, travel…"
              className="flex-1 bg-transparent outline-none text-lg font-serif"
            />
            <button
              type="button"
              className="text-xs tracking-[0.14em]"
              onClick={onClose}
            >
              ESC
            </button>
          </div>

          <div className="mt-8 grid gap-4">
            <p className="text-xs tracking-[0.16em] text-black/45">
              {q.trim() ? "RESULTS" : "SUGGESTED"}
            </p>
            {results.length === 0 && (
              <p className="text-sm text-black/55">No pieces matched.</p>
            )}
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                onClick={onClose}
                className="flex gap-4 items-center group"
              >
                <div className="relative w-16 h-20 bg-[#F7F3EE] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.imageAlt ?? product.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs tracking-[0.12em] text-black/45">
                    {product.category}
                  </p>
                  <p className="font-serif text-xl group-hover:opacity-70">
                    {product.name}
                  </p>
                  <p className="text-sm text-black/55">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-xs tracking-[0.14em]">
            <Link href="/handbags" onClick={onClose}>
              HANDBAGS
            </Link>
            <Link href="/travel" onClick={onClose}>
              TRAVEL
            </Link>
            <Link href="/shop-the-look" onClick={onClose}>
              SHOP THE LOOK
            </Link>
            <Link href="/the-edit" onClick={onClose}>
              THE EDIT
            </Link>
            <Link
              href={`/search?q=${encodeURIComponent(q.trim())}`}
              onClick={onClose}
              className="border-b border-black pb-1"
            >
              VIEW ALL RESULTS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
