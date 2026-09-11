"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MegaMenu from "@/components/MegaMenu";
import SearchModal from "@/components/SearchModal";
import { useCart } from "@/context/CartContext";
import { navMenus } from "@/data/navigation";

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const { items, openCart, count } = useCart();
  const bagCount = count ?? items.reduce((sum, item) => sum + item.quantity, 0);
  const active = navMenus.find((item) => item.label === openMenu);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <header
        className="relative w-full bg-[#FCFBF9] border-b border-black/10 z-40"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="text-center text-xs tracking-[0.18em] py-2 border-b border-black/10">
          COMPLIMENTARY SHIPPING ON SELECT ORDERS
        </div>

        <div className="max-w-[1600px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex-1">
            <button
              type="button"
              className="text-sm tracking-[0.08em]"
              onClick={() => setSearchOpen(true)}
            >
              SEARCH
            </button>
          </div>

          <Link href="/" className="text-3xl tracking-[0.28em] font-serif">
            ROMEAH
          </Link>

          <div className="flex-1 flex justify-end gap-6 text-sm tracking-[0.08em]">
            <Link href="/account">ACCOUNT</Link>
            <Link href="/wishlist" aria-label="Wishlist">
              ♡
            </Link>
            <button type="button" onClick={openCart}>
              BAG ({bagCount})
            </button>
          </div>
        </div>

        <nav className="hidden lg:flex justify-center gap-7 xl:gap-9 text-xs tracking-[0.13em] pb-5">
          {navMenus.map((item) => (
            <div
              key={item.label}
              onMouseEnter={() =>
                setOpenMenu(item.hasMega ? item.label : null)
              }
            >
              <Link
                href={item.href}
                className={`pb-5 inline-block ${
                  openMenu === item.label ? "text-black" : "text-black/80"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        {active?.hasMega && active.columns && (
          <MegaMenu
            title={active.label}
            columns={active.columns}
            image={active.image}
          />
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
