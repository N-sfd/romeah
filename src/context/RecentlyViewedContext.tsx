"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const KEY = "romeah-recently-viewed";
const MAX = 8;

type RecentlyViewedContextType = {
  ids: number[];
  track: (id: number) => void;
};

const RecentlyViewedContext =
  createContext<RecentlyViewedContextType | null>(null);

export function RecentlyViewedProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<number[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setIds(JSON.parse(raw) as number[]);
    } catch {
      /* ignore */
    }
  }, []);

  const track = useCallback((id: number) => {
    setIds((current) => {
      const next = [id, ...current.filter((x) => x !== id)].slice(0, MAX);
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo(() => ({ ids, track }), [ids, track]);

  return (
    <RecentlyViewedContext.Provider value={value}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const ctx = useContext(RecentlyViewedContext);
  if (!ctx) {
    throw new Error("useRecentlyViewed must be used within provider");
  }
  return ctx;
}
