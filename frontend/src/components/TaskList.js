import React, { useEffect, useState } from "react";
import api from "../api";

function TaskList({ onEdit }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await api.get("tasks/");
    setTasks(response.data);
  };

  const deleteTask = async (id) => {
    await api.delete(`tasks/${id}/`);
    fetchTasks();
  };

  return (
    <div>
      <h2>📋 Lista de Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <b>{task.title}</b> - {task.completed ? "✅" : "❌"}
            <button onClick={() => onEdit(task)}>✏️ Editar</button>
            <button onClick={() => deleteTask(task.id)}>🗑️ Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
