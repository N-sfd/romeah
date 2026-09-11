import Image from "next/image";
import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import Footer from "@/components/Footer";
import { TravelProductCard } from "@/components/ProductCard";
import { getProductsByCategory, type Product } from "@/data/products";

export const metadata = {
  title: "Romeah Travel — The Art of Arrival",
};

const travelSections: {
  id: string;
  title: string;
  eyebrow: string;
  copy: string;
  match: (p: Product) => boolean;
}[] = [
  {
    id: "carry-on",
    title: "Carry-On",
    eyebrow: "CABIN",
    copy: "Light cases sized for the overhead — polished enough for the lobby.",
    match: (p) =>
      (p.subcategory ?? "").toLowerCase().includes("carry") ||
      p.slug.includes("cabin"),
  },
  {
    id: "weekend",
    title: "Weekend",
    eyebrow: "SHORT ESCAPES",
    copy: "Soft structure for two or three days away — train platforms to late dinners.",
    match: (p) => (p.subcategory ?? "").toLowerCase().includes("weekend"),
  },
  {
    id: "long-haul",
    title: "Long-Haul",
    eyebrow: "EXTENDED JOURNEYS",
    copy: "Expanded capacity with quiet hardware — for the week that begins in Milan.",
    match: (p) => (p.subcategory ?? "").toLowerCase().includes("long"),
  },
  {
    id: "accessories",
    title: "Travel Accessories",
    eyebrow: "THE FINISH",
    copy: "Pouches and companions that keep the case composed.",
    match: (p) =>
      (p.subcategory ?? "").toLowerCase().includes("accessor") ||
      (p.subcategory ?? "").toLowerCase().includes("pouch") ||
      p.slug.includes("pouch"),
  },
];

export default function TravelPage() {
  const travelProducts = getProductsByCategory("Travel");

  return (
    <main>
      <section className="relative min-h-[80vh] flex items-end">
        <CoverImage
          src="/images/travel/travel-main.jpg"
          alt="Romeah travel — refined departure mood for The Art of Arrival"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative px-10 lg:px-20 pb-20 text-white max-w-3xl">
          <p className="text-xs tracking-[0.28em] mb-5">ROMEAH TRAVEL</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            The Art of Arrival
          </h1>
          <p className="text-lg text-white/85 mb-10 max-w-xl leading-8">
            Objects created for journeys, designed to belong wherever you go.
          </p>
          <Link
            href="#carry-on"
            className="inline-block bg-white text-black px-8 py-4 text-xs tracking-[0.15em]"
          >
            EXPLORE THE COLLECTION
          </Link>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#FCFBF9]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {travelSections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="group border border-black/10 p-6 hover:bg-[#F7F3EE] transition-colors"
            >
              <p className="text-[10px] tracking-[0.18em] text-black/45 mb-3">
                {section.eyebrow}
              </p>
              <h2 className="font-serif text-2xl mb-2 group-hover:opacity-80">
                {section.title}
              </h2>
              <p className="text-sm text-black/55 leading-6">{section.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      {travelSections.map((section) => {
        const items = travelProducts.filter(section.match);
        if (items.length === 0) return null;
        return (
          <section
            key={section.id}
            id={section.id}
            className="max-w-[1500px] mx-auto px-8 py-20 border-b border-black/10 scroll-mt-28"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <p className="text-xs tracking-[0.2em] mb-3 text-black/45">
                  {section.eyebrow}
                </p>
                <h2 className="font-serif text-4xl md:text-5xl">
                  {section.title}
                </h2>
              </div>
              <p className="max-w-md text-black/60 leading-7">{section.copy}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
              {items.map((product) => (
                <TravelProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}

      <section
        id="florence"
        className="grid lg:grid-cols-2 bg-[#241F1C] text-white scroll-mt-28"
      >
        <div className="relative min-h-[620px]">
          <CoverImage
            src="/images/travel/florence-weekend.jpg"
            alt="72 Hours in Florence — European weekend journey with Romeah travel"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-center px-10 lg:px-20 py-20">
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.25em] mb-6 text-white/55">
              EDITORIAL
            </p>
            <h2 className="font-serif text-5xl mb-6">72 Hours in Florence</h2>
            <p className="leading-8 text-white/65 mb-8">
              A considered wardrobe. One perfectly packed case. Cream luggage,
              a burgundy bag, and evenings that begin at dusk.
            </p>
            <Link
              href="/product/firenze-cabin-trolley"
              className="border-b border-white pb-2 text-xs tracking-[0.15em]"
            >
              SHOP THE STORY
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1500px] mx-auto px-8 py-20 grid md:grid-cols-3 gap-6">
        {[
          {
            src: "/images/travel/cabin-luggage.jpg",
            alt: "Romeah cream cabin luggage product detail",
            label: "Carry-On",
            href: "#carry-on",
          },
          {
            src: "/images/travel/luggage-detail.jpg",
            alt: "Romeah luggage leather and hardware detail",
            label: "Accessories",
            href: "#accessories",
          },
          {
            src: "/images/travel/florence-weekend.jpg",
            alt: "Italian city light for Romeah long weekends",
            label: "Weekend",
            href: "#weekend",
          },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="relative aspect-[4/5] bg-[#FAF9F6] block group"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <p className="absolute bottom-4 left-4 text-xs tracking-[0.16em] bg-white/90 px-3 py-2">
              {item.label}
            </p>
          </Link>
        ))}
      </section>

      <Footer />
    </main>
  );
}
