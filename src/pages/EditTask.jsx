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
      setErrorMessage("Güncellenmek istenen görev bulunamadı.");
      return;
    }

    navigate("/tasks");
  }

  if (!task) {
    return (
      <EmptyState
        title="Görev bulunamadı"
        description="Düzenlemek istediğin görev silinmiş veya geçersiz bir bağlantı kullanılmış olabilir."
        actionLabel="Görevlere Dön"
        actionTo="/tasks"
      />
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-blue-700">Kayıt Düzenleme</p>
          <h1 className="mt-1 text-2xl font-bold text-slate-950">Görevi Düzenle</h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Form mevcut bilgilerle dolduruldu. Değişiklikleri kaydedebilirsin.
          </p>
        </div>

        <Link to="/tasks" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
          Görevlere dön
        </Link>
      </div>

      {errorMessage && (
        <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {errorMessage}
        </div>
      )}

      <TaskForm initialTask={task} submitLabel="Değişiklikleri Kaydet" onSubmit={handleSubmit} />
    </div>
  );
}
