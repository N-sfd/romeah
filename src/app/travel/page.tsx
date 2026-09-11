import Image from "next/image";
import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import Footer from "@/components/Footer";
import { TravelProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";

export const metadata = {
  title: "Romeah Travel — The Art of Arrival",
};

const travelCategories = [
  "Carry-On",
  "Checked Luggage",
  "Weekend Bags",
  "Travel Totes",
  "Beauty Cases",
  "Travel Accessories",
];

export default function TravelPage() {
  const travelProducts = getProductsByCategory("Travel");

  return (
    <main>
      <section className="relative min-h-[80vh] flex items-end">
        <CoverImage
          src="/images/travel/travel-main.jpg"
          alt="Romeah travel — Italian city arrival light for The Art of Arrival"
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
            href="#collection"
            className="inline-block bg-white text-black px-8 py-4 text-xs tracking-[0.15em]"
          >
            EXPLORE THE COLLECTION
          </Link>
        </div>
      </section>

      <section className="border-y border-black/10 overflow-x-auto">
        <div className="flex justify-center min-w-max gap-10 px-8 py-6 text-xs tracking-[0.14em]">
          {travelCategories.map((item) => (
            <button key={item} type="button">
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      <section id="collection" className="max-w-[1500px] mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] mb-4">LUGGAGE</p>
          <h2 className="font-serif text-5xl">Travel Companions</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {travelProducts.map((product) => (
            <TravelProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 bg-[#241F1C] text-white">
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
            src: "/images/travel/airport-editorial.jpg",
            alt: "Refined airport terminal mood for Romeah cabin travel",
            label: "Cabin Travel",
          },
          {
            src: "/images/travel/cabin-luggage.jpg",
            alt: "Romeah cream cabin luggage product detail",
            label: "Cabin Luggage",
          },
          {
            src: "/images/travel/luggage-detail.jpg",
            alt: "Romeah luggage leather and hardware detail",
            label: "Craft Detail",
          },
        ].map((item) => (
          <div key={item.label} className="relative aspect-[4/5] bg-[#FAF9F6]">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <p className="absolute bottom-4 left-4 text-xs tracking-[0.16em] bg-white/90 px-3 py-2">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
