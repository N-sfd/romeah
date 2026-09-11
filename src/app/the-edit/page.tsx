import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { collections, productsByIds } from "@/data/editorial";

export const metadata = {
  title: "The Romeah Edit — Quiet Luxury",
  description:
    "Editorial stories and curated pieces from the Romeah studio.",
};

export default function TheEditPage() {
  const featured = collections.find((c) => c.slug === "dolce-vita");
  const items = productsByIds(featured?.productIds ?? [1, 3, 7, 11]);

  return (
    <main>
      <section className="relative min-h-[70vh]">
        <CoverImage
          src="/images/editorial/quiet-luxury.jpg"
          alt="The Romeah Edit — feminine quiet-luxury editorial photography"
          priority
          className="object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative min-h-[70vh] flex items-end px-10 lg:px-20 pb-20 text-white">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.25em] mb-5">THE ROMEAH EDIT</p>
            <h1 className="font-serif text-5xl md:text-7xl mb-5">
              Quiet Luxury
            </h1>
            <p className="text-lg text-white/85 leading-8 max-w-xl">
              Stories, silhouettes and studio notes — a slower way to discover
              Romeah.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-6 py-24 text-center">
        <p className="text-xs tracking-[0.2em] mb-6">JOURNAL</p>
        <h2 className="font-serif text-4xl mb-6">Form follows feeling</h2>
        <p className="leading-8 text-black/65">
          Each season begins with proportion and ease — how a single bag or
          dress can redefine a wardrobe without raising its voice. The Edit
          gathers those pieces and the ideas behind them.
        </p>
      </section>

      <section className="max-w-[1500px] mx-auto px-6 md:px-10 pb-24">
        <div className="flex justify-between items-end mb-10">
          <h2 className="font-serif text-3xl">From the Edit</h2>
          <Link
            href="/collections/dolce-vita"
            className="text-xs tracking-[0.15em] border-b border-black pb-1"
          >
            VIEW COLLECTION
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-3 border-t border-black/10">
        {collections.slice(0, 3).map((c) => (
          <Link
            key={c.id}
            href={`/collections/${c.slug}`}
            className="p-10 border-b md:border-b-0 md:border-r border-black/10 last:border-r-0 hover:bg-[#F7F3EE] transition-colors"
          >
            <p className="text-xs tracking-[0.16em] text-black/45 mb-3">
              {c.eyebrow}
            </p>
            <h3 className="font-serif text-2xl mb-3">{c.title}</h3>
            <p className="text-sm text-black/60 leading-6">{c.description}</p>
          </Link>
        ))}
      </section>

      <Footer />
    </main>
  );
}
