import type { MetadataRoute } from "next";
import { collections, looks } from "@/data/editorial";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://romeah.com";
  const staticRoutes = [
    "",
    "/handbags",
    "/clothing",
    "/shoes",
    "/jewelry",
    "/travel",
    "/shop-the-look",
    "/the-edit",
    "/collections",
    "/stylist",
    "/search",
    "/wishlist",
    "/returns",
    "/orders/track",
    "/login",
    "/register",
    "/account",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/product/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const collectionRoutes = collections.map((c) => ({
    url: `${base}/collections/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const lookRoutes = looks.map((l) => ({
    url: `${base}/shop-the-look#${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...collectionRoutes, ...lookRoutes];
}
