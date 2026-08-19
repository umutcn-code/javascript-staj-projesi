import { Link } from "react-router-dom";
import { TASK_PRIORITIES, TASK_STATUSES } from "../interfaces/task.js";
import { getPriorityBadgeClasses, getStatusBadgeClasses } from "../utils/taskHelpers.js";

export default function TaskCard({ task, onDeleteClick, onToggleStatus }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusBadgeClasses(
                task.status
              )}`}
            >
              {TASK_STATUSES[task.status]}
            </span>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getPriorityBadgeClasses(
                task.priority
              )}`}
            >
              {TASK_PRIORITIES[task.priority]}
            </span>
          </div>

          <h3 className="mt-3 break-words text-lg font-bold text-slate-950">{task.title}</h3>
          <p className="mt-2 break-words text-sm leading-6 text-slate-600">{task.description}</p>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
            <span>Son tarih: {task.dueDate || "Belirtilmedi"}</span>
            <span>Oluşturma: {new Date(task.createdAt).toLocaleDateString("tr-TR")}</span>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onToggleStatus(task.id)}
            className="focus-ring rounded-md border border-emerald-200 px-3 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            Durum
          </button>
          <Link
            to={`/tasks/edit/${task.id}`}
            className="focus-ring rounded-md border border-blue-200 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Düzenle
          </Link>
          <button
            type="button"
            onClick={() => onDeleteClick(task)}
            className="focus-ring rounded-md border border-rose-200 px-3 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-50"
          >
            Sil
          </button>
        </div>
      </div>
    </article>
  );
}
