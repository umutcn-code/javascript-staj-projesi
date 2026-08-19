const TASKS_STORAGE_KEY = "taskflow_tasks";

export function getTasksFromStorage() {
  try {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);

    if (!storedTasks) {
      return [];
    }

    const parsedTasks = JSON.parse(storedTasks);
    return Array.isArray(parsedTasks) ? parsedTasks : [];
  } catch (error) {
    console.error("LocalStorage verisi okunamadi:", error);
    return [];
  }
}

export function saveTasksToStorage(tasks) {
  try {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    return true;
  } catch (error) {
    console.error("LocalStorage verisi kaydedilemedi:", error);
    return false;
  }
}
