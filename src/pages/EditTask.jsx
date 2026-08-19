import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmptyState from "../components/EmptyState.jsx";
import TaskForm from "../components/TaskForm.jsx";

export default function EditTask({ tasks, onUpdateTask }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const task = useMemo(() => tasks.find((item) => item.id === id), [tasks, id]);

  function handleSubmit(taskData) {
    const isUpdated = onUpdateTask(id, taskData);

    if (!isUpdated) {
      setErrorMessage("Guncellenmek istenen gorev bulunamadi.");
      return;
    }

    navigate("/tasks");
  }

  if (!task) {
    return (
      <EmptyState
        title="Gorev bulunamadi"
        description="Duzenlemek istedigin gorev silinmis veya gecersiz bir baglanti kullanilmis olabilir."
        actionLabel="Gorevlere Don"
        actionTo="/tasks"
      />
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-blue-700">Kayit Duzenleme</p>
          <h1 className="mt-1 text-2xl font-bold text-slate-950">Gorevi Duzenle</h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Form mevcut bilgilerle dolduruldu. Degisiklikleri kaydedebilirsin.
          </p>
        </div>

        <Link to="/tasks" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
          Gorevlere don
        </Link>
      </div>

      {errorMessage && (
        <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {errorMessage}
        </div>
      )}

      <TaskForm initialTask={task} submitLabel="Degisiklikleri Kaydet" onSubmit={handleSubmit} />
    </div>
  );
}
