import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import { RecentlyViewedRail } from "@/components/ProductDiscovery";
import { homepageCms, productsByIds } from "@/data/editorial";

export default function Home() {
  return (
    <main>
      {homepageCms.map((block) => {
        if (block.type === "hero") {
          return (
            <section
              key="hero"
              className="relative h-[82vh] min-h-[650px] overflow-hidden"
            >
              <CoverImage
                src={block.image}
                alt={block.imageAlt}
                priority
                className="object-cover object-[center_22%]"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-white text-center px-6">
                <p className="text-xs tracking-[0.3em] mb-5">{block.eyebrow}</p>
                <h1 className="font-serif text-5xl md:text-7xl mb-5">
                  {block.title}
                </h1>
                <p className="max-w-xl text-lg mb-8">{block.body}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href={block.ctaPrimary.href}
                    className="bg-white text-[#1a1816] px-8 py-4 text-xs tracking-[0.16em]"
                  >
                    {block.ctaPrimary.label}
                  </Link>
                  <Link
                    href={block.ctaSecondary.href}
                    className="border border-white px-8 py-4 text-xs tracking-[0.16em]"
                  >
                    {block.ctaSecondary.label}
                  </Link>
                </div>
              </div>
            </section>
          );
        }

        if (block.type === "product-row") {
          const items = productsByIds(block.productIds);
          return (
            <section
              key={block.id}
              id={block.id}
              className={`max-w-[1500px] mx-auto px-6 md:px-10 py-24 ${
                block.id === "bags" ? "text-center" : ""
              }`}
            >
              <div
                className={`flex justify-between items-end mb-10 ${
                  block.id === "bags" ? "flex-col items-center gap-4" : ""
                }`}
              >
                <div>
                  <p className="text-xs tracking-[0.2em] mb-3">
                    {block.eyebrow}
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl">
                    {block.title}
                  </h2>
                </div>
                <Link
                  href={block.href}
                  className="text-xs tracking-[0.15em] border-b border-black pb-1"
                >
                  VIEW ALL
                </Link>
              </div>
              <div
                className={`grid grid-cols-2 gap-6 text-left ${
                  items.length <= 2
                    ? "lg:grid-cols-2 max-w-3xl mx-auto"
                    : "lg:grid-cols-4"
                }`}
              >
                {items.map((product) => (
                  <ProductCard key={`${block.id}-${product.id}`} product={product} />
                ))}
              </div>
            </section>
          );
        }

        if (block.type === "campaign") {
          return (
            <section
              key={block.id}
              id={block.id}
              className="relative h-[75vh] min-h-[600px]"
            >
              <CoverImage
                src={block.image}
                alt={block.imageAlt}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="relative h-full flex items-end px-10 lg:px-20 pb-20 text-white">
                <div>
                  <p className="text-xs tracking-[0.25em] mb-5">
                    {block.eyebrow}
                  </p>
                  <h2 className="font-serif text-6xl mb-5">{block.title}</h2>
                  <p className="text-lg mb-8">{block.body}</p>
                  <Link
                    href={block.href}
                    className="inline-block bg-white text-[#1a1816] px-8 py-4 text-xs tracking-[0.15em]"
                  >
                    {block.cta}
                  </Link>
                </div>
              </div>
            </section>
          );
        }

        const warm = block.tone === "warm";
        const dark = block.tone === "dark";
        const imageLeft = block.id !== "shop-the-look";

        return (
          <section
            key={block.id}
            id={block.id}
            className={`grid lg:grid-cols-2 ${
              warm
                ? "bg-[#F3ECE7]"
                : dark
                  ? "bg-[#241F1C] text-white"
                  : "bg-[#FCFBF9]"
            }`}
          >
            <div
              className={`relative min-h-[620px] ${
                imageLeft ? "" : "order-1 lg:order-2"
              }`}
            >
              <CoverImage
                src={block.image}
                alt={block.imageAlt}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div
              className={`flex items-center px-10 lg:px-20 py-20 ${
                imageLeft ? "" : "order-2 lg:order-1"
              }`}
            >
              <div className="max-w-lg">
                <p
                  className={`text-xs tracking-[0.25em] mb-6 ${
                    dark ? "text-white/55" : ""
                  }`}
                >
                  {block.eyebrow}
                </p>
                <h2 className="font-serif text-5xl mb-6">{block.title}</h2>
                <p
                  className={`leading-7 mb-8 ${
                    dark ? "text-white/65" : "text-black/65"
                  }`}
                >
                  {block.body}
                </p>
                <Link
                  href={block.href}
                  className={`border-b pb-2 text-xs tracking-[0.15em] ${
                    dark ? "border-white" : "border-black"
                  }`}
                >
                  {block.cta}
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <RecentlyViewedRail />
      <Newsletter />
      <Footer />
    </main>
  );
}
