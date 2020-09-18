import React from "react";
import { useStore } from "../stores/createStore";

function AddCategory() {
  const store = useStore();

  function handleClick() {
    const input = document.getElementById("input");
    store.todoCategory.addList(input.value);
    input.value = "";
  }
  return (
    <div>
      <input id={"input"}></input>
      <button onClick={handleClick}>Add Category</button>
    </div>
  );
}

export default AddCategory;
