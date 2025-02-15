import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TaskContext } from '../context/TaskContext';
import { Alert, Button, Input, ListGroup, ListGroupItem } from 'reactstrap';
import alertify from 'alertifyjs';

export default function TaskDetail( ) {
    const {taskId} = useParams();

    const {taskList, setTaskList} = useContext(TaskContext);

    const[updateTask, setUpdateTask] = useState('');

    const task = taskList[taskId];
    const navigate = useNavigate();

    if(!task){
      return <Alert color='danger'>Görev Bulunamadı</Alert>
    }
    const handleUpdateTask = () =>{
      if(updateTask.trim() === ''){
        alertify.error('Görev adı boş olamaz!');
        return;
      }
      const newTaskList = [...taskList];
      newTaskList[taskId] = updateTask;
      setTaskList(newTaskList);
      alertify.success('Görev başarıyla güncellendi!');
      setUpdateTask('');
    }
    const handleDeleteTask = () => {
      const newTaskList = taskList.filter((_, index) => index !== parseInt(taskId));
      setTaskList(newTaskList);
      alertify.success('Görev Başarılı bir şekilde kaldırıldı!');
      navigate('/');
    }
  return (
    <div className='container mt-4'>
        <h1>Görev Detayı:</h1>
        <ListGroup>
          <ListGroupItem>
            <strong>Görev: </strong>{task}
          </ListGroupItem>
        </ListGroup>

        <div className='mt-4'>
            <Input
              type='text'
              value={updateTask}
              onChange={(e) => setUpdateTask(e.target.value)}
              placeholder='Görev Güncelle'
              className='mb-2'
            ></Input>
            <Button color='primary' onClick={handleUpdateTask} className='me-2'>Güncelle</Button>
            <Button color='danger' onClick={handleDeleteTask} className='me-2'>Sil</Button>
        </div>
    </div>
  )
}
