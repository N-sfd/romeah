import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { looks, productsByIds } from "@/data/editorial";

export const metadata = {
  title: "Shop the Look — Romeah",
  description: "Complete Romeah looks styled for day, evening, and travel.",
};

export default function ShopTheLookPage() {
  return (
    <main>
      <section className="bg-[#F7F3EE] py-20 text-center px-6">
        <p className="text-xs tracking-[0.2em] mb-4">STYLED BY ROMEAH</p>
        <h1 className="font-serif text-5xl md:text-6xl">Shop the Look</h1>
        <p className="max-w-xl mx-auto mt-5 text-black/60 leading-7">
          Complete edits — clothing, bags, shoes and jewelry composed to move
          through the day with ease.
        </p>
      </section>

      <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-20 space-y-28">
        {looks.map((look) => {
          const items = productsByIds(look.productIds);
          return (
            <section key={look.id} id={look.slug}>
              <div className="grid lg:grid-cols-2 gap-10 mb-12">
                <div className="relative min-h-[520px] bg-[#F7F3EE] aspect-[3/4] lg:aspect-auto">
                  <CoverImage
                    src={look.image}
                    alt={`${look.title} — Romeah Shop the Look full-body styling`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs tracking-[0.2em] mb-4 text-black/50">
                    LOOK
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl mb-4">
                    {look.title}
                  </h2>
                  <p className="text-black/65 leading-7 max-w-md mb-8">
                    {look.subtitle}
                  </p>
                  <Link
                    href={`#${look.slug}-products`}
                    className="text-xs tracking-[0.15em] border-b border-black pb-1 self-start"
                  >
                    SHOP THIS LOOK
                  </Link>
                </div>
              </div>

              <div id={`${look.slug}-products`}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {items.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <Footer />
    </main>
  );
}
