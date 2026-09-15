"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MegaMenu from "@/components/MegaMenu";
import SearchModal from "@/components/SearchModal";
import { useCart } from "@/context/CartContext";
import { navMenus } from "@/data/navigation";

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { items, openCart, count } = useCart();
  const bagCount = count ?? items.reduce((sum, item) => sum + item.quantity, 0);
  const active = navMenus.find((item) => item.label === openMenu);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <header
        className="relative w-full bg-[#FCFBF9] border-b border-black/10 z-40"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="text-center text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] py-2 border-b border-black/10 px-3">
          COMPLIMENTARY SHIPPING ON SELECT ORDERS
        </div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
          <div className="flex-1 flex items-center gap-3">
            <button
              type="button"
              className="lg:hidden text-sm tracking-[0.08em]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? "CLOSE" : "MENU"}
            </button>
            <button
              type="button"
              className="hidden sm:inline text-sm tracking-[0.08em]"
              onClick={() => setSearchOpen(true)}
            >
              SEARCH
            </button>
          </div>

          <Link
            href="/"
            className="text-2xl sm:text-3xl tracking-[0.22em] sm:tracking-[0.28em] font-serif shrink-0"
          >
            ROMEAH
          </Link>

          <div className="flex-1 flex justify-end gap-4 sm:gap-6 text-sm tracking-[0.08em]">
            <button
              type="button"
              className="sm:hidden"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              ⌕
            </button>
            <Link href="/account" className="hidden md:inline">
              ACCOUNT
            </Link>
            <Link href="/wishlist" aria-label="Wishlist">
              ♡
            </Link>
            <button type="button" onClick={openCart} aria-label="Bag">
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

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[min(100%,22rem)] bg-[#FCFBF9] overflow-y-auto px-6 py-8">
            <div className="flex justify-between items-center mb-10">
              <p className="font-serif text-2xl tracking-[0.2em]">ROMEAH</p>
              <button type="button" onClick={() => setMobileOpen(false)}>
                ✕
              </button>
            </div>
            <nav className="space-y-6">
              {navMenus.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-xs tracking-[0.16em]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.columns && (
                    <div className="mt-3 pl-3 space-y-2 border-l border-black/10">
                      {item.columns.flatMap((col) =>
                        col.links.slice(0, 4).map((link) => (
                          <Link
                            key={`${item.label}-${link.label}`}
                            href={link.href}
                            className="block text-sm text-black/55"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        )),
                      )}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/the-edit"
                className="block text-xs tracking-[0.16em] pt-4"
                onClick={() => setMobileOpen(false)}
              >
                THE EDIT
              </Link>
              <Link
                href="/account"
                className="block text-xs tracking-[0.16em]"
                onClick={() => setMobileOpen(false)}
              >
                ACCOUNT
              </Link>
            </nav>
          </div>
        </div>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
