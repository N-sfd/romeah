"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const occasions = [
  "City day",
  "Evening",
  "Weekend travel",
  "Work week",
  "Holiday escape",
] as const;

const palettes = ["Ivory & black", "Burgundy depth", "Soft neutrals", "Gold accents"] as const;

export default function StylistPage() {
  const [occasion, setOccasion] = useState<(typeof occasions)[number]>("City day");
  const [palette, setPalette] = useState<(typeof palettes)[number]>("Soft neutrals");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const picks = useMemo(() => {
    if (!submitted) return [];
    const bag =
      palette.includes("Burgundy")
        ? products.find((p) => p.id === 1)
        : palette.includes("Gold")
          ? products.find((p) => p.id === 3)
          : products.find((p) => p.id === 2);
    const dress = products.find((p) => p.category === "Clothing");
    const shoe = products.find((p) => p.category === "Shoes");
    const jewel = products.find((p) => p.category === "Jewelry");
    const travel =
      occasion.includes("travel") || occasion.includes("Holiday")
        ? products.find((p) => p.category === "Travel")
        : undefined;
    return [bag, dress, shoe, jewel, travel].filter(Boolean);
  }, [submitted, occasion, palette]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <section className="bg-[#241F1C] text-white py-24 px-6 text-center">
        <p className="text-xs tracking-[0.25em] mb-5 text-white/55">
          ROMEAH ATELIER
        </p>
        <h1 className="font-serif text-5xl md:text-6xl mb-5">AI Stylist</h1>
        <p className="max-w-xl mx-auto text-white/70 leading-7">
          Share the occasion and mood — we&apos;ll compose a considered look from
          the Romeah wardrobe. Guidance only; no account required.
        </p>
      </section>

      <section className="max-w-[900px] mx-auto px-6 py-16">
        <form onSubmit={onSubmit} className="space-y-10">
          <div>
            <p className="text-xs tracking-[0.16em] mb-4">OCCASION</p>
            <div className="flex flex-wrap gap-3">
              {occasions.map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => setOccasion(o)}
                  className={`px-4 py-3 text-xs tracking-[0.12em] border ${
                    occasion === o
                      ? "border-black bg-[#241F1C] text-white"
                      : "border-black/15"
                  }`}
                >
                  {o.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.16em] mb-4">PALETTE</p>
            <div className="flex flex-wrap gap-3">
              {palettes.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPalette(p)}
                  className={`px-4 py-3 text-xs tracking-[0.12em] border ${
                    palette === p
                      ? "border-black bg-[#241F1C] text-white"
                      : "border-black/15"
                  }`}
                >
                  {p.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="note" className="text-xs tracking-[0.16em] block mb-4">
              NOTES
            </label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="Prefer a mini bag, soft heels, cabin-friendly…"
              className="w-full border border-black/15 bg-transparent p-4 outline-none text-sm leading-7"
            />
          </div>

          <button
            type="submit"
            className="bg-[#241F1C] text-white px-10 py-4 text-xs tracking-[0.16em]"
          >
            COMPOSE MY LOOK
          </button>
        </form>

        {submitted && (
          <div className="mt-20">
            <p className="text-xs tracking-[0.2em] mb-3">YOUR EDIT</p>
            <h2 className="font-serif text-3xl mb-3">
              {occasion} · {palette}
            </h2>
            <p className="text-black/60 leading-7 mb-10 max-w-2xl">
              A composed selection based on your preferences
              {note.trim() ? ` — noting “${note.trim()}”` : ""}. Swap pieces
              freely; this is a starting point, not a rule.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {picks.map(
                (product) =>
                  product && (
                    <ProductCard key={product.id} product={product} />
                  ),
              )}
            </div>
            <div className="mt-10 flex gap-6 text-xs tracking-[0.14em]">
              <Link href="/shop-the-look" className="border-b border-black pb-1">
                SHOP THE LOOK
              </Link>
              <Link href="/the-edit" className="border-b border-black pb-1">
                READ THE EDIT
              </Link>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
