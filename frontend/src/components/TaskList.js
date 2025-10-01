import React, { useEffect, useState } from "react";
import api from "../api";
import "../App.css";

function TaskList({ onEdit, reload }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, [reload]); // 👈 cada vez que reload cambie, recarga

  const fetchTasks = async () => {
    const response = await api.get("tasks/");
    setTasks(response.data);
  };

  const deleteTask = async (id) => {
    await api.delete(`tasks/${id}/`);
    fetchTasks(); // refresco inmediato
  };

  return (
    <div>
      <h2 className="text-primary">📋 Lista de Tareas</h2>
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <div>
            <b>{task.title}</b> <br />
            <small className="text-muted">
              {task.completed ? "✅ Completada" : "❌ Pendiente"}
            </small>
          </div>
          <div className="task-actions">
            <button
              className="btn btn-sm btn-outline-warning"
              onClick={() => onEdit(task)}
            >
              ✏️ Editar
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => deleteTask(task.id)}
            >
              🗑️ Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
