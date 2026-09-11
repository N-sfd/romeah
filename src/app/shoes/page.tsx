import CategoryPage from "@/components/CategoryPage";

export const metadata = { title: "Women's Shoes — Romeah" };

export default function ShoesPage() {
  return (
    <CategoryPage
      title="Women's Shoes"
      category="Shoes"
      description="Quietly sculpted footwear for day, evening and everything between."
      filters={[
        "HEELS",
        "PUMPS",
        "SANDALS",
        "LOAFERS",
        "SNEAKERS",
        "BOOTS",
        "FLATS",
      ]}
    />
  );
}
