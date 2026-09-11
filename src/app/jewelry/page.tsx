import CategoryPage from "@/components/CategoryPage";

export const metadata = { title: "Jewelry — Romeah" };

export default function JewelryPage() {
  return (
    <CategoryPage
      title="Jewelry"
      category="Jewelry"
      description="Delicate finishes and sculptural forms — the last layer that completes the look."
      filters={[
        "NECKLACES",
        "EARRINGS",
        "BRACELETS",
        "RINGS",
        "WATCHES",
        "JEWELRY SETS",
      ]}
    />
  );
}
