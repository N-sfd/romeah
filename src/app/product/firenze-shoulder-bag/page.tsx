import Image from "next/image";
import Footer from "@/components/Footer";
import AddToBagPanel from "@/components/AddToBagPanel";
import ProductReviews from "@/components/ProductReviews";
import {
  Recommendations,
  RecentlyViewedRail,
} from "@/components/ProductDiscovery";
import TrackProductView from "@/components/TrackProductView";
import { getProductBySlug } from "@/data/products";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Firenze Shoulder Bag — Romeah",
  description:
    "A refined everyday shoulder bag crafted with a softly structured silhouette and timeless proportions.",
};

const gallery = [
  {
    src: "/images/handbags/firenze-burgundy-front.jpg",
    alt: "Romeah Firenze burgundy leather shoulder bag front view",
  },
  {
    src: "/images/handbags/firenze-burgundy-side.jpg",
    alt: "Romeah Firenze burgundy shoulder bag side silhouette",
  },
  {
    src: "/images/handbags/firenze-burgundy-back.jpg",
    alt: "Romeah Firenze burgundy shoulder bag back view",
  },
  {
    src: "/images/handbags/firenze-burgundy-interior.jpg",
    alt: "Romeah Firenze burgundy bag interior and lining",
  },
  {
    src: "/images/handbags/firenze-burgundy-detail.jpg",
    alt: "Romeah Firenze bag champagne-gold hardware and leather detail",
  },
  {
    src: "/images/handbags/firenze-burgundy-model.jpg",
    alt: "Woman wearing Romeah Firenze burgundy shoulder bag with cream and black styling",
  },
];

export default function FirenzeBagPage() {
  const product = getProductBySlug("firenze-shoulder-bag");
  if (!product) notFound();

  return (
    <main>
      <TrackProductView productId={product.id} />
      <section className="grid lg:grid-cols-[1.6fr_0.8fr]">
        <div className="grid grid-cols-2 gap-[2px] bg-[#FAF9F6]">
          {gallery.map((shot) => (
            <div key={shot.src} className="relative aspect-[4/5] bg-[#F7F3EE]">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 40vw"
                className="object-cover"
                priority={shot.src.includes("front")}
              />
            </div>
          ))}
        </div>

        <div className="px-8 lg:px-14 py-16 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <p className="text-xs tracking-[0.18em] text-black/50">ROMEAH</p>
          <h1 className="font-serif text-4xl mt-4">{product.name}</h1>
          <p className="mt-4">${product.price}</p>

          <AddToBagPanel product={product} />

          <p className="leading-7 text-black/65 mt-10">
            A refined everyday shoulder bag crafted with a softly structured
            silhouette and timeless proportions. Designed to transition
            effortlessly from day to evening.
          </p>

          <div className="border-t mt-10">
            <details className="py-5 border-b">
              <summary className="cursor-pointer text-xs tracking-[0.12em]">
                DETAILS & MATERIALS
              </summary>
              <div className="pt-4 text-sm text-black/60 leading-7">
                Premium leather exterior.
                <br />
                Suede-effect interior.
                <br />
                Champagne-gold hardware.
                <br />
                Adjustable shoulder strap.
              </div>
            </details>

            <details className="py-5 border-b">
              <summary className="cursor-pointer text-xs tracking-[0.12em]">
                DIMENSIONS
              </summary>
              <div className="pt-4 text-sm text-black/60 leading-7">
                Width: 28 cm
                <br />
                Height: 19 cm
                <br />
                Depth: 9 cm
              </div>
            </details>

            <details className="py-5 border-b">
              <summary className="cursor-pointer text-xs tracking-[0.12em]">
                WHAT FITS INSIDE
              </summary>
              <div className="pt-4 text-sm text-black/60 leading-7">
                Smartphone
                <br />
                Small wallet
                <br />
                Sunglasses
                <br />
                Keys
                <br />
                Small cosmetics case
              </div>
            </details>

            <details className="py-5 border-b">
              <summary className="cursor-pointer text-xs tracking-[0.12em]">
                DELIVERY & RETURNS
              </summary>
              <div className="pt-4 text-sm text-black/60">
                Unworn items may be returned within 14 days. See{" "}
                <a href="/returns" className="underline">
                  Returns
                </a>
                .
              </div>
            </details>
          </div>
        </div>
      </section>

      <ProductReviews productId={product.id} />
      <Recommendations productId={product.id} category={product.category} />
      <RecentlyViewedRail excludeId={product.id} />
      <Footer />
    </main>
  );
}
