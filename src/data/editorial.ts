import type { Product } from "@/data/products";
import { products } from "@/data/products";

export type LookHotspot = {
  productId: number;
  label: string;
  x: number; // percent
  y: number; // percent
};

export type Look = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  productIds: number[];
  hotspots: LookHotspot[];
};

export type Collection = {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  productIds: number[];
};

export type HomepageBlock =
  | {
      type: "hero";
      eyebrow: string;
      title: string;
      body: string;
      image: string;
      imageAlt: string;
      ctaPrimary: { label: string; href: string };
      ctaSecondary: { label: string; href: string };
    }
  | {
      type: "product-row";
      id: string;
      eyebrow: string;
      title: string;
      href: string;
      productIds: number[];
    }
  | {
      type: "editorial";
      id: string;
      eyebrow: string;
      title: string;
      body: string;
      image: string;
      imageAlt: string;
      href: string;
      cta: string;
      tone?: "light" | "warm" | "dark";
    }
  | {
      type: "campaign";
      id: string;
      eyebrow: string;
      title: string;
      body: string;
      image: string;
      imageAlt: string;
      href: string;
      cta: string;
    };

export const looks: Look[] = [
  {
    id: "1",
    slug: "city-morning",
    title: "City Morning",
    subtitle: "Soft ivory tailoring, burgundy bag, and quiet gold.",
    image: "/images/shop-the-look/look-01.jpg",
    productIds: [1, 8, 9, 11],
    hotspots: [
      { productId: 8, label: "Knitwear", x: 48, y: 28 },
      { productId: 1, label: "Bag", x: 68, y: 52 },
      { productId: 11, label: "Earrings", x: 52, y: 14 },
      { productId: 9, label: "Heels", x: 46, y: 88 },
    ],
  },
  {
    id: "2",
    slug: "evening-in-rome",
    title: "Evening in Rome",
    subtitle: "A black evening dress, mini bag, and champagne earrings.",
    image: "/images/shop-the-look/look-02.jpg",
    productIds: [7, 3, 10, 12],
    hotspots: [
      { productId: 7, label: "Dress", x: 50, y: 42 },
      { productId: 3, label: "Mini bag", x: 72, y: 58 },
      { productId: 12, label: "Pendant", x: 48, y: 22 },
      { productId: 10, label: "Flats", x: 45, y: 90 },
    ],
  },
  {
    id: "3",
    slug: "weekend-departure",
    title: "Weekend Departure",
    subtitle: "Cabin trolley, tote, knit layer, and travel-ready ease.",
    image: "/images/shop-the-look/look-03.jpg",
    productIds: [5, 4, 8, 14],
    hotspots: [
      { productId: 5, label: "Carry-on", x: 30, y: 55 },
      { productId: 4, label: "Tote", x: 62, y: 48 },
      { productId: 8, label: "Knit", x: 48, y: 30 },
      { productId: 14, label: "Pouch", x: 70, y: 70 },
    ],
  },
];

export const collections: Collection[] = [
  {
    id: "la-notte",
    slug: "la-notte",
    title: "La Notte",
    eyebrow: "COLLECTION",
    description:
      "Black and burgundy evening styling — jewelry that catches candlelight.",
    image: "/images/collections/la-notte.jpg",
    productIds: [1, 7, 9, 11],
  },
  {
    id: "verde",
    slug: "verde",
    title: "Verde",
    eyebrow: "COLLECTION",
    description:
      "Sage and olive for daylight — garden greens and Italian city walks.",
    image: "/images/collections/verde.jpg",
    productIds: [4, 6, 8, 10],
  },
  {
    id: "milano",
    slug: "milano",
    title: "Milano",
    eyebrow: "COLLECTION",
    description:
      "Structured fashion in black and cream — city architecture as backdrop.",
    image: "/images/collections/milano.jpg",
    productIds: [2, 8, 9, 12],
  },
  {
    id: "dolce-vita",
    slug: "dolce-vita",
    title: "Dolce Vita",
    eyebrow: "COLLECTION",
    description:
      "Feminine summer styling in warm daylight — soft coastal Italian atmosphere.",
    image: "/images/collections/dolce-vita.jpg",
    productIds: [3, 7, 10, 11],
  },
];

export const homepageCms: HomepageBlock[] = [
  {
    type: "hero",
    eyebrow: "ROMEAH FALL 2026",
    title: "La Nuova Donna",
    body: "Modern femininity interpreted through timeless form, refined detail and effortless elegance.",
    image: "/images/hero/romeah-main-hero.jpg",
    imageAlt:
      "Woman in refined fashion editorial styling for Romeah Fall 2026 campaign",
    ctaPrimary: { label: "SHOP THE COLLECTION", href: "/handbags" },
    ctaSecondary: { label: "DISCOVER NEW IN", href: "/#new-arrivals" },
  },
  {
    type: "product-row",
    id: "new-arrivals",
    eyebrow: "JUST ARRIVED",
    title: "New Arrivals",
    href: "/#new-arrivals",
    productIds: [1, 7, 9, 11],
  },
  {
    type: "editorial",
    id: "romeah-edit",
    eyebrow: "THE ROMEAH EDIT",
    title: "Quiet Luxury",
    body: "Refined silhouettes, understated leather and beautifully considered details for a modern wardrobe.",
    image: "/images/editorial/quiet-luxury.jpg",
    imageAlt: "Woman wearing Romeah quiet-luxury outerwear in soft daylight",
    href: "/the-edit",
    cta: "DISCOVER THE EDIT",
    tone: "warm",
  },
  {
    type: "product-row",
    id: "bags",
    eyebrow: "ROMEAH ICONS",
    title: "Bags of the Season",
    href: "/handbags",
    productIds: [2, 3, 4, 1],
  },
  {
    type: "product-row",
    id: "shoes-edit",
    eyebrow: "THE SHOES EDIT",
    title: "Shoes Edit",
    href: "/shoes",
    productIds: [9, 10],
  },
  {
    type: "campaign",
    id: "travel",
    eyebrow: "ROMEAH TRAVEL",
    title: "The Art of Arrival",
    body: "Travel beautifully.",
    image: "/images/travel/travel-main.jpg",
    imageAlt:
      "Elegant European arrival mood for Romeah travel — Italian city light and journey",
    href: "/travel",
    cta: "EXPLORE TRAVEL",
  },
  {
    type: "editorial",
    id: "shop-the-look",
    eyebrow: "SHOP THE LOOK",
    title: "Dressed for the day",
    body: "Soft tailoring, quiet color and one exceptional bag — a complete look for mornings that become evenings.",
    image: "/images/shop-the-look/look-02.jpg",
    imageAlt: "Evening Shop the Look styling with dress, mini bag and jewelry",
    href: "/shop-the-look",
    cta: "SHOP THE LOOK",
    tone: "light",
  },
  {
    type: "product-row",
    id: "jewelry-focus",
    eyebrow: "FINE DETAILS",
    title: "Jewelry Focus",
    href: "/jewelry",
    productIds: [11, 12],
  },
  {
    type: "product-row",
    id: "travel-essentials",
    eyebrow: "JOURNEY READY",
    title: "Travel Essentials",
    href: "/travel",
    productIds: [5, 6, 14, 13],
  },
];

export function productsByIds(ids: number[]): Product[] {
  return ids
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));
}

export function getLookBySlug(slug: string) {
  return looks.find((l) => l.slug === slug);
}

export function getCollectionBySlug(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export type Review = {
  id: string;
  productId: number;
  author: string;
  rating: number;
  title: string;
  body: string;
  date: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    productId: 1,
    author: "Chiara M.",
    rating: 5,
    title: "Perfect everyday proportion",
    body: "Soft structure, beautiful burgundy, and it holds everything I need without bulk.",
    date: "2026-08-12",
  },
  {
    id: "r2",
    productId: 1,
    author: "Elena R.",
    rating: 5,
    title: "Quiet luxury, truly",
    body: "The leather feels exceptional. I've worn it from morning meetings to dinner.",
    date: "2026-07-28",
  },
  {
    id: "r3",
    productId: 5,
    author: "Sofia L.",
    rating: 5,
    title: "Cabin-ready elegance",
    body: "Light, secure, and looks considered even on a 6am flight.",
    date: "2026-08-01",
  },
  {
    id: "r4",
    productId: 2,
    author: "Giulia P.",
    rating: 4,
    title: "A new classic",
    body: "The top handle sits beautifully. Wish there were more colorways.",
    date: "2026-06-18",
  },
];

export function getReviewsForProduct(productId: number) {
  return reviews.filter((r) => r.productId === productId);
}

export type MockOrder = {
  id: string;
  email: string;
  status: "confirmed" | "shipped" | "out_for_delivery" | "delivered";
  placedAt: string;
  eta: string;
  trackingNumber: string;
  items: { name: string; image: string; qty: number; price: number }[];
  steps: { label: string; done: boolean; at?: string }[];
};

export const mockOrders: MockOrder[] = [
  {
    id: "RMH-10024",
    email: "nazia@example.com",
    status: "shipped",
    placedAt: "2026-09-08",
    eta: "2026-09-14",
    trackingNumber: "RMHTRACK8821",
    items: [
      {
        name: "Firenze Shoulder Bag",
        image: "/images/handbags/firenze-burgundy-front.jpg",
        qty: 1,
        price: 295,
      },
    ],
    steps: [
      { label: "Order confirmed", done: true, at: "Sep 8" },
      { label: "Prepared in atelier", done: true, at: "Sep 9" },
      { label: "Shipped", done: true, at: "Sep 10" },
      { label: "Out for delivery", done: false },
      { label: "Delivered", done: false },
    ],
  },
];

export function findOrder(query: string) {
  const q = query.trim().toLowerCase();
  return mockOrders.find(
    (o) =>
      o.id.toLowerCase() === q ||
      o.trackingNumber.toLowerCase() === q ||
      o.email.toLowerCase() === q,
  );
}
