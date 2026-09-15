export type ProductCategory =
  | "Handbags"
  | "Travel"
  | "Clothing"
  | "Shoes"
  | "Jewelry";

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: ProductCategory;
  subcategory?: string;
  price: number;
  color: string;
  colors?: string[];
  image: string;
  imageHover?: string;
  imageAlt?: string;
  material?: string;
  size?: string;
  collection?: string;
  available?: boolean;
  featured?: boolean;
  badge?: "New" | "Exclusive";
  description?: string;
  capacity?: string;
  weight?: string;
  shell?: string;
  wheels?: string;
  lock?: string;
  idealFor?: string[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "firenze-shoulder-bag",
    name: "Firenze Shoulder Bag",
    category: "Handbags",
    subcategory: "Shoulder Bags",
    price: 295,
    color: "Burgundy",
    image: "/images/handbags/firenze-burgundy-front.jpg",
    imageHover: "/images/handbags/firenze-burgundy-hover.jpg",
    imageAlt: "Romeah Firenze burgundy leather shoulder bag front view",
    colors: ["Burgundy", "Black", "Ivory"],
    material: "Leather",
    size: "Medium",
    collection: "La Notte",
    available: true,
    featured: true,
    badge: "Exclusive",
    description:
      "A refined everyday shoulder bag crafted with a softly structured silhouette.",
  },
  {
    id: 2,
    slug: "milano-top-handle",
    name: "Milano Top Handle",
    category: "Handbags",
    subcategory: "Top Handle",
    price: 345,
    color: "Black",
    image: "/images/handbags/milano-black-front.jpg",
    imageHover: "/images/handbags/milano-black-hover.jpg",
    imageAlt: "Romeah Milano black leather top-handle bag on light studio ground",
    colors: ["Black", "Burgundy"],
    material: "Leather",
    size: "Medium",
    collection: "Milano",
    available: true,
    featured: true,
    badge: "New",
  },
  {
    id: 3,
    slug: "roma-mini-bag",
    name: "Roma Mini Bag",
    category: "Handbags",
    subcategory: "Mini Bags",
    price: 245,
    color: "Ivory",
    image: "/images/handbags/roma-ivory-front.jpg",
    imageHover: "/images/handbags/roma-ivory-hover.jpg",
    imageAlt: "Romeah Roma ivory mini bag in clean product photography",
    colors: ["Ivory", "Black", "Gold"],
    material: "Leather",
    size: "Mini",
    collection: "Dolce Vita",
    available: true,
    badge: "New",
  },
  {
    id: 4,
    slug: "como-tote",
    name: "Como Leather Tote",
    category: "Handbags",
    subcategory: "Totes",
    price: 390,
    color: "Olive",
    image: "/images/handbags/como-olive-front.jpg",
    imageHover: "/images/handbags/como-olive-hover.jpg",
    imageAlt: "Romeah Como olive leather tote bag",
    colors: ["Olive", "Black", "Ivory"],
    material: "Leather",
    size: "Large",
    collection: "Verde",
    available: true,
  },
  {
    id: 5,
    slug: "firenze-cabin-trolley",
    name: "Firenze Cabin Trolley",
    category: "Travel",
    subcategory: "Carry-On",
    price: 420,
    color: "Black",
    image: "/images/travel/cabin-luggage.jpg",
    imageAlt: "Romeah Firenze cream-and-stone cabin luggage for European travel",
    material: "Polycarbonate",
    size: "Cabin",
    capacity: "35 L",
    weight: "2.8 kg",
    shell: "Polycarbonate",
    wheels: "360° spinner",
    lock: "TSA-approved",
    collection: "Romeah Travel",
    available: true,
    featured: true,
    idealFor: [
      "2–3 Day Trips",
      "Cabin Travel",
      "Weekend Escapes",
      "Business Travel",
    ],
    description:
      "A cabin-size trolley designed for seamless arrivals — light, secure, and quietly refined.",
  },
  {
    id: 6,
    slug: "venezia-weekend-bag",
    name: "Venezia Weekend Bag",
    category: "Travel",
    subcategory: "Weekend",
    price: 380,
    color: "Brown",
    image: "/images/travel/luggage-detail.jpg",
    imageAlt: "Romeah Venezia weekend bag leather detail",
    material: "Leather",
    size: "Large",
    capacity: "45 L",
    weight: "1.6 kg",
    shell: "Leather",
    wheels: "—",
    lock: "Zippered",
    collection: "Romeah Travel",
    available: true,
    featured: true,
    idealFor: ["Weekend Escapes", "2–3 Day Trips"],
    description: "A soft-structured weekend companion for short European escapes.",
  },
  {
    id: 13,
    slug: "milano-long-haul-case",
    name: "Milano Long-Haul Case",
    category: "Travel",
    subcategory: "Long-Haul",
    price: 520,
    color: "Ivory",
    image: "/images/travel/cabin-luggage.jpg",
    imageAlt: "Romeah Milano long-haul case in ivory for extended journeys",
    material: "Polycarbonate",
    size: "Checked",
    capacity: "70 L",
    weight: "3.6 kg",
    shell: "Polycarbonate",
    wheels: "360° dual spinner",
    lock: "TSA-approved",
    collection: "Romeah Travel",
    available: true,
    idealFor: ["Long-Haul Flights", "Week Away", "Business Travel"],
    description: "Expanded capacity with quiet polish — built for longer arrivals.",
  },
  {
    id: 14,
    slug: "roma-travel-pouch",
    name: "Roma Travel Pouch Set",
    category: "Travel",
    subcategory: "Travel Accessories",
    price: 145,
    color: "Ivory",
    image: "/images/travel/luggage-detail.jpg",
    imageAlt: "Romeah Roma travel pouch accessories in soft leather",
    material: "Leather",
    size: "Mini",
    collection: "Romeah Travel",
    available: true,
    idealFor: ["Beauty Essentials", "Cabin Organization"],
    description: "Coordinated pouches for beauty and documents — small pieces that finish the journey.",
  },
  {
    id: 7,
    slug: "siena-wrap-dress",
    name: "Siena Wrap Dress",
    category: "Clothing",
    subcategory: "Dresses",
    price: 320,
    color: "Ivory",
    image: "/images/clothing/dresses/fluid-dress.jpg",
    imageAlt: "Woman wearing Romeah Siena fluid wrap dress",
    material: "Fabric",
    available: true,
  },
  {
    id: 8,
    slug: "lago-cashmere-crew",
    name: "Lago Cashmere Crew",
    category: "Clothing",
    subcategory: "Knitwear",
    price: 280,
    color: "Black",
    image: "/images/clothing/knitwear/refined-crew.jpg",
    imageAlt: "Romeah Lago refined cashmere crew knitwear",
    material: "Cashmere",
    available: true,
  },
  {
    id: 9,
    slug: "porto-heel",
    name: "Porto Heel",
    category: "Shoes",
    subcategory: "Heels",
    price: 265,
    color: "Black",
    image: "/images/shoes/heels/porto-heel.jpg",
    imageAlt: "Romeah Porto black leather heel",
    material: "Leather",
    available: true,
  },
  {
    id: 10,
    slug: "capri-sandal",
    name: "Capri Sandal",
    category: "Shoes",
    subcategory: "Sandals",
    price: 195,
    color: "Ivory",
    image: "/images/shoes/flats/ballet-flat.jpg",
    imageAlt: "Romeah Capri ivory flat sandal",
    material: "Leather",
    available: true,
  },
  {
    id: 11,
    slug: "luna-hoop-earrings",
    name: "Luna Hoop Earrings",
    category: "Jewelry",
    subcategory: "Earrings",
    price: 120,
    color: "Gold",
    image: "/images/jewelry/earrings/gold-hoops.jpg",
    imageAlt: "Gold Romeah Luna hoop earrings beauty close-up",
    material: "Gold-tone",
    available: true,
  },
  {
    id: 12,
    slug: "aurora-pendant",
    name: "Aurora Pendant",
    category: "Jewelry",
    subcategory: "Necklaces",
    price: 160,
    color: "Gold",
    image: "/images/jewelry/necklaces/gold-pendant.jpg",
    imageAlt: "Romeah Aurora champagne-gold pendant necklace",
    material: "Gold-tone",
    available: true,
  },
];

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getHandbags() {
  return getProductsByCategory("Handbags");
}
