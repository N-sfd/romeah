import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Returns — Romeah",
  description: "Romeah returns and exchanges — considered, simple, and clear.",
};

export default function ReturnsPage() {
  return (
    <main>
      <section className="bg-[#F7F3EE] py-20 text-center px-6">
        <p className="text-xs tracking-[0.2em] mb-4">CARE</p>
        <h1 className="font-serif text-5xl">Returns</h1>
        <p className="max-w-xl mx-auto mt-5 text-black/60 leading-7">
          Unworn pieces with tags may be returned within 14 days of delivery.
          Travel luggage follows the same window when unused.
        </p>
      </section>

      <section className="max-w-[800px] mx-auto px-6 py-20 space-y-12">
        <div>
          <h2 className="font-serif text-3xl mb-4">How it works</h2>
          <ol className="space-y-4 text-black/70 leading-7 list-decimal list-inside">
            <li>Sign in to your account or enter your order number.</li>
            <li>Select the items you wish to return.</li>
            <li>Print the prepaid label and drop off with our courier partner.</li>
            <li>Refunds are issued to the original payment method within 5–7 days.</li>
          </ol>
        </div>

        <div className="border border-black/10 p-8">
          <h3 className="font-serif text-2xl mb-4">Start a return</h3>
          <p className="text-sm text-black/60 mb-6 leading-7">
            Full returns processing connects when orders go live. For now, track
            an order or contact care.
          </p>
          <div className="flex flex-wrap gap-4 text-xs tracking-[0.14em]">
            <Link
              href="/orders/track"
              className="bg-[#241F1C] text-white px-8 py-4"
            >
              TRACK ORDER
            </Link>
            <Link href="/account" className="border border-black px-8 py-4">
              MY ACCOUNT
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-3xl mb-4">Exchanges</h2>
          <p className="text-black/70 leading-7">
            Prefer another color or size? Start a return and place a new order
            for the piece you want — we&apos;ll prioritize atelier preparation.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
