"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import Footer from "@/components/Footer";
import { findOrder, type MockOrder } from "@/data/editorial";

export default function OrderTrackPage() {
  const [query, setQuery] = useState("RMH-10024");
  const [order, setOrder] = useState<MockOrder | null>(null);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = findOrder(query);
    if (!found) {
      setOrder(null);
      setError("We couldn’t find that order. Try RMH-10024.");
      return;
    }
    setError("");
    setOrder(found);
  }

  return (
    <main>
      <section className="bg-[#FCFBF9] py-20 text-center px-6 border-b border-black/10">
        <p className="text-xs tracking-[0.2em] mb-4">ORDERS</p>
        <h1 className="font-serif text-5xl">Track your order</h1>
        <p className="max-w-xl mx-auto mt-5 text-black/60 leading-7">
          Enter your order number, tracking number, or email.
        </p>
      </section>

      <section className="max-w-[720px] mx-auto px-6 py-16">
        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="RMH-10024"
            className="flex-1 border-b border-black/20 bg-transparent outline-none py-3"
          />
          <button
            type="submit"
            className="bg-[#241F1C] text-white px-8 py-4 text-xs tracking-[0.14em]"
          >
            TRACK
          </button>
        </form>
        {error && <p className="text-sm text-black/60 mb-8">{error}</p>}

        {order && (
          <div className="border border-black/10 p-8">
            <div className="flex flex-wrap justify-between gap-4 mb-8">
              <div>
                <p className="text-xs tracking-[0.14em] text-black/45">ORDER</p>
                <p className="font-serif text-3xl mt-1">{order.id}</p>
              </div>
              <div className="text-right">
                <p className="text-xs tracking-[0.14em] text-black/45">STATUS</p>
                <p className="mt-1 text-sm uppercase tracking-[0.12em]">
                  {order.status.replaceAll("_", " ")}
                </p>
              </div>
            </div>

            <p className="text-sm text-black/60 mb-2">
              Tracking {order.trackingNumber}
            </p>
            <p className="text-sm text-black/60 mb-10">
              Estimated delivery {order.eta}
            </p>

            <ol className="space-y-4 mb-12">
              {order.steps.map((step) => (
                <li key={step.label} className="flex gap-4 items-start">
                  <span
                    className={`mt-1 w-2.5 h-2.5 rounded-full ${
                      step.done ? "bg-[#241F1C]" : "bg-black/15"
                    }`}
                  />
                  <div>
                    <p className={step.done ? "" : "text-black/40"}>
                      {step.label}
                    </p>
                    {step.at && (
                      <p className="text-xs text-black/45 mt-1">{step.at}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            {order.items.map((item) => (
              <div key={item.name} className="flex gap-4 items-center">
                <div className="relative w-20 h-24 bg-[#F7F3EE] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-xl">{item.name}</p>
                  <p className="text-sm text-black/55 mt-1">
                    Qty {item.qty} · ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
