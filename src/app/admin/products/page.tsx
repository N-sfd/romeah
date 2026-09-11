import Link from "next/link";
import { products } from "@/data/products";

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="font-serif text-4xl mb-2">Products</h1>
          <p className="text-sm text-black/55">
            Local catalog preview ({products.length})
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="text-xs tracking-[0.14em] border-b border-black pb-1"
        >
          NEW PRODUCT
        </Link>
      </div>

      <div className="bg-white border border-black/10">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between gap-4 px-6 py-4 border-b border-black/5 text-sm"
          >
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-black/45">
                {product.category} · ${product.price}
              </p>
            </div>
            <span className="text-xs tracking-[0.1em] text-black/40">
              {product.available ? "PUBLISHED" : "DRAFT"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
