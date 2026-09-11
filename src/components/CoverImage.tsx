"use client";

import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Full-bleed cover image inside a relatively positioned parent. */
export default function CoverImage({
  src,
  alt,
  className = "object-cover",
  sizes = "100vw",
  priority = false,
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
