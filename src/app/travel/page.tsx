import Image from "next/image";
import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import Footer from "@/components/Footer";
import { TravelProductCard } from "@/components/ProductCard";
import { getProductsByCategory, type Product } from "@/data/products";

export const metadata = {
  title: "Romeah Travel — The Art of Arrival",
};

const categoryCards = [
  {
    id: "carry-on",
    title: "Carry-On",
    image: "/images/travel/cabin-luggage.jpg",
    alt: "Romeah cabin carry-on luggage",
  },
  {
    id: "weekend",
    title: "Weekend Bags",
    image: "/images/travel/luggage-detail.jpg",
    alt: "Romeah weekend bag leather detail",
  },
  {
    id: "long-haul",
    title: "Checked Luggage",
    image: "/images/travel/cabin-luggage.jpg",
    alt: "Romeah checked luggage for long-haul",
  },
  {
    id: "totes",
    title: "Travel Totes",
    image: "/images/handbags/como-olive-front.jpg",
    alt: "Romeah travel tote",
    href: "/handbags",
  },
  {
    id: "accessories",
    title: "Beauty Cases",
    image: "/images/travel/luggage-detail.jpg",
    alt: "Romeah beauty case accessories",
  },
  {
    id: "accessories",
    title: "Travel Accessories",
    image: "/images/travel/airport-editorial.jpg",
    alt: "Romeah travel accessories editorial",
  },
];

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
    title: "Weekend Bags",
    eyebrow: "SHORT ESCAPES",
    copy: "Soft structure for two or three days away — train platforms to late dinners.",
    match: (p) => (p.subcategory ?? "").toLowerCase().includes("weekend"),
  },
  {
    id: "long-haul",
    title: "Checked Luggage",
    eyebrow: "EXTENDED JOURNEYS",
    copy: "Expanded capacity with quiet hardware — for the week that begins in Milan.",
    match: (p) => (p.subcategory ?? "").toLowerCase().includes("long"),
  },
  {
    id: "accessories",
    title: "Travel Accessories",
    eyebrow: "THE FINISH",
    copy: "Pouches, beauty cases, and companions that keep the case composed.",
    match: (p) =>
      (p.subcategory ?? "").toLowerCase().includes("accessor") ||
      (p.subcategory ?? "").toLowerCase().includes("pouch") ||
      p.slug.includes("pouch"),
  },
];

const sizeGuide = [
  {
    title: "Cabin",
    duration: "2–3 days",
    detail: "Overhead-ready · ~35 L · spinner wheels · TSA lock",
  },
  {
    title: "Medium",
    duration: "5–7 days",
    detail: "Checked comfort · ~55–70 L · dual spinner · TSA lock",
  },
  {
    title: "Large",
    duration: "7–14 days",
    detail: "Extended capacity · 70 L+ · reinforced shell · TSA lock",
  },
];

export default function TravelPage() {
  const travelProducts = getProductsByCategory("Travel");
  const florencePicks = travelProducts.filter((p) =>
    [5, 6, 14].includes(p.id),
  );
  const weekendPicks = travelProducts.filter((p) => [6, 5, 14].includes(p.id));

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
        <div className="relative px-6 md:px-10 lg:px-20 pb-20 text-white max-w-3xl">
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

      <section className="max-w-[1500px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categoryCards.map((card) => (
            <Link
              key={`${card.title}-${card.id}`}
              href={card.href ?? `#${card.id}`}
              className="group relative aspect-[4/5] bg-[#F7F3EE] overflow-hidden"
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-xs tracking-[0.16em]">
                {card.title.toUpperCase()}
              </p>
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
            className="max-w-[1500px] mx-auto px-6 md:px-10 py-20 border-b border-black/10 scroll-mt-28"
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
        <div className="relative min-h-[520px] lg:min-h-[620px]">
          <CoverImage
            src="/images/travel/florence-weekend.jpg"
            alt="72 Hours in Florence — European weekend journey with Romeah travel"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-center px-6 md:px-10 lg:px-20 py-16 lg:py-20">
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.25em] mb-6 text-white/55">
              EDITORIAL
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              72 Hours in Florence
            </h2>
            <p className="leading-8 text-white/65 mb-8">
              A considered wardrobe. One perfectly packed case. Cream luggage,
              a burgundy bag, and evenings that begin at dusk.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-10">
              {florencePicks.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className="relative aspect-[3/4] bg-white/5 overflow-hidden"
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt ?? product.name}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </Link>
              ))}
            </div>
            <Link
              href="/product/firenze-cabin-trolley"
              className="border-b border-white pb-2 text-xs tracking-[0.15em]"
            >
              SHOP THE STORY
            </Link>
          </div>
        </div>
      </section>

      <section
        id="weekend-escape"
        className="grid lg:grid-cols-2 bg-[#F3ECE7] scroll-mt-28"
      >
        <div className="order-2 lg:order-1 flex items-center px-6 md:px-10 lg:px-20 py-16 lg:py-20">
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.25em] mb-6 text-black/45">
              EDITORIAL
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              The Weekend Escape
            </h2>
            <p className="leading-8 text-black/65 mb-8">
              Soft bags for short departures — a train at dusk, a villa by
              morning, and everything that matters within reach.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-10">
              {weekendPicks.map((product) => (
                <Link
                  key={`weekend-${product.id}`}
                  href={`/product/${product.slug}`}
                  className="relative aspect-[3/4] bg-[#FAF9F6] overflow-hidden"
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt ?? product.name}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </Link>
              ))}
            </div>
            <Link
              href="#weekend"
              className="border-b border-black pb-2 text-xs tracking-[0.15em]"
            >
              SHOP WEEKEND BAGS
            </Link>
          </div>
        </div>
        <div className="relative min-h-[520px] order-1 lg:order-2">
          <CoverImage
            src="/images/travel/airport-editorial.jpg"
            alt="The Weekend Escape — refined short-journey atmosphere"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <section
        id="find-your-size"
        className="max-w-[1500px] mx-auto px-6 md:px-10 py-20 scroll-mt-28"
      >
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] mb-4 text-black/45">
            LUGGAGE GUIDE
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">Find Your Size</h2>
          <p className="max-w-xl mx-auto mt-5 text-black/60 leading-7">
            Cabin size, volume, weight, shell, wheels, and TSA lock — choose by
            how long you are away.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {sizeGuide.map((size) => (
            <div
              key={size.title}
              className="border border-black/10 px-8 py-10 text-center bg-[#FCFBF9]"
            >
              <h3 className="font-serif text-3xl mb-3">{size.title}</h3>
              <p className="text-xs tracking-[0.16em] mb-5">{size.duration}</p>
              <p className="text-sm text-black/55 leading-7">{size.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
