import React, { useState } from "react";
import { Link } from "react-router-dom";

function TaskList({tasks}){
    const[TaskList, setTaskList] = useState(tasks);

    const[newTask, setNewTask] = useState('');

    const handleAddTask = () =>{
        if(newTask.trim() !== ''){
            setTaskList([...TaskList, newTask]);
            setNewTask('');
        }
    }
    return(
        <div>
            <h1>Görev Listesi</h1>
            <ul>
                {TaskList.map((task, index) => (
                    <li key={index}>{task} - <Link to={`/task/${index}`}>Detaya Git</Link></li>
                ))}
            </ul>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Yeni Görev Ekle"></input>
            <button onClick={handleAddTask}>Görev Ekle</button>
        </div>
    );
}

export default TaskList;