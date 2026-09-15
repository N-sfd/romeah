"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFilters, {
  type FilterSelection,
  emptyFilters,
} from "@/components/ProductFilters";
import type { Product } from "@/data/products";

const sortOptions = [
  "Recommended",
  "Newest",
  "Best Selling",
  "Price Low to High",
  "Price High to Low",
] as const;

type SortOption = (typeof sortOptions)[number];

function matchesChip(product: Product, chip: string) {
  if (chip.startsWith("ALL")) return true;
  const normalized = chip.replace(/S$/, "").toLowerCase();
  const sub = (product.subcategory ?? "").toLowerCase();
  if (chip.includes("SHOULDER")) return sub.includes("shoulder");
  if (chip.includes("CROSSBODY")) return sub.includes("crossbody");
  if (chip.includes("TOTE")) return sub.includes("tote");
  if (chip.includes("TOP HANDLE")) return sub.includes("top handle");
  if (chip.includes("MINI")) return sub.includes("mini");
  if (chip.includes("EVENING")) return sub.includes("evening");
  if (chip.includes("TRAVEL")) return sub.includes("travel");
  if (chip.includes("CARRY")) return sub.includes("carry");
  if (chip.includes("WEEKEND")) return sub.includes("weekend");
  return sub.includes(normalized.toLowerCase()) || chip === "ALL";
}

function matchesDrawerFilters(product: Product, selected: FilterSelection) {
  const category = selected.Category ?? [];
  const color = selected.Color ?? [];
  const material = selected.Material ?? [];
  const price = selected.Price ?? [];
  const size = selected.Size ?? [];
  const collection = selected.Collection ?? [];
  const availability = selected.Availability ?? [];

  if (category.length) {
    const ok = category.some((c) => {
      const sub = (product.subcategory ?? "").toLowerCase();
      if (c === "Crossbody") return sub.includes("crossbody");
      if (c === "Totes") return sub.includes("tote");
      if (c === "Top Handle") return sub.includes("top handle");
      if (c === "Mini Bags") return sub.includes("mini");
      if (c === "Evening") return sub.includes("evening");
      if (c === "Shoulder Bags") return sub.includes("shoulder");
      return sub.includes(c.toLowerCase());
    });
    if (!ok) return false;
  }

  if (color.length && !color.includes(product.color)) return false;
  if (
    material.length &&
    !material.some((m) =>
      (product.material ?? "").toLowerCase().includes(m.toLowerCase()),
    )
  ) {
    return false;
  }

  if (price.length) {
    const ok = price.some((band) => {
      if (band === "Under $250") return product.price < 250;
      if (band === "$250–$350") return product.price >= 250 && product.price <= 350;
      if (band === "$350+") return product.price > 350;
      return true;
    });
    if (!ok) return false;
  }

  if (size.length && product.size && !size.includes(product.size)) return false;

  if (collection.length) {
    const ok = collection.some(
      (c) =>
        (product.collection ?? "").toLowerCase() === c.toLowerCase() ||
        (product.collection ?? "")
          .toLowerCase()
          .includes(c.toLowerCase().split(" ")[0]),
    );
    if (!ok) return false;
  }

  if (availability.includes("In Stock") && product.available === false) {
    return false;
  }
  if (availability.includes("Coming Soon") && product.available !== false) {
    return false;
  }

  return true;
}

type Props = {
  products: Product[];
  chips?: string[];
};

export default function ProductToolbar({ products, chips = [] }: Props) {
  const [sort, setSort] = useState<SortOption>("Recommended");
  const [sortOpen, setSortOpen] = useState(false);
  const [chip, setChip] = useState(chips[0] ?? "ALL");
  const [filters, setFilters] = useState<FilterSelection>(emptyFilters());

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (chips.length && !matchesChip(product, chip)) return false;
      return matchesDrawerFilters(product, filters);
    });
  }, [products, chips, chip, filters]);

  const sorted = useMemo(() => {
    const list = [...filtered];
    switch (sort) {
      case "Price Low to High":
        return list.sort((a, b) => a.price - b.price);
      case "Price High to Low":
        return list.sort((a, b) => b.price - a.price);
      case "Newest":
        return list.sort((a, b) => b.id - a.id);
      case "Best Selling":
        return list.sort((a, b) => Number(b.featured) - Number(a.featured));
      default:
        return list;
    }
  }, [filtered, sort]);

  const activeFilterCount = Object.values(filters).reduce(
    (n, list) => n + list.length,
    0,
  );

  return (
    <>
      {chips.length > 0 && (
        <div className="border-y border-black/10 overflow-x-auto -mx-8 mb-10">
          <div className="flex justify-center min-w-max gap-10 px-8 py-5 text-xs tracking-[0.12em]">
            {chips.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setChip(option)}
                className={
                  chip === option
                    ? "border-b border-black pb-1"
                    : "text-black/45 pb-1"
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between mb-10">
        <p className="text-sm">
          {sorted.length} PRODUCT{sorted.length === 1 ? "" : "S"}
          {activeFilterCount > 0 ? ` · ${activeFilterCount} filters` : ""}
        </p>

        <div className="flex gap-8 text-sm items-center">
          <ProductFilters value={filters} onChange={setFilters} />

          <div className="relative">
            <button type="button" onClick={() => setSortOpen((v) => !v)}>
              SORT BY ▾
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-3 w-56 bg-white border border-black/10 shadow-sm z-20">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`block w-full text-left px-4 py-3 text-sm hover:bg-[#F7F3EE] ${
                      sort === option ? "text-black" : "text-black/60"
                    }`}
                    onClick={() => {
                      setSort(option);
                      setSortOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-serif text-2xl mb-4">No pieces match</p>
          <button
            type="button"
            className="text-xs tracking-[0.14em] border-b border-black pb-1"
            onClick={() => {
              setFilters(emptyFilters());
              setChip(chips[0] ?? "ALL");
            }}
          >
            CLEAR FILTERS
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-12">
          {sorted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
