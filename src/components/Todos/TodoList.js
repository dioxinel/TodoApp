import React from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

function TodoList() {
  return (
    <div className={"list"}>
      <Todos />
      <AddTodo />
    </div>
  );
}
export default TodoList;
