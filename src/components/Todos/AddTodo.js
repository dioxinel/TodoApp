import { observer } from "mobx-react";
import React from "react";
import { useStore } from "../../stores/createStore";

export function AddTodo() {
  const store = useStore();

  const activeCategory = store.todoCategory.isActive;
  function handleClick() {
    const input = document.getElementById("inputTodo");
    store.todoCategory.todoList[activeCategory].addTodo(input.value);
    input.value = "";
  }

  return (
    <div className={"addItem"}>
      <input id={"inputTodo"}></input>
      <button onClick={handleClick}>add todo</button>
    </div>
  );
}

export default observer(AddTodo);
