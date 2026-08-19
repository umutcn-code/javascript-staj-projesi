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
        <p className="text-sm font-semibold text-blue-700">Yeni Kayit</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-950">Gorev Ekle</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Zorunlu alanlari doldurarak yeni bir gorev olustur.
        </p>
      </div>

      <TaskForm submitLabel="Gorevi Kaydet" onSubmit={handleSubmit} />
    </div>
  );
}
