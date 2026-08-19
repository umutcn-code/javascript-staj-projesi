import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm.jsx";

export default function NewTask({ onAddTask }) {
  const navigate = useNavigate();

  function handleSubmit(taskData) {
    onAddTask(taskData);
    navigate("/tasks");
  }

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-semibold text-blue-700">Yeni Kayıt</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-950">Görev Ekle</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Zorunlu alanları doldurarak yeni bir görev oluştur.
        </p>
      </div>

      <TaskForm submitLabel="Görevi Kaydet" onSubmit={handleSubmit} />
    </div>
  );
}
