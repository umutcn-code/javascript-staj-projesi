export function createTaskId() {
  return `task-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function getTaskStats(tasks) {
  const completedCount = tasks.filter((task) => task.status === "completed").length;
  const pendingCount = tasks.filter((task) => task.status === "pending").length;

  return {
    totalCount: tasks.length,
    completedCount,
    pendingCount,
  };
}

export function getRecentTasks(tasks, limit = 4) {
  return [...tasks]
    .sort((firstTask, secondTask) => {
      return new Date(secondTask.createdAt) - new Date(firstTask.createdAt);
    })
    .slice(0, limit);
}

export function filterTasks(tasks, searchTerm, statusFilter) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  return tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(normalizedSearch) ||
      task.description.toLowerCase().includes(normalizedSearch);

    const matchesStatus = statusFilter === "all" || task.status === statusFilter;

    return matchesSearch && matchesStatus;
  });
}

export function getStatusBadgeClasses(status) {
  if (status === "completed") {
    return "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200";
  }

  return "bg-amber-100 text-amber-700 ring-1 ring-amber-200";
}

export function getPriorityBadgeClasses(priority) {
  const classes = {
    low: "bg-slate-100 text-slate-700 ring-1 ring-slate-200",
    medium: "bg-blue-100 text-blue-700 ring-1 ring-blue-200",
    high: "bg-rose-100 text-rose-700 ring-1 ring-rose-200",
  };

  return classes[priority] || classes.medium;
}
