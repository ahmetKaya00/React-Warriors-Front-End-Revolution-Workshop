import React from "react";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/taskDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(){
  const tasks = ['Görev 1','Görev 2','Görev 3','Görev 4'];
  return(
    <Router>
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks}/>}></Route>
        <Route path="/task/:taskId" element={<TaskDetail tasks={tasks}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;