import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white border-2px p-5 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-black mb-4">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow p-2 rounded-l-lg border-2 focus:outline-none"
            
          />
          <button
            onClick={addTask}
            className="bg-violet-500 text-white px-4 py-2 rounded-r-lg"
          >
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                className="mr-2"
              />
              <span
                className={`flex-grow text-black ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.text}
              </span>
              <button
                onClick={() => toggleComplete(task.id)}
                className="text-green-500 mx-1"
              >
                ✅
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 mx-1"
              >
                🛒
              </button>
              <button
                onClick={() => editTask(task.id, prompt("New text:", task.text))}
                className="text-yellow-500 mx-1"
              >
                🖍️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default App;