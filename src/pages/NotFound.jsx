import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
      <p className="text-sm font-semibold text-blue-700">404</p>
      <h1 className="mt-2 text-2xl font-bold text-slate-950">Sayfa bulunamadı</h1>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
        Aradığın sayfa taşınmış, silinmiş veya hiç oluşturulmamış olabilir.
      </p>
      <Link
        to="/"
        className="focus-ring mt-6 inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Dashboard'a Dön
      </Link>
    </div>
  );
}
