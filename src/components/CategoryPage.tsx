import Footer from "@/components/Footer";
import ProductToolbar from "@/components/ProductToolbar";
import { getProductsByCategory, type ProductCategory } from "@/data/products";

type CategoryPageProps = {
  title: string;
  category: ProductCategory;
  eyebrow?: string;
  description?: string;
  filters?: string[];
};

export default function CategoryPage({
  title,
  category,
  eyebrow = "ROMEAH",
  description,
  filters = [],
}: CategoryPageProps) {
  const products = getProductsByCategory(category);

  return (
    <main>
      <section className="bg-[#F7F3EE] py-20 text-center px-6">
        <p className="text-xs tracking-[0.2em] mb-4">{eyebrow}</p>
        <h1 className="font-serif text-5xl">{title}</h1>
        {description && (
          <p className="max-w-xl mx-auto mt-5 text-black/60">{description}</p>
        )}
      </section>

      <section className="max-w-[1500px] mx-auto px-8 py-16">
        <ProductToolbar products={products} chips={filters} />
      </section>

      <Footer />
    </main>
  );
}
