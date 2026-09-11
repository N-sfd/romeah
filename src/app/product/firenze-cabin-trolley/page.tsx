import Image from "next/image";
import Footer from "@/components/Footer";
import AddToBagPanel from "@/components/AddToBagPanel";
import { getProductBySlug } from "@/data/products";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Firenze Cabin Trolley — Romeah Travel",
};

export default function FirenzeCabinTrolleyPage() {
  const product = getProductBySlug("firenze-cabin-trolley");
  if (!product) notFound();

  const shots = [
    {
      src: product.image,
      alt: product.imageAlt ?? product.name,
      span: true,
    },
    {
      src: "/images/travel/luggage-detail.jpg",
      alt: "Romeah Firenze cabin trolley leather and hardware detail",
    },
    {
      src: "/images/travel/florence-weekend.jpg",
      alt: "Woman traveling with Romeah luggage through an Italian city",
    },
  ];

  return (
    <main>
      <section className="grid lg:grid-cols-[1.4fr_0.9fr]">
        <div className="grid grid-cols-2 gap-[2px]">
          {shots.map((shot) => (
            <div
              key={shot.src}
              className={`relative aspect-[4/5] bg-[#FAF9F6] ${
                shot.span ? "col-span-2" : ""
              }`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes={shot.span ? "(max-width: 1024px) 100vw, 55vw" : "30vw"}
                className="object-cover"
                priority={Boolean(shot.span)}
              />
            </div>
          ))}
        </div>

        <div className="px-8 lg:px-14 py-16 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <p className="text-xs tracking-[0.18em] text-black/50">ROMEAH TRAVEL</p>
          <h1 className="font-serif text-4xl mt-4">{product.name}</h1>
          <p className="mt-4">${product.price}</p>
          <p className="mt-3 text-sm text-black/55">
            Cabin Size · {product.capacity} · {product.weight}
          </p>

          <AddToBagPanel
            product={product}
            colors={[
              { name: "Black", swatch: "#111111" },
              { name: "Ivory", swatch: "#E8DFD2" },
              { name: "Olive", swatch: "#5C6B4A" },
            ]}
          />

          <p className="leading-7 text-black/65 mt-10">{product.description}</p>

          <div className="mt-10">
            <p className="text-xs tracking-[0.14em] mb-4">IDEAL FOR</p>
            <div className="flex flex-wrap gap-3">
              {product.idealFor?.map((item) => (
                <span
                  key={item}
                  className="text-xs tracking-[0.1em] border border-black/15 px-3 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t mt-10 text-sm text-black/65 leading-7">
            <details className="py-5 border-b">
              <summary className="cursor-pointer text-xs tracking-[0.12em] text-black">
                SPECIFICATIONS
              </summary>
              <div className="pt-4">
                Dimensions: 55 × 35 × 23 cm
                <br />
                Weight: {product.weight}
                <br />
                Capacity: {product.capacity}
                <br />
                Shell: Hard polycarbonate
                <br />
                Wheels: Dual spinner
                <br />
                Handle: Telescopic aluminum
                <br />
                Lock: TSA-approved
                <br />
                Expandable: Yes
                <br />
                Warranty: 5 years
                <br />
                Airline compatibility: Most major carriers cabin size
              </div>
            </details>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
