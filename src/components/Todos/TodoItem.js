import { observer } from "mobx-react";
import React from "react";

function TodoItem({ data, idx }) {
  function handleClick() {
    data.complete();
  }

  if (data.isCompleted) {
    return (
      <li className={"completedTodo"} id={idx} onClick={handleClick}>
        {data.todo}
      </li>
    );
  } else {
    return (
      <li className={"uncompletedTodo"} id={idx} onClick={handleClick}>
        {data.todo}
      </li>
    );
  }
}

export default observer(TodoItem);
