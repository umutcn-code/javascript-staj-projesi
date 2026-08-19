export default function StatCard({ label, value, tone }) {
  const tones = {
    blue: "border-blue-100 bg-blue-50 text-blue-700",
    emerald: "border-emerald-100 bg-emerald-50 text-emerald-700",
    amber: "border-amber-100 bg-amber-50 text-amber-700",
  };

  return (
    <article className={`rounded-lg border p-5 shadow-sm ${tones[tone] || tones.blue}`}>
      <p className="text-sm font-medium opacity-80">{label}</p>
      <p className="mt-3 text-3xl font-bold">{value}</p>
    </article>
  );
}
