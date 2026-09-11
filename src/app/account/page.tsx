import Link from "next/link";

const sections = ["Orders", "Wishlist", "Addresses", "Profile", "Returns"];

export default function AccountPage() {
  return (
    <main className="max-w-[1100px] mx-auto px-8 py-20">
      <p className="text-xs tracking-[0.2em] mb-4">ROMEAH</p>
      <h1 className="font-serif text-5xl mb-4">My Romeah</h1>
      <p className="text-black/55 mb-14 max-w-lg leading-7">
        Account shell ready. After Supabase Auth is connected, wishlist, cart,
        addresses and orders will sync to the signed-in customer.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {sections.map((section) => (
          <Link
            key={section}
            href={section === "Wishlist" ? "/wishlist" : "/account"}
            className="border border-black/10 bg-white px-6 py-8 hover:bg-[#F7F3EE] transition-colors"
          >
            <p className="font-serif text-2xl">{section}</p>
          </Link>
        ))}
      </div>
      <p className="mt-10 text-sm">
        <Link href="/login" className="underline">
          Sign in
        </Link>
      </p>
    </main>
  );
}
