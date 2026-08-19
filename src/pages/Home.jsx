import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState.jsx";
import StatCard from "../components/StatCard.jsx";
import { TASK_PRIORITIES, TASK_STATUSES } from "../interfaces/task.js";
import { getPriorityBadgeClasses, getRecentTasks, getStatusBadgeClasses, getTaskStats } from "../utils/taskHelpers.js";

export default function Home({ tasks }) {
  const stats = getTaskStats(tasks);
  const recentTasks = getRecentTasks(tasks);

  return (
    <div className="space-y-6">
      <section className="rounded-lg bg-slate-950 px-5 py-6 text-white shadow-sm sm:px-7">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-200">TaskFlow Dashboard</p>
            <h1 className="mt-2 text-2xl font-bold tracking-normal sm:text-3xl">
              Gorevlerini tek panelden takip et.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Toplam gorev durumunu, son eklenen kayitlari ve tamamlanma bilgisini burada
              gorebilirsin.
            </p>
          </div>

          <Link
            to="/tasks/new"
            className="focus-ring inline-flex w-full justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400 sm:w-auto"
          >
            Yeni Gorev Ekle
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Toplam Kayit" value={stats.totalCount} tone="blue" />
        <StatCard label="Tamamlanan" value={stats.completedCount} tone="emerald" />
        <StatCard label="Bekleyen" value={stats.pendingCount} tone="amber" />
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-950">Son Eklenen Gorevler</h2>
            <p className="mt-1 text-sm text-slate-500">En yeni kayitlar burada listelenir.</p>
          </div>
          <Link to="/tasks" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
            Tumunu gor
          </Link>
        </div>

        <div className="mt-5">
          {recentTasks.length === 0 ? (
            <EmptyState
              title="Henuz gorev yok"
              description="Ilk gorevini ekleyerek dashboard alanini doldurabilirsin."
              actionLabel="Gorev Ekle"
              actionTo="/tasks/new"
            />
          ) : (
            <div className="divide-y divide-slate-100">
              {recentTasks.map((task) => (
                <div key={task.id} className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0">
                    <h3 className="break-words text-sm font-bold text-slate-950">{task.title}</h3>
                    <p className="mt-1 line-clamp-2 break-words text-sm text-slate-500">
                      {task.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusBadgeClasses(task.status)}`}>
                      {TASK_STATUSES[task.status]}
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getPriorityBadgeClasses(task.priority)}`}>
                      {TASK_PRIORITIES[task.priority]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
