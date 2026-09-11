function Placeholder({ title }: { title: string }) {
  return (
    <div>
      <h1 className="font-serif text-4xl mb-4">{title}</h1>
      <p className="text-black/55">
        Placeholder — connect Supabase when ready.
      </p>
    </div>
  );
}

export default function AdminOrdersPage() {
  return <Placeholder title="Orders" />;
}
