"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function BagPage() {
  const router = useRouter();
  const { items, updateQuantity, removeItem, clearCart, subtotal, openCart } =
    useCart();

  function checkout() {
    if (items.length === 0) return;
    const orderId = `RMH-${10000 + Math.floor(Math.random() * 90000)}`;
    sessionStorage.setItem(
      "romeah-last-order",
      JSON.stringify({
        orderId,
        items,
        subtotal,
        createdAt: new Date().toISOString(),
      }),
    );
    clearCart();
    router.push(`/order-success?order=${orderId}`);
  }

  return (
    <main>
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 py-16">
        <p className="text-xs tracking-[0.2em] mb-4">ROMEAH</p>
        <h1 className="font-serif text-5xl mb-10">Your Bag</h1>

        {items.length === 0 ? (
          <div className="py-16 text-center border-t border-black/10">
            <p className="text-black/55 mb-8">Your bag is empty.</p>
            <Link
              href="/handbags"
              className="text-xs tracking-[0.15em] border-b border-black pb-1"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-12">
            <ul className="space-y-8 border-t border-black/10 pt-8">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-5">
                  <div className="relative w-28 aspect-[4/5] bg-[#F7F3EE]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-serif text-2xl">{item.name}</p>
                    {item.color && (
                      <p className="text-sm text-black/55 mt-1">{item.color}</p>
                    )}
                    <div className="flex items-center gap-3 mt-4 text-sm">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.lineId, item.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.lineId, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="mt-3">${item.price * item.quantity}</p>
                    <button
                      type="button"
                      className="text-xs tracking-[0.12em] mt-4 border-b border-black/30 pb-0.5"
                      onClick={() => removeItem(item.lineId)}
                    >
                      REMOVE
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="border border-black/10 p-8 h-fit">
              <div className="flex justify-between text-sm mb-2">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <p className="text-xs text-black/50 mb-8">
                Shipping calculated at checkout.
              </p>
              <button
                type="button"
                onClick={checkout}
                className="w-full bg-[#241F1C] text-white py-4 text-xs tracking-[0.15em] mb-3"
              >
                CHECKOUT
              </button>
              <button
                type="button"
                onClick={openCart}
                className="w-full border border-black py-4 text-xs tracking-[0.15em]"
              >
                OPEN DRAWER
              </button>
            </aside>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
