import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal.jsx";
import EmptyState from "../components/EmptyState.jsx";
import TaskFilters from "../components/TaskFilters.jsx";
import TaskList from "../components/TaskList.jsx";
import { filterTasks } from "../utils/taskHelpers.js";

export default function Tasks({ tasks, onDeleteTask, onToggleTaskStatus }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [pageMessage, setPageMessage] = useState("");

  const filteredTasks = useMemo(
    () => filterTasks(tasks, searchTerm, statusFilter),
    [tasks, searchTerm, statusFilter]
  );

  function handleDeleteConfirm() {
    if (!taskToDelete) {
      return;
    }

    const isDeleted = onDeleteTask(taskToDelete.id);
    setPageMessage(
      isDeleted ? "Görev silindi." : "Silinmek istenen görev bulunamadi."
    );
    setTaskToDelete(null);
  }

  function handleToggleStatus(taskId) {
    const isUpdated = onToggleTaskStatus(taskId);
    setPageMessage(
      isUpdated ? "Görev durumu güncellendi." : "Güncellenecek görev bulunamadı."
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-blue-700">Görev Yönetimi</p>
          <h1 className="mt-1 text-2xl font-bold text-slate-950">Görevler</h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Kayıtları ara, filtrele, düzenle, sil veya durumunu değiştir.
          </p>
        </div>

        <Link
          to="/tasks/new"
          className="focus-ring inline-flex justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Yeni Görev
        </Link>
      </div>

      {pageMessage && (
        <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-700">
          {pageMessage}
        </div>
      )}

      <TaskFilters
        searchTerm={searchTerm}
        statusFilter={statusFilter}
        onSearchChange={setSearchTerm}
        onStatusChange={setStatusFilter}
      />

      {tasks.length === 0 ? (
        <EmptyState
          title="Henüz kayıt yok"
          description="Listeleme, düzenleme ve silme işlemlerini denemek için yeni bir görev ekleyin."
          actionLabel="İlk Görevi Ekle"
          actionTo="/tasks/new"
        />
      ) : filteredTasks.length === 0 ? (
        <EmptyState
          title="Sonuç bulunamadı"
          description="Arama kelimesini veya durum filtresini değiştirerek tekrar deneyin."
        />
      ) : (
        <TaskList
          tasks={filteredTasks}
          onDeleteClick={setTaskToDelete}
          onToggleStatus={handleToggleStatus}
        />
      )}

      <ConfirmModal
        isOpen={Boolean(taskToDelete)}
        title="Görev silinsin mi?"
        description={`"${
          taskToDelete?.title || "Seçili görev"
        }" kalıcı olarak silinecek. Bu işlem geri alınamaz.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setTaskToDelete(null)}
      />
    </div>
  );
}
