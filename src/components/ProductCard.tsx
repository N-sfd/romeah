"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import type { Product } from "@/data/products";

const colorDot: Record<string, string> = {
  Burgundy: "#6B2D3C",
  Black: "#1A1816",
  Ivory: "#F3ECE7",
  Olive: "#5C6B4A",
  Gold: "#C4A574",
  Brown: "#6B4A32",
};

export default function ProductCard({ product }: { product: Product }) {
  const { toggle, isSaved } = useWishlist();
  const saved = isSaved(product.id);
  const alt = product.imageAlt ?? `${product.name} by Romeah`;
  const swatches = product.colors ?? [product.color];

  return (
    <div className="group">
      <div className="relative aspect-[4/5] bg-[#F7F3EE] overflow-hidden">
        <Link href={`/product/${product.slug}`} className="absolute inset-0">
          <Image
            src={product.image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1400px) 25vw, 20vw"
            className={`object-cover transition duration-700 group-hover:scale-[1.02] ${
              product.imageHover ? "opacity-100 group-hover:opacity-0" : ""
            }`}
          />
          {product.imageHover && (
            <Image
              src={product.imageHover}
              alt=""
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1400px) 25vw, 20vw"
              className="object-cover opacity-0 transition duration-500 group-hover:opacity-100"
              aria-hidden
            />
          )}
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 z-10 text-[10px] tracking-[0.14em] bg-white/95 px-2 py-1">
            {product.badge.toUpperCase()}
          </span>
        )}

        <button
          type="button"
          className="absolute right-3 top-3 z-10 text-xl w-10 h-10 flex items-center justify-center"
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggle(product.id)}
        >
          {saved ? "♥" : "♡"}
        </button>
      </div>

      <div className="pt-4">
        <p className="text-xs text-black/50 uppercase tracking-wider">
          {product.category}
        </p>

        <Link href={`/product/${product.slug}`}>
          <h3 className="font-serif text-lg mt-1">{product.name}</h3>
        </Link>

        <p className="text-sm text-black/60 mt-1">{product.color}</p>

        <div className="flex gap-1.5 mt-2" aria-label="Available colors">
          {swatches.map((c) => (
            <span
              key={c}
              title={c}
              className="w-2.5 h-2.5 rounded-full border border-black/15"
              style={{ background: colorDot[c] ?? "#C9C2BA" }}
            />
          ))}
        </div>

        {product.category === "Travel" && (
          <p className="text-xs text-black/45 mt-1 tracking-[0.06em]">
            {[product.subcategory, product.capacity, product.weight]
              .filter(Boolean)
              .join(" · ")}
          </p>
        )}

        <p className="text-sm mt-2">${product.price}</p>
      </div>
    </div>
  );
}

export function TravelProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggle, isSaved } = useWishlist();
  const saved = isSaved(product.id);
  const alt = product.imageAlt ?? `${product.name} by Romeah`;

  return (
    <article className="group">
      <div className="relative aspect-[4/5] bg-[#FAF9F6] overflow-hidden mb-5">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </Link>
        <button
          type="button"
          className="absolute right-4 top-4 text-xl z-10"
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggle(product.id)}
        >
          {saved ? "♥" : "♡"}
        </button>
      </div>
      <p className="text-xs tracking-[0.2em] text-black/45 mb-2">ROMEAH</p>
      <Link href={`/product/${product.slug}`}>
        <h3 className="font-serif text-2xl">{product.name}</h3>
      </Link>
      <p className="text-sm text-black/55 mt-2">
        {[product.subcategory, product.capacity, product.weight]
          .filter(Boolean)
          .join(" · ")}
      </p>
      {(product.shell || product.wheels || product.lock) && (
        <p className="text-xs text-black/45 mt-2 leading-6">
          {[
            product.shell && `Shell: ${product.shell}`,
            product.wheels && `Wheels: ${product.wheels}`,
            product.lock && `Lock: ${product.lock}`,
          ]
            .filter(Boolean)
            .join(" · ")}
        </p>
      )}
      <p className="mt-3">${product.price}</p>
      <button
        type="button"
        className="mt-4 text-xs tracking-[0.14em] border-b border-black pb-1"
        onClick={() =>
          addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: product.color,
          })
        }
      >
        ADD TO BAG
      </button>
    </article>
  );
}
