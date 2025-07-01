// src/components/TaskForm.jsx
import { useState } from 'react';

export default function TaskForm({ onAdd }) {
    // State to manage the input value for the new task title
  const [title, setTitle] = useState('');
    // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, completed: false });
    setTitle('');
  };
    // Render the form with an input field and a submit button
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border px-3 py-2 rounded w-full"
        placeholder="Add a new task..."
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Add
      </button>
    </form>
  );
}