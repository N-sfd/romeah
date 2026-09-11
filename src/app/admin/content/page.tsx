import Link from "next/link";
import { homepageCms } from "@/data/editorial";

export default function AdminContentPage() {
  return (
    <div>
      <h1 className="font-serif text-4xl mb-3">Homepage CMS</h1>
      <p className="text-black/55 mb-10 max-w-2xl leading-7">
        Visual blocks currently drive the storefront from{" "}
        <code className="text-sm">src/data/editorial.ts</code>. Connect Supabase
        when the experience is locked — until then, edit that file or use this
        map as a publishing checklist.
      </p>

      <div className="space-y-4">
        {homepageCms.map((block, index) => (
          <div
            key={"id" in block ? block.id : `hero-${index}`}
            className="border border-black/10 p-6 flex flex-wrap justify-between gap-4"
          >
            <div>
              <p className="text-xs tracking-[0.14em] text-black/45 mb-2">
                BLOCK {String(index + 1).padStart(2, "0")} · {block.type.toUpperCase()}
              </p>
              <h2 className="font-serif text-2xl">
                {"title" in block ? block.title : "Hero"}
              </h2>
              {"eyebrow" in block && (
                <p className="text-sm text-black/55 mt-2">{block.eyebrow}</p>
              )}
            </div>
            <div className="text-xs tracking-[0.12em] flex flex-col gap-2 items-end">
              <span className="text-emerald-800">PUBLISHED</span>
              {"href" in block && (
                <Link href={block.href} className="border-b border-black pb-0.5">
                  VIEW
                </Link>
              )}
              {"ctaPrimary" in block && (
                <Link
                  href={block.ctaPrimary.href}
                  className="border-b border-black pb-0.5"
                >
                  VIEW
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
