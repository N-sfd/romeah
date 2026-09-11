import { Suspense } from "react";
import SearchPageClient from "./SearchPageClient";

export const metadata = {
  title: "Search — Romeah",
  description: "Search Romeah handbags, clothing, shoes, jewelry and travel.",
};

export default function SearchPage() {
  return (
    <Suspense fallback={<main className="py-24 text-center">Loading…</main>}>
      <SearchPageClient />
    </Suspense>
  );
}
