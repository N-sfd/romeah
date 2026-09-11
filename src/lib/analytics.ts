export function trackEvent(
  name: string,
  payload?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof window === "undefined") return;
  // Placeholder for GA4 / Segment / PostHog — no third-party scripts until production keys exist.
  if (process.env.NODE_ENV === "development") {
    console.info("[romeah:analytics]", name, payload ?? {});
  }
  window.dispatchEvent(
    new CustomEvent("romeah:analytics", { detail: { name, payload } }),
  );
}
