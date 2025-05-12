import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      setTasks([...tasks, { title: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTask = idx => {
    setTasks(tasks =>
      tasks.map((task, i) =>
        i === idx ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Todo App</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="add a new task"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, idx) => (
          <li
            key={idx}
            className={`bg-gray-50 px-3 py-2 rounded border border-gray-200 text-gray-800 cursor-pointer ${task.completed ? 'line-through' : ''}`}
            onClick={() => toggleTask(idx)}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp; 