export default function AdminDashboard() {
  return (
    <div>
      <h1 className="font-serif text-4xl mb-4">Dashboard</h1>
      <p className="text-black/60 max-w-xl leading-7">
        Admin shell is ready. Connect Supabase products, orders, and inventory
        when the storefront experience is locked.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {["Products", "Orders", "Inventory"].map((card) => (
          <div
            key={card}
            className="border border-black/10 bg-white p-6 min-h-32"
          >
            <p className="text-xs tracking-[0.14em] text-black/45 mb-3">
              {card.toUpperCase()}
            </p>
            <p className="font-serif text-3xl">—</p>
          </div>
        ))}
      </div>
    </div>
  );
}
