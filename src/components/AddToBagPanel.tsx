"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

type ColorOption = {
  name: string;
  swatch: string;
};

type Props = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    color: string;
  };
  colors?: ColorOption[];
};

const defaultColors: ColorOption[] = [
  { name: "Burgundy", swatch: "#702E38" },
  { name: "Black", swatch: "#111111" },
  { name: "Ivory", swatch: "#E8DFD2" },
];

export default function AddToBagPanel({ product, colors = defaultColors }: Props) {
  const [color, setColor] = useState(
    colors.find((c) => c.name === product.color)?.name ?? colors[0]?.name,
  );
  const { addItem } = useCart();
  const { toggle, isSaved } = useWishlist();
  const saved = isSaved(product.id);

  return (
    <div>
      <p className="mt-8 text-sm">Color: {color}</p>

      <div className="flex gap-3 mt-4">
        {colors.map((option) => (
          <button
            key={option.name}
            type="button"
            aria-label={option.name}
            onClick={() => setColor(option.name)}
            className={`w-8 h-8 rounded-full border-2 ${
              color === option.name ? "border-black" : "border-transparent"
            }`}
            style={{ backgroundColor: option.swatch }}
          />
        ))}
      </div>

      <button
        type="button"
        className="w-full bg-[#241F1C] text-white py-5 mt-10 tracking-[0.15em] text-xs"
        onClick={() =>
          addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color,
          })
        }
      >
        ADD TO BAG
      </button>

      <p className="text-xs text-black/45 mt-3 tracking-[0.08em]">
        Bag opens automatically · color saved as a separate line
      </p>

      <button
        type="button"
        className="w-full border border-black py-5 mt-3 tracking-[0.15em] text-xs"
        onClick={() => toggle(product.id)}
      >
        {saved ? "♥ SAVED TO WISHLIST" : "♡ ADD TO WISHLIST"}
      </button>
    </div>
  );
}
