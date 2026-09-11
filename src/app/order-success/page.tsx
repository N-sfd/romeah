"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

type SavedOrder = {
  orderId: string;
  subtotal: number;
  items: { name: string; quantity: number; price: number; color?: string }[];
};

function OrderSuccessContent() {
  const params = useSearchParams();
  const [order, setOrder] = useState<SavedOrder | null>(null);
  const fallbackId = params.get("order") ?? "RMH-10024";

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("romeah-last-order");
      if (raw) setOrder(JSON.parse(raw) as SavedOrder);
    } catch {
      /* ignore */
    }
  }, []);

  const orderId = order?.orderId ?? fallbackId;

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <p className="text-xs tracking-[0.2em] mb-4">ROMEAH</p>
        <h1 className="font-serif text-5xl mb-6">Thank you</h1>
        <p className="text-black/60 leading-7 mb-4">
          Your Romeah order has been confirmed
          {order ? ` for $${order.subtotal}` : ""}.
        </p>
        <p className="text-sm tracking-[0.12em] text-black/45 mb-10">
          ORDER #{orderId}
        </p>
        {order?.items?.length ? (
          <ul className="text-left text-sm text-black/65 space-y-2 mb-10 border-t border-black/10 pt-6">
            {order.items.map((item) => (
              <li key={`${item.name}-${item.color}`} className="flex justify-between gap-4">
                <span>
                  {item.name}
                  {item.color ? ` · ${item.color}` : ""} × {item.quantity}
                </span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="flex flex-wrap justify-center gap-6 text-xs tracking-[0.14em]">
          <Link href="/orders/track" className="border-b border-black pb-1">
            TRACK ORDER
          </Link>
          <Link href="/handbags" className="border-b border-black pb-1">
            CONTINUE SHOPPING
          </Link>
        </div>
        <p className="text-xs text-black/40 mt-10 leading-6">
          Demo checkout only — Stripe is intentionally deferred.
        </p>
      </div>
    </main>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-[70vh] flex items-center justify-center">
          Confirming…
        </main>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}
