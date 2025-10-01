import React, { useState, useEffect } from "react";
import api from "../api";

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
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{taskToEdit ? "✏️ Editar Tarea" : "➕ Nueva Tarea"}</h2>
      <input
        type="text"
        placeholder="Título..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Completada
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default TaskForm;
