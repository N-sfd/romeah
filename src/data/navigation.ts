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

/** Primary desktop nav — kept lean; Sale / Edit live inside mega menus. */
export const navMenus: NavMenu[] = [
  { label: "NEW IN", href: "/#new-arrivals" },
  {
    label: "CLOTHING",
    href: "/clothing",
    hasMega: true,
    image: "/images/shop-the-look/look-01.jpg",
    columns: [
      {
        heading: "DRESSES",
        links: [
          { label: "All Dresses", href: "/clothing" },
          { label: "Eveningwear", href: "/clothing" },
        ],
      },
      {
        heading: "TAILORING & KNITWEAR",
        links: [
          { label: "Tailoring", href: "/clothing" },
          { label: "Knitwear", href: "/clothing" },
          { label: "Tops", href: "/clothing" },
          { label: "Bottoms", href: "/clothing" },
        ],
      },
      {
        heading: "FEATURED",
        links: [
          { label: "New Arrivals", href: "/#new-arrivals" },
          { label: "The Edit", href: "/the-edit" },
          { label: "Shop the Look", href: "/shop-the-look" },
          { label: "Sale", href: "/clothing" },
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
        ],
      },
      {
        heading: "FEATURED",
        links: [
          { label: "Firenze Shoulder Bag", href: "/product/firenze-shoulder-bag" },
          { label: "Bags of the Season", href: "/#bags" },
          { label: "Sale", href: "/handbags" },
        ],
      },
      {
        heading: "SMALL LEATHER GOODS",
        links: [
          { label: "Wallets", href: "/handbags" },
          { label: "Straps", href: "/handbags" },
          { label: "Card Holders", href: "/handbags" },
        ],
      },
    ],
  },
  {
    label: "SHOES",
    href: "/shoes",
    hasMega: true,
    image: "/images/shoes/heels/porto-heel.jpg",
    columns: [
      {
        heading: "SHOP BY STYLE",
        links: [
          { label: "Heels", href: "/shoes" },
          { label: "Flats", href: "/shoes" },
          { label: "Loafers", href: "/shoes" },
          { label: "Boots", href: "/shoes" },
        ],
      },
      {
        heading: "FEATURED",
        links: [
          { label: "Shoes Edit", href: "/#shoes-edit" },
          { label: "Sale", href: "/shoes" },
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
        ],
      },
      {
        heading: "FEATURED",
        links: [
          { label: "Jewelry Focus", href: "/#jewelry-focus" },
          { label: "The Edit", href: "/the-edit" },
        ],
      },
      {
        heading: "FINISH",
        links: [
          { label: "Champagne Gold", href: "/jewelry" },
          { label: "Sale", href: "/jewelry" },
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
          { label: "Carry-On", href: "/travel#carry-on" },
          { label: "Checked Luggage", href: "/travel#long-haul" },
          { label: "Find Your Size", href: "/travel#find-your-size" },
        ],
      },
      {
        heading: "WEEKEND & BUSINESS",
        links: [
          { label: "Weekend Bags", href: "/travel#weekend" },
          { label: "Business Travel", href: "/travel#carry-on" },
          { label: "Travel Totes", href: "/handbags" },
        ],
      },
      {
        heading: "ACCESSORIES",
        links: [
          { label: "Beauty Cases", href: "/travel#accessories" },
          { label: "Travel Accessories", href: "/travel#accessories" },
          { label: "72 Hours in Florence", href: "/travel#florence" },
        ],
      },
    ],
  },
];
