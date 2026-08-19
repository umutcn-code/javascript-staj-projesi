import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import EditTask from "./pages/EditTask.jsx";
import Home from "./pages/Home.jsx";
import NewTask from "./pages/NewTask.jsx";
import NotFound from "./pages/NotFound.jsx";
import Tasks from "./pages/Tasks.jsx";
import { getTasksFromStorage, saveTasksToStorage } from "./services/localStorageService.js";
import { createTaskId } from "./utils/taskHelpers.js";

export default function App() {
  const [tasks, setTasks] = useState(() => getTasksFromStorage());
  const [storageError, setStorageError] = useState("");

  useEffect(() => {
    const isSaved = saveTasksToStorage(tasks);
    setStorageError(isSaved ? "" : "Veriler tarayici hafizasina kaydedilemedi.");
  }, [tasks]);

  function addTask(taskData) {
    const newTask = {
      ...taskData,
      id: createTaskId(),
      createdAt: new Date().toISOString(),
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
    return newTask.id;
  }

  function updateTask(taskId, taskData) {
    let taskExists = false;

    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id !== taskId) {
          return task;
        }

        taskExists = true;
        return {
          ...task,
          ...taskData,
        };
      })
    );

    return taskExists;
  }

  function deleteTask(taskId) {
    const taskExists = tasks.some((task) => task.id === taskId);

    if (!taskExists) {
      return false;
    }

    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
    return true;
  }

  function toggleTaskStatus(taskId) {
    const task = tasks.find((item) => item.id === taskId);

    if (!task) {
      return false;
    }

    updateTask(taskId, {
      status: task.status === "completed" ? "pending" : "completed",
    });

    return true;
  }

  return (
    <Routes>
      <Route element={<Layout storageError={storageError} />}>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route
          path="/tasks"
          element={
            <Tasks
              tasks={tasks}
              onDeleteTask={deleteTask}
              onToggleTaskStatus={toggleTaskStatus}
            />
          }
        />
        <Route path="/tasks/new" element={<NewTask onAddTask={addTask} />} />
        <Route
          path="/tasks/edit/:id"
          element={<EditTask tasks={tasks} onUpdateTask={updateTask} />}
        />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
