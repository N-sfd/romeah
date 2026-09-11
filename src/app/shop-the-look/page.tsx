import Footer from "@/components/Footer";
import ShopLookInteractive from "@/components/ShopLookInteractive";
import { looks } from "@/data/editorial";

export const metadata = {
  title: "Shop the Look — Romeah",
  description:
    "Interactive Romeah looks with hotspots for bags, clothing, shoes and jewelry.",
};

export default function ShopTheLookPage() {
  return (
    <main>
      <section className="bg-[#F7F3EE] py-20 text-center px-6">
        <p className="text-xs tracking-[0.2em] mb-4">STYLED BY ROMEAH</p>
        <h1 className="font-serif text-5xl md:text-6xl">Shop the Look</h1>
        <p className="max-w-xl mx-auto mt-5 text-black/60 leading-7">
          Tap the markers to explore each piece — bag, clothing, shoes, and
          jewelry composed as one edit.
        </p>
      </section>

      <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-16 space-y-28">
        {looks.map((look) => (
          <ShopLookInteractive key={look.id} look={look} />
        ))}
      </div>

      <Footer />
    </main>
  );
}
