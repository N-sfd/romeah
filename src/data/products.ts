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
  image: string;
  imageAlt?: string;
  material?: string;
  size?: string;
  collection?: string;
  available?: boolean;
  featured?: boolean;
  description?: string;
  capacity?: string;
  weight?: string;
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
    imageAlt: "Romeah Firenze burgundy leather shoulder bag front view",
    material: "Leather",
    size: "Medium",
    collection: "La Notte",
    available: true,
    featured: true,
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
    imageAlt: "Romeah Milano black leather top-handle bag on light studio ground",
    material: "Leather",
    size: "Medium",
    collection: "Milano",
    available: true,
    featured: true,
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
    imageAlt: "Romeah Roma ivory mini bag in clean product photography",
    material: "Leather",
    size: "Mini",
    collection: "Dolce Vita",
    available: true,
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
    imageAlt: "Romeah Como olive leather tote bag",
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
    subcategory: "Weekend Bags",
    price: 380,
    color: "Brown",
    image: "/images/travel/luggage-detail.jpg",
    imageAlt: "Romeah Venezia weekend bag leather detail",
    material: "Leather",
    size: "Large",
    capacity: "45 L",
    weight: "1.6 kg",
    available: true,
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
