import React from "react";
import TodoList from "./Todos/TodoList";
import { TodoCategory } from "./Categories/TodoCategory";
import { observer } from "mobx-react";
import "./TodoApp.css";

export function TodoApp() {
  return (
    <div className="todoApp">
      <TodoCategory />
      <TodoList />
    </div>
  );
}

export default observer(TodoApp);
