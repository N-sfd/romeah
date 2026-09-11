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
    <div className="absolute left-0 top-full w-full bg-[#FCFBF9] border-t border-black/10 shadow-sm z-50">
      <div className="max-w-[1500px] mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {columns.map((column) => (
          <div key={column.heading}>
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
          <div>
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#F7F3EE]">
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
