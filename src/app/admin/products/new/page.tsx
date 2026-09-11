export default function AdminNewProductPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="font-serif text-4xl mb-8">New Product</h1>
      <form className="space-y-5 bg-white border border-black/10 p-8">
        {[
          "Product name",
          "Slug",
          "Category",
          "Subcategory",
          "Description",
          "Price",
          "Sale price",
          "Color",
          "Size",
          "Material",
          "SKU",
          "Inventory",
          "Collection",
        ].map((label) => (
          <label key={label} className="block text-sm">
            <span className="text-black/55">{label}</span>
            <input
              className="mt-2 w-full border border-black/15 px-3 py-3 bg-[#FCFBF9]"
              placeholder={label}
            />
          </label>
        ))}
        <label className="flex items-center gap-3 text-sm">
          <input type="checkbox" /> Featured
        </label>
        <div className="flex gap-4 pt-4">
          <button
            type="button"
            className="border border-black px-6 py-3 text-xs tracking-[0.14em]"
          >
            SAVE DRAFT
          </button>
          <button
            type="button"
            className="bg-[#241F1C] text-white px-6 py-3 text-xs tracking-[0.14em]"
          >
            PUBLISH
          </button>
        </div>
      </form>
    </div>
  );
}
