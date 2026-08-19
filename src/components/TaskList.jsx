import TaskCard from "./TaskCard.jsx";

export default function TaskList({ tasks, onDeleteClick, onToggleStatus }) {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDeleteClick={onDeleteClick}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
}
