import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import alertify from "alertifyjs";
import { Alert, Button, Input, ListGroup, ListGroupItem } from "reactstrap";

function TaskList(){
    const {taskList, addTask} = useContext(TaskContext);

    const[newTask, setNewTask] = useState('');

    const[error,setError] = useState('');

    const handleAddTask = () =>{
        if(newTask.trim() === ''){
            setError('Görev adı boş olamaz');
            return;
        }
        addTask(newTask);
        setNewTask('');
        setError('');
        alertify.success('Görev başarıyla eklendi!');
    }
    return(
        <div className="container m-4">
            <h1 className="mb-4">Görev Listesi</h1>
            {taskList.length === 0 ? (
                <Alert color="warning">Henüz bir görev eklenmedi</Alert>
            ) : (
            <ListGroup>
                {taskList.map((task, index) => (
                    <ListGroupItem className="mb-2" key={index}>{task} - <Link className="btn btn-secondary" to={`/task/${index}`}>Detaya Git</Link></ListGroupItem>
                ))}
            </ListGroup>
            )}
            
            <Input className="mb-3" type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Yeni Görev Ekle"></Input>
            <Button className="mb-2" onClick={handleAddTask}>Görev Ekle</Button>
            {error && <Alert color="danger">{error}</Alert>}
        </div>
    );
}

export default TaskList;