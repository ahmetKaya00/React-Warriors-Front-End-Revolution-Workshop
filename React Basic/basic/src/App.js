import React from "react";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/taskDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";

function App(){
  return(
    <TaskProvider>
    <Router>
      <Routes>
        <Route path="/" element={<TaskList/>}></Route>
        <Route path="/task/:taskId" element={<TaskDetail/>}></Route>
      </Routes>
    </Router>
    </TaskProvider>
  );
}

export default App;