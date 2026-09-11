"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const { items, remove } = useWishlist();
  const { addItem } = useCart();

  return (
    <main>
      <section className="max-w-[1500px] mx-auto px-8 py-20">
        <p className="text-xs tracking-[0.2em] mb-4">ROMEAH</p>
        <h1 className="font-serif text-5xl mb-3">Your Wishlist</h1>
        <p className="text-sm text-black/55 mb-14">
          {items.length} SAVED ITEM{items.length === 1 ? "" : "S"}
        </p>

        {items.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-black/55 mb-8">Nothing saved yet.</p>
            <Link
              href="/handbags"
              className="text-xs tracking-[0.15em] border-b border-black pb-1"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
            {items.map((product) => (
              <article key={product.id}>
                <Link href={`/product/${product.slug}`}>
                  <div className="relative aspect-[4/5] bg-[#F7F3EE] overflow-hidden mb-4">
                    <Image
                      src={product.image}
                      alt={product.imageAlt ?? product.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-lg">{product.name}</h3>
                </Link>
                <p className="text-sm text-black/55 mt-1">{product.color}</p>
                <p className="text-sm mt-2">${product.price}</p>
                <div className="flex flex-col gap-3 mt-5">
                  <button
                    type="button"
                    className="bg-[#241F1C] text-white py-3 text-xs tracking-[0.14em]"
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
                  <button
                    type="button"
                    className="text-xs tracking-[0.12em] border-b border-black/30 self-start pb-0.5"
                    onClick={() => remove(product.id)}
                  >
                    REMOVE
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
