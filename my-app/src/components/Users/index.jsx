import React from "react";
import s from "./index.module.css";
import TaskContainer from "../TaskContainer";

export default function User({
  id,
  firstname,
  lastname,
  address,
  salary,
  tasks,
}) {
  return (
    <div className={s.user_card}>
      <p>id: {id}</p>
      <p>First name: {firstname} </p>
      <p>Last name: {lastname} </p>
      <p>Address: {address}</p>
      <p>Salary: {salary}</p>
      <TaskContainer tasks={tasks} />
    </div>
  );
}
