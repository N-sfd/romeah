export type MegaMenuColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

export type NavMenu = {
  label: string;
  href: string;
  hasMega?: boolean;
  columns?: MegaMenuColumn[];
  image?: string;
};

export const navMenus: NavMenu[] = [
  { label: "NEW IN", href: "/#new-arrivals" },
  {
    label: "CLOTHING",
    href: "/clothing",
    hasMega: true,
    image: "/images/shop-the-look/look-01.jpg",
    columns: [
      {
        heading: "SHOP BY CATEGORY",
        links: [
          { label: "Dresses", href: "/clothing" },
          { label: "Tops", href: "/clothing" },
          { label: "Blazers", href: "/clothing" },
          { label: "Coats", href: "/clothing" },
          { label: "Knitwear", href: "/clothing" },
          { label: "Skirts", href: "/clothing" },
          { label: "Trousers", href: "/clothing" },
          { label: "Denim", href: "/clothing" },
          { label: "Eveningwear", href: "/clothing" },
        ],
      },
      {
        heading: "FEATURED",
        links: [
          { label: "New Arrivals", href: "/clothing" },
          { label: "The Edit", href: "/the-edit" },
          { label: "Best Sellers", href: "/clothing" },
        ],
      },
      {
        heading: "OCCASION",
        links: [
          { label: "Daywear", href: "/clothing" },
          { label: "Evening", href: "/clothing" },
          { label: "Travel", href: "/travel" },
        ],
      },
    ],
  },
  {
    label: "HANDBAGS",
    href: "/handbags",
    hasMega: true,
    image: "/images/handbags/firenze-burgundy-front.jpg",
    columns: [
      {
        heading: "SHOP BY STYLE",
        links: [
          { label: "Shoulder Bags", href: "/handbags" },
          { label: "Crossbody Bags", href: "/handbags" },
          { label: "Tote Bags", href: "/handbags" },
          { label: "Top Handle Bags", href: "/handbags" },
          { label: "Mini Bags", href: "/handbags" },
          { label: "Evening Bags", href: "/handbags" },
        ],
      },
      {
        heading: "FEATURED",
        links: [
          { label: "New Arrivals", href: "/handbags" },
          { label: "Romeah Icons", href: "/handbags" },
          { label: "Italian Leather", href: "/handbags" },
          { label: "Editor's Picks", href: "/handbags" },
          { label: "Best Sellers", href: "/handbags" },
        ],
      },
      {
        heading: "ACCESSORIES",
        links: [
          { label: "Wallets", href: "/handbags" },
          { label: "Card Holders", href: "/handbags" },
          { label: "Bag Charms", href: "/handbags" },
          { label: "Straps", href: "/handbags" },
          { label: "Small Leather Goods", href: "/handbags" },
        ],
      },
    ],
  },
  {
    label: "SHOES",
    href: "/shoes",
    hasMega: true,
    image: "/images/handbags/milano-black-front.jpg",
    columns: [
      {
        heading: "SHOP BY STYLE",
        links: [
          { label: "Heels", href: "/shoes" },
          { label: "Pumps", href: "/shoes" },
          { label: "Sandals", href: "/shoes" },
          { label: "Loafers", href: "/shoes" },
          { label: "Sneakers", href: "/shoes" },
          { label: "Boots", href: "/shoes" },
          { label: "Flats", href: "/shoes" },
        ],
      },
      {
        heading: "FEATURED",
        links: [
          { label: "New Arrivals", href: "/shoes" },
          { label: "Best Sellers", href: "/shoes" },
        ],
      },
      {
        heading: "MATERIALS",
        links: [
          { label: "Leather", href: "/shoes" },
          { label: "Suede", href: "/shoes" },
        ],
      },
    ],
  },
  {
    label: "JEWELRY",
    href: "/jewelry",
    hasMega: true,
    image: "/images/jewelry/earrings/gold-hoops.jpg",
    columns: [
      {
        heading: "SHOP BY CATEGORY",
        links: [
          { label: "Necklaces", href: "/jewelry" },
          { label: "Earrings", href: "/jewelry" },
          { label: "Bracelets", href: "/jewelry" },
          { label: "Rings", href: "/jewelry" },
          { label: "Watches", href: "/jewelry" },
          { label: "Jewelry Sets", href: "/jewelry" },
        ],
      },
      {
        heading: "FEATURED",
        links: [
          { label: "New Arrivals", href: "/jewelry" },
          { label: "Fine Details", href: "/#jewelry" },
        ],
      },
      {
        heading: "FINISH",
        links: [
          { label: "Gold-tone", href: "/jewelry" },
          { label: "Silver-tone", href: "/jewelry" },
        ],
      },
    ],
  },
  {
    label: "ACCESSORIES",
    href: "/handbags",
    hasMega: true,
    image: "/images/handbags/roma-ivory-front.jpg",
    columns: [
      {
        heading: "LEATHER GOODS",
        links: [
          { label: "Wallets", href: "/handbags" },
          { label: "Card Holders", href: "/handbags" },
          { label: "Straps", href: "/handbags" },
        ],
      },
      {
        heading: "FINISHING TOUCHES",
        links: [
          { label: "Scarves", href: "/clothing" },
          { label: "Belts", href: "/clothing" },
          { label: "Bag Charms", href: "/handbags" },
        ],
      },
      {
        heading: "FEATURED",
        links: [
          { label: "New Arrivals", href: "/#new-arrivals" },
          { label: "The Edit", href: "/the-edit" },
          { label: "Shop the Look", href: "/shop-the-look" },
        ],
      },
    ],
  },
  {
    label: "TRAVEL",
    href: "/travel",
    hasMega: true,
    image: "/images/travel/travel-main.jpg",
    columns: [
      {
        heading: "LUGGAGE",
        links: [
          { label: "Carry-On", href: "/travel" },
          { label: "Checked Luggage", href: "/travel" },
          { label: "Weekend Bags", href: "/travel" },
          { label: "Travel Totes", href: "/travel" },
        ],
      },
      {
        heading: "ACCESSORIES",
        links: [
          { label: "Beauty Cases", href: "/travel" },
          { label: "Travel Accessories", href: "/travel" },
        ],
      },
      {
        heading: "STORIES",
        links: [
          { label: "72 Hours in Florence", href: "/travel" },
          { label: "The Art of Arrival", href: "/travel" },
        ],
      },
    ],
  },
  { label: "THE EDIT", href: "/the-edit" },
  { label: "SALE", href: "/handbags" },
];
