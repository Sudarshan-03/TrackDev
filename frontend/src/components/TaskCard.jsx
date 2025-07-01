// src/components/TaskCard.jsx

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center">
      <div
        className={`text-lg ${task.completed ? 'line-through text-gray-400' : ''}`}
        onClick={() => onToggle(task)}
      >
        {task.title}
      </div>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => onDelete(task)}
      >
        🗑️
      </button>
    </div>
  );
}