import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [reload, setReload] = useState(false);

  // función para refrescar
  const handleReload = () => setReload(!reload);

  return (
    <div className="App">
      <h1>Gestor de Tareas ✅</h1>
      <TaskForm 
        taskToEdit={taskToEdit} 
        onSuccess={handleReload} 
      />
      <TaskList 
        onEdit={setTaskToEdit} 
        reload={reload} 
      />
    </div>
  );
}

export default App;
