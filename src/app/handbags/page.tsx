import CategoryPage from "@/components/CategoryPage";

export const metadata = {
  title: "Women's Handbags — Romeah",
};

export default function HandbagsPage() {
  return (
    <CategoryPage
      title="Women's Handbags"
      category="Handbags"
      description="Sculptural silhouettes, refined leather and timeless pieces designed for every part of her day."
      filters={[
        "ALL BAGS",
        "SHOULDER BAGS",
        "CROSSBODY",
        "TOTES",
        "TOP HANDLE",
        "MINI BAGS",
        "EVENING",
      ]}
    />
  );
}
