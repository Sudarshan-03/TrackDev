// src/pages/Tasks.jsx
import { useState , useEffect } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';

const API_URL = 'http://localhost:5001/api/tasks';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend
  useEffect(() => {
    axios.get(API_URL)
      .then((response) => 
        setTasks(response.data));
  }, []);
 const addTask = async (task) => {
  try {
    const res = await axios.post(API_URL, task);
    setTasks(prevTasks => [res.data, ...prevTasks]);
  } catch (err) {
    console.error("Failed to add task:", err);
  }
};

  const toggleTask = async (task) => {
  try {
    const res = await axios.patch(`${API_URL}/${task._id}`, {
      completed: !task.completed,
    });
    setTasks(prevTasks =>
      prevTasks.map(t => (t._id === task._id ? res.data : t))
    );
  } catch (err) {
    console.error("Failed to toggle task:", err);
  }
};
const deleteTask = async (task) => {
  try {
    await axios.delete(`${API_URL}/${task._id}`);
    setTasks(prevTasks => prevTasks.filter(t => t._id !== task._id));
  } catch (err) {
    console.error("Failed to delete task:", err);
  }
};


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📝 Tasks</h2>
      <TaskForm onAdd={addTask} />
      <div className="mt-6 space-y-3">
        {tasks.length === 0 && <p className="text-gray-500">No tasks yet.</p>}
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}