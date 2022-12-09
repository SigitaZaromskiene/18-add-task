import "./App.css";
import React, { useState } from "react";
import AddMainTask from "./components/Users/AddMainTask";
import AddNewTas from "./components/Users/AddNewTas";

function App() {
  const [addTask, setAddTask] = useState([]);

  const addTaskHandler = (description) => {
    setAddTask((prevTask) => {
      return [...prevTask, { title: description }];
    });
  };
  return (
    <div>
      <AddMainTask onAddTask={addTaskHandler}></AddMainTask>
      <AddNewTas tasks={addTask} />
    </div>
  );
}

export default App;
