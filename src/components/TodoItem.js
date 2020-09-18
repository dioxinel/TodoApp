import React from "react";

export function TodoItem({ data, idx }) {
  function handleClick(e) {
    e.target.classList.add("completedTodo");
    data.complete();
    if (data.isCompleted) {
      e.target.classList.remove("uncompletedTodo");
      e.target.classList.add("completedTodo");
    } else {
      e.target.classList.remove("completedTodo");
      e.target.classList.add("uncompletedTodo");
    }
  }
  return (
    <li id={idx} onClick={handleClick}>
      {data.todo}
    </li>
  );
}
