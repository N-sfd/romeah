import { getReviewsForProduct } from "@/data/editorial";

export default function ProductReviews({ productId }: { productId: number }) {
  const list = getReviewsForProduct(productId);
  if (list.length === 0) {
    return (
      <section className="max-w-[900px] mx-auto px-6 md:px-10 py-16 border-t border-black/10">
        <p className="text-xs tracking-[0.2em] mb-3">REVIEWS</p>
        <h2 className="font-serif text-3xl mb-4">Be the first to review</h2>
        <p className="text-black/60 text-sm leading-7">
          Reviews will appear here once customers share their experience.
        </p>
      </section>
    );
  }

  const avg =
    list.reduce((sum, r) => sum + r.rating, 0) / Math.max(list.length, 1);

  return (
    <section className="max-w-[900px] mx-auto px-6 md:px-10 py-16 border-t border-black/10">
      <p className="text-xs tracking-[0.2em] mb-3">REVIEWS</p>
      <h2 className="font-serif text-3xl mb-2">
        {avg.toFixed(1)} · {list.length} review{list.length === 1 ? "" : "s"}
      </h2>
      <div className="mt-10 space-y-10">
        {list.map((review) => (
          <article key={review.id} className="border-b border-black/10 pb-8">
            <div className="flex justify-between gap-4 mb-3">
              <p className="text-xs tracking-[0.14em]">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </p>
              <p className="text-xs text-black/45">{review.date}</p>
            </div>
            <h3 className="font-serif text-2xl mb-2">{review.title}</h3>
            <p className="text-sm text-black/55 mb-3">{review.author}</p>
            <p className="leading-7 text-black/70">{review.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
