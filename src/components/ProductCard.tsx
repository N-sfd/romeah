"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const { toggle, isSaved } = useWishlist();
  const saved = isSaved(product.id);
  const alt = product.imageAlt ?? `${product.name} by Romeah`;

  return (
    <div className="group">
      <div className="relative aspect-[4/5] bg-[#F7F3EE] overflow-hidden">
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

      <div className="pt-4">
        <p className="text-xs text-black/50 uppercase tracking-wider">
          {product.category}
        </p>

        <Link href={`/product/${product.slug}`}>
          <h3 className="font-serif text-lg mt-1">{product.name}</h3>
        </Link>

        <p className="text-sm text-black/60 mt-1">{product.color}</p>

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
