import React, { useState, useEffect } from "react";
import api from "../api";
import "../App.css";

function TaskForm({ taskToEdit, onSuccess }) {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setCompleted(taskToEdit.completed);
    }
  }, [taskToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskToEdit) {
      await api.put(`tasks/${taskToEdit.id}/`, { title, completed });
    } else {
      await api.post("tasks/", { title, completed });
    }
    setTitle("");
    setCompleted(false);
    onSuccess(); // 👈 refresca automáticamente
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2>{taskToEdit ? "✏️ Editar Tarea" : "➕ Nueva Tarea"}</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Título de la tarea..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <label className="form-check-label">Completada</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
}

export default TaskForm;
