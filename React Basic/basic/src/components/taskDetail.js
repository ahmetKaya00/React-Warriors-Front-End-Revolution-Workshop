import React from 'react'
import { useParams } from 'react-router-dom'

export default function TaskDetail( {tasks}) {
    const {taskId} = useParams();

    const task = tasks[taskId];
  return (
    <div>
        <h1>Göre Detayı:</h1>
        <p>Göre: {task}</p>
    </div>
  )
}
