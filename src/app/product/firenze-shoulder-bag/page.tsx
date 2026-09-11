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

/**
 * Visual benchmark gallery: every studio frame uses the same canonical bag
 * photograph with intentional crops so silhouette, leather, and hardware stay
 * consistent until dedicated multi-angle studio assets replace these files.
 */
const CANONICAL = "/images/handbags/firenze-burgundy-front.jpg";

const gallery = [
  {
    src: CANONICAL,
    alt: "Romeah Firenze burgundy leather shoulder bag — front view",
    position: "object-center",
    label: "Front",
  },
  {
    src: CANONICAL,
    alt: "Romeah Firenze burgundy shoulder bag — side silhouette crop",
    position: "object-left",
    label: "Side",
  },
  {
    src: CANONICAL,
    alt: "Romeah Firenze burgundy shoulder bag — reverse / back crop",
    position: "object-right",
    label: "Back",
  },
  {
    src: CANONICAL,
    alt: "Romeah Firenze burgundy bag — interior opening crop",
    position: "object-[center_70%]",
    label: "Interior",
  },
  {
    src: CANONICAL,
    alt: "Romeah Firenze bag — leather grain and champagne-gold hardware detail",
    position: "object-[70%_40%] scale-150",
    label: "Detail",
  },
  {
    src: "/images/handbags/firenze-burgundy-model.jpg",
    alt: "Woman wearing Romeah Firenze burgundy shoulder bag — scale reference",
    position: "object-cover object-top",
    label: "Model",
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
            <div
              key={shot.label}
              className="relative aspect-[4/5] bg-[#F7F3EE] overflow-hidden"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 40vw"
                className={`object-cover ${shot.position}`}
                priority={shot.label === "Front"}
              />
              <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.16em] bg-white/90 px-2 py-1">
                {shot.label.toUpperCase()}
              </span>
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
            silhouette and timeless proportions. Deep burgundy leather with
            understated champagne-gold hardware — the same bag across every
            studio frame.
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
