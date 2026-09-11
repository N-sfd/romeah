import CategoryPage from "@/components/CategoryPage";

export const metadata = { title: "Women's Clothing — Romeah" };

export default function ClothingPage() {
  return (
    <CategoryPage
      title="Women's Clothing"
      category="Clothing"
      description="Refined silhouettes and considered fabrics for a modern wardrobe."
      filters={[
        "DRESSES",
        "TOPS",
        "BLAZERS",
        "COATS",
        "KNITWEAR",
        "SKIRTS",
        "TROUSERS",
        "DENIM",
        "EVENINGWEAR",
      ]}
    />
  );
}
