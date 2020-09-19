import { observer } from "mobx-react";
import React from "react";
import { useStore } from "../../stores/createStore";

function CategoryItem({ data, idx }) {
  const store = useStore();
  const uncompletedTodos = store.todoCategory.todoList[idx].uncompleted;
  return <li id={idx}>{`${data}  ${uncompletedTodos}`}</li>;
}

export default observer(CategoryItem);
