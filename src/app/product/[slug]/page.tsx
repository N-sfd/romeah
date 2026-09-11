import Image from "next/image";
import Footer from "@/components/Footer";
import AddToBagPanel from "@/components/AddToBagPanel";
import ProductReviews from "@/components/ProductReviews";
import {
  Recommendations,
  RecentlyViewedRail,
} from "@/components/ProductDiscovery";
import TrackProductView from "@/components/TrackProductView";
import { getProductBySlug, products } from "@/data/products";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products
    .filter(
      (p) =>
        p.slug !== "firenze-shoulder-bag" &&
        p.slug !== "firenze-cabin-trolley",
    )
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return {
    title: product ? `${product.name} — Romeah` : "Product — Romeah",
    description: product?.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main>
      <TrackProductView productId={product.id} />
      <section className="grid lg:grid-cols-2 gap-0 max-w-[1500px] mx-auto">
        <div className="relative bg-[#F7F3EE] aspect-[4/5]">
          <Image
            src={product.image}
            alt={product.imageAlt ?? `${product.name} by Romeah`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="px-8 lg:px-16 py-16">
          <p className="text-xs tracking-[0.18em] text-black/50">ROMEAH</p>
          <h1 className="font-serif text-4xl mt-4">{product.name}</h1>
          <p className="mt-4">${product.price}</p>
          <AddToBagPanel product={product} />
          {product.description && (
            <p className="leading-7 text-black/65 mt-10">{product.description}</p>
          )}
        </div>
      </section>
      <ProductReviews productId={product.id} />
      <Recommendations productId={product.id} category={product.category} />
      <RecentlyViewedRail excludeId={product.id} />
      <Footer />
    </main>
  );
}
