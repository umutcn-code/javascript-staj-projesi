import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EMPTY_TASK } from "../interfaces/task.js";

export default function TaskForm({ initialTask = EMPTY_TASK, submitLabel, onSubmit }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: initialTask.title || "",
    description: initialTask.description || "",
    priority: initialTask.priority || "medium",
    status: initialTask.status || "pending",
    dueDate: initialTask.dueDate || "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function validateForm() {
    const nextErrors = {};

    if (!formData.title.trim()) {
      nextErrors.title = "Baslik alani zorunludur.";
    }

    if (!formData.description.trim()) {
      nextErrors.description = "Aciklama alani zorunludur.";
    }

    if (!formData.dueDate) {
      nextErrors.dueDate = "Son tarih secilmelidir.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSubmit({
      ...formData,
      title: formData.title.trim(),
      description: formData.description.trim(),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-5">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Baslik</span>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Orn: Proje README dosyasini hazirla"
            className="focus-ring w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-blue-500"
          />
          {errors.title && <span className="mt-1 block text-xs text-rose-600">{errors.title}</span>}
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Aciklama</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Gorevin detaylarini yazin"
            className="focus-ring w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-blue-500"
          />
          {errors.description && (
            <span className="mt-1 block text-xs text-rose-600">{errors.description}</span>
          )}
        </label>

        <div className="grid gap-4 md:grid-cols-3">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Oncelik</span>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="focus-ring w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500"
            >
              <option value="low">Dusuk</option>
              <option value="medium">Orta</option>
              <option value="high">Yuksek</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Durum</span>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="focus-ring w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500"
            >
              <option value="pending">Bekliyor</option>
              <option value="completed">Tamamlandi</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Son Tarih</span>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="focus-ring w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500"
            />
            {errors.dueDate && (
              <span className="mt-1 block text-xs text-rose-600">{errors.dueDate}</span>
            )}
          </label>
        </div>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => navigate("/tasks")}
          className="focus-ring rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Iptal
        </button>
        <button
          type="submit"
          className="focus-ring rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
