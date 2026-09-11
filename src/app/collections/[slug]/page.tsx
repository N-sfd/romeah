import Link from "next/link";
import { notFound } from "next/navigation";
import CoverImage from "@/components/CoverImage";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import {
  collections,
  getCollectionBySlug,
  productsByIds,
} from "@/data/editorial";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  return {
    title: collection
      ? `${collection.title} — Romeah`
      : "Collection — Romeah",
  };
}

export default async function CollectionDetailPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();
  const items = productsByIds(collection.productIds);

  return (
    <main>
      <section className="grid lg:grid-cols-2 bg-[#F3ECE7]">
        <div className="relative min-h-[520px]">
          <CoverImage
            src={collection.image}
            alt={`${collection.title} — Romeah collection`}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-center px-10 lg:px-20 py-20">
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.25em] mb-6">
              {collection.eyebrow}
            </p>
            <h1 className="font-serif text-5xl mb-6">{collection.title}</h1>
            <p className="leading-7 text-black/65 mb-8">
              {collection.description}
            </p>
            <Link
              href="/collections"
              className="text-xs tracking-[0.15em] border-b border-black pb-1"
            >
              ALL COLLECTIONS
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1500px] mx-auto px-6 md:px-10 py-20">
        <p className="text-sm mb-10">{items.length} PRODUCTS</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
