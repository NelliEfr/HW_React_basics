import React from 'react'
import  style from './index.module.css'
import TasksContainer from '../TasksContainer'

export default function User({ firstname, lastname, address, salary, tasks }) {

    // const user_style = {
    //     border: '1px solid black',
    //     padding: '10px',
    //     margin: '10px',
    //     borderRadius: '10px',
    //     backgroundColor: 'lightblue',
    //     width: '200px'
    // }


  return (
    <div className={style.user_card}>
        <p>First name: { firstname }</p>
        <p>Last name: { lastname }</p>
        <p>Address: { address }</p>
        <p>Salary: { salary }</p>
        <TasksContainer tasks={tasks}/>

    </div>
  )
}
