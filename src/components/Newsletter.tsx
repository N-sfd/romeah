"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <section className="border-t border-black/10 bg-[#FCFBF9] py-24 px-6 md:px-10">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.25em] mb-5">ROMEAH JOURNAL</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-5">Stay close</h2>
        <p className="text-black/60 leading-7 mb-10">
          New arrivals, travel notes and quiet launches — once a month.
        </p>

        {done ? (
          <p className="font-serif text-2xl text-black/70">
            Thank you — you&apos;re on the list.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row gap-3 sm:gap-0 border-b border-black/20 pb-3"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 bg-transparent outline-none px-1 py-3 text-sm"
            />
            <button
              type="submit"
              className="text-xs tracking-[0.16em] px-2 py-3 sm:self-end"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
