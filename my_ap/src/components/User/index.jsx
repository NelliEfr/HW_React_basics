import React from 'react'
import s from './index.module.css'
import TasksContainer from '../TasksContainer'

export default function User({id, firstname, lastname, address, salary, tasks}) {

  return (
    <div className={s.user_card}>
        <p>ID: {id}</p>
        <p>First name: {firstname}</p>
        <p>Last name: {lastname}</p>
        <p>Address: {address}</p>
        <p>Salary {salary}</p>
        <TasksContainer tasks={tasks}/>
    </div>
  )
}
