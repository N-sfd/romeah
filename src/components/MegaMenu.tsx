import Image from "next/image";
import Link from "next/link";

type MegaMenuProps = {
  title: string;
  columns: {
    heading: string;
    links: { label: string; href: string }[];
  }[];
  image?: string;
};

export default function MegaMenu({ title, columns, image }: MegaMenuProps) {
  return (
    <div className="absolute left-0 top-full w-full max-h-[min(70vh,560px)] overflow-y-auto bg-[#FCFBF9] border-t border-black/10 z-50">
      <div className="max-w-[1500px] mx-auto px-8 xl:px-10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
        {columns.map((column) => (
          <div key={column.heading} className="min-w-0">
            <h3 className="text-xs tracking-[0.18em] mb-5 text-black/55">
              {column.heading}
            </h3>

            <div className="space-y-3">
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-black/65 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {image && (
          <div className="hidden lg:block min-w-0">
            <div className="relative w-full max-w-[280px] aspect-[4/5] overflow-hidden bg-[#F7F3EE]">
              <Image
                src={image}
                alt={`Featured ${title.toLowerCase()} — Romeah`}
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-xs tracking-[0.16em] text-black/50">
              Featured {title.toLowerCase()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
