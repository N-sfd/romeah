import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import Footer from "@/components/Footer";
import { collections } from "@/data/editorial";

export const metadata = {
  title: "Collections — Romeah",
  description:
    "Explore Romeah collections — La Notte, Verde, Milano and Dolce Vita.",
};

export default function CollectionsPage() {
  return (
    <main>
      <section className="bg-[#FCFBF9] py-20 text-center px-6 border-b border-black/10">
        <p className="text-xs tracking-[0.2em] mb-4">ROMEAH</p>
        <h1 className="font-serif text-5xl">Collections</h1>
        <p className="max-w-xl mx-auto mt-5 text-black/60 leading-7">
          Curated worlds within Romeah — evening, green daylight, city
          structure, and summer ease.
        </p>
      </section>

      <section className="max-w-[1500px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-8">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={`/collections/${collection.slug}`}
            className="group block"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F3EE]">
              <CoverImage
                src={collection.image}
                alt={`${collection.title} collection hero — Romeah`}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <p className="text-xs tracking-[0.18em] text-black/45 mt-5">
              {collection.eyebrow}
            </p>
            <h2 className="font-serif text-3xl mt-2">{collection.title}</h2>
            <p className="text-sm text-black/60 mt-3 max-w-md leading-6">
              {collection.description}
            </p>
          </Link>
        ))}
      </section>

      <Footer />
    </main>
  );
}
