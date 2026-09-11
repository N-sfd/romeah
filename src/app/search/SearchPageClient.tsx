"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, type ProductCategory } from "@/data/products";

const categories: Array<ProductCategory | "All"> = [
  "All",
  "Handbags",
  "Clothing",
  "Shoes",
  "Jewelry",
  "Travel",
];

export default function SearchPageClient() {
  const params = useSearchParams();
  const initial = params.get("q") ?? "";
  const [q, setQ] = useState(initial);
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const [sort, setSort] = useState("recommended");

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    let list = products.filter((p) => {
      const matchesQuery =
        !query ||
        [p.name, p.category, p.color, p.subcategory, p.collection, p.material]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(query);
      const matchesCategory = category === "All" || p.category === category;
      return matchesQuery && matchesCategory;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "newest") list = [...list].sort((a, b) => b.id - a.id);
    return list;
  }, [q, category, sort]);

  return (
    <main>
      <section className="max-w-[1500px] mx-auto px-6 md:px-10 py-16">
        <p className="text-xs tracking-[0.2em] mb-4">SEARCH</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-8">Find your piece</h1>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name, color, material…"
          className="w-full max-w-2xl border-b border-black/20 bg-transparent outline-none py-4 text-lg font-serif mb-10"
        />

        <div className="flex flex-wrap gap-6 items-center justify-between mb-10">
          <div className="flex flex-wrap gap-4 text-xs tracking-[0.12em]">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={
                  category === c
                    ? "border-b border-black pb-1"
                    : "text-black/50 pb-1"
                }
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm bg-transparent border-b border-black/20 py-2 outline-none"
          >
            <option value="recommended">Recommended</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <p className="text-sm mb-8">{results.length} RESULTS</p>

        {results.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl mb-4">No matches</p>
            <Link href="/handbags" className="text-xs tracking-[0.14em] border-b border-black pb-1">
              BROWSE HANDBAGS
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
