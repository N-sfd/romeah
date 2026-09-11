"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const router = useRouter();
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
  } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);

  if (!isOpen) return null;

  async function checkout() {
    if (items.length === 0) return;
    setCheckingOut(true);
    try {
      const orderId = `RMH-${10000 + Math.floor(Math.random() * 90000)}`;
      const payload = {
        orderId,
        items,
        subtotal,
        createdAt: new Date().toISOString(),
      };
      sessionStorage.setItem("romeah-last-order", JSON.stringify(payload));
      await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => null);
      clearCart();
      closeCart();
      router.push(`/order-success?order=${orderId}`);
    } finally {
      setCheckingOut(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-black/30"
        aria-label="Close bag"
        onClick={closeCart}
      />

      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-[#FCFBF9] shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-8 py-6 border-b border-black/10">
          <h2 className="text-xs tracking-[0.2em]">YOUR BAG</h2>
          <button type="button" onClick={closeCart} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <p className="text-sm text-black/55">Your bag is empty.</p>
          ) : (
            <ul className="space-y-8">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4">
                  <div className="relative w-24 aspect-[4/5] bg-[#F7F3EE] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-serif text-lg leading-tight">
                      {item.name}
                    </p>
                    {item.color && (
                      <p className="text-sm text-black/55 mt-1">{item.color}</p>
                    )}
                    <div className="flex items-center gap-3 mt-3 text-sm">
                      <span>Qty</span>
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
                    <p className="text-sm mt-3">
                      ${item.price * item.quantity}
                    </p>
                    <button
                      type="button"
                      className="text-xs tracking-[0.12em] mt-3 border-b border-black/30 pb-0.5"
                      onClick={() => removeItem(item.lineId)}
                    >
                      REMOVE
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-black/10 px-8 py-6 space-y-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <p className="text-xs text-black/50">
            Shipping calculated at checkout. Payments stay local until Stripe is
            connected.
          </p>
          <button
            type="button"
            className="w-full bg-[#241F1C] text-white py-4 text-xs tracking-[0.15em] disabled:opacity-40"
            disabled={items.length === 0 || checkingOut}
            onClick={checkout}
          >
            {checkingOut ? "PLACING ORDER…" : "CHECKOUT"}
          </button>
          <Link
            href="/bag"
            onClick={closeCart}
            className="block w-full text-center border border-black py-4 text-xs tracking-[0.15em]"
          >
            VIEW BAG
          </Link>
        </div>
      </aside>
    </div>
  );
}
