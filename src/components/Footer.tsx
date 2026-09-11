import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#241F1C] text-[#FCFBF9]">
      <div className="max-w-[1500px] mx-auto px-8 py-20 grid gap-12 lg:grid-cols-[1.2fr_1.5fr]">
        <div>
          <p className="font-serif text-3xl tracking-[0.28em] mb-5">ROMEAH</p>
          <p className="max-w-xs text-sm leading-7 text-white/60">
            Quiet luxury for the modern wardrobe — refined leather, considered
            form and effortless elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-[0.16em] text-white/45 mb-2">SHOP</p>
            <Link href="/handbags">Handbags</Link>
            <Link href="/clothing">Clothing</Link>
            <Link href="/shoes">Shoes</Link>
            <Link href="/jewelry">Jewelry</Link>
            <Link href="/travel">Travel</Link>
            <Link href="/collections">Collections</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-[0.16em] text-white/45 mb-2">
              DISCOVER
            </p>
            <Link href="/the-edit">The Edit</Link>
            <Link href="/shop-the-look">Shop the Look</Link>
            <Link href="/stylist">AI Stylist</Link>
            <Link href="/search">Search</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-[0.16em] text-white/45 mb-2">HELP</p>
            <Link href="/orders/track">Track Order</Link>
            <Link href="/returns">Returns</Link>
            <Link href="/wishlist">Wishlist</Link>
            <Link href="/account">Account</Link>
            <Link href="/login">Sign In</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-[0.16em] text-white/45 mb-2">
              COMPANY
            </p>
            <Link href="/the-edit">About</Link>
            <Link href="/admin">Admin</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-8 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs tracking-[0.12em] text-white/45">
        <p>© {new Date().getFullYear()} ROMEAH</p>
        <div className="flex gap-8">
          <Link href="/">Privacy</Link>
          <Link href="/">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
