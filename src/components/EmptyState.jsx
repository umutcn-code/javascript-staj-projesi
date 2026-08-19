import { Link } from "react-router-dom";

export default function EmptyState({
  title = "Kayit bulunamadi",
  description = "Listeye uygun bir gorev yok.",
  actionLabel,
  actionTo,
}) {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-slate-100 text-xl font-bold text-slate-500">
        !
      </div>
      <h2 className="mt-4 text-lg font-bold text-slate-950">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">{description}</p>

      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          className="mt-5 inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
