import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [reload, setReload] = useState(false);

  return (
    <div className="App">
      <h1>Gestor de Tareas ✅</h1>
      <TaskForm
        taskToEdit={taskToEdit}
        onSuccess={() => setReload(!reload)}
      />
      <TaskList onEdit={setTaskToEdit} />
    </div>
  );
}

export default App;
