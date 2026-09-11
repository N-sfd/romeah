"use client";

import { useEffect } from "react";
import { useRecentlyViewed } from "@/context/RecentlyViewedContext";

export default function TrackProductView({ productId }: { productId: number }) {
  const { track } = useRecentlyViewed();
  useEffect(() => {
    track(productId);
  }, [productId, track]);
  return null;
}
