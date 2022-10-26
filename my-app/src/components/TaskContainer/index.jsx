import React from "react";
import Task from "../Task";

export default function TaskContainer({ tasks }) {
  return (
    <div>
      Lietu saraksts:
      {tasks.map((el) => (
        <Task key={el.id} {...el} />
      ))}
    </div>
  );
}
