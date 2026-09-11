import Link from "next/link";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/inventory", label: "Inventory" },
  { href: "/admin/categories", label: "Categories" },
  { href: "/admin/collections", label: "Collections" },
  { href: "/admin/content", label: "Editorial" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-[240px_1fr] bg-[#F7F3EE]">
      <aside className="border-r border-black/10 bg-[#FCFBF9] px-6 py-10">
        <p className="font-serif tracking-[0.2em] text-xl mb-10">ROMEAH ADMIN</p>
        <nav className="flex flex-col gap-4 text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-black/70 hover:text-black">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-16 text-xs text-black/40 leading-5">
          Scaffold only — connect Supabase auth roles before production use.
        </p>
      </aside>
      <div className="p-8 lg:p-12">{children}</div>
    </div>
  );
}
