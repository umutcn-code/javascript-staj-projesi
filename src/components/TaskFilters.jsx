export default function TaskFilters({ searchTerm, statusFilter, onSearchChange, onStatusChange }) {
  return (
    <div className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_220px]">
      <label className="block">
        <span className="mb-1 block text-sm font-semibold text-slate-700">Arama</span>
        <input
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Baslik veya aciklama ara"
          className="focus-ring w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-semibold text-slate-700">Durum</span>
        <select
          value={statusFilter}
          onChange={(event) => onStatusChange(event.target.value)}
          className="focus-ring w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500"
        >
          <option value="all">Tumu</option>
          <option value="pending">Bekleyen</option>
          <option value="completed">Tamamlanan</option>
        </select>
      </label>
    </div>
  );
}
