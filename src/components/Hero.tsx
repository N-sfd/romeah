import Link from "next/link";
import CoverImage from "@/components/CoverImage";

export default function Hero() {
  return (
    <section className="relative h-[82vh] min-h-[650px] overflow-hidden">
      <CoverImage
        src="/images/hero/romeah-main-hero.jpg"
        alt="Woman in refined Romeah fashion editorial — Italian quiet luxury campaign"
        priority
        className="object-cover object-[center_20%]"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-white text-center px-6">
        <p className="text-xs tracking-[0.3em] mb-5">ROMEAH FALL 2026</p>

        <h1 className="font-serif text-5xl md:text-7xl mb-5">La Nuova Donna</h1>

        <p className="max-w-xl text-lg mb-8">
          Modern femininity interpreted through timeless form, refined detail
          and effortless elegance.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/handbags"
            className="bg-white text-[#1a1816] px-8 py-4 text-xs tracking-[0.16em]"
          >
            SHOP THE COLLECTION
          </Link>

          <Link
            href="/#new-arrivals"
            className="border border-white px-8 py-4 text-xs tracking-[0.16em]"
          >
            DISCOVER NEW IN
          </Link>
        </div>
      </div>
    </section>
  );
}
