import React from "react";
import { useStore } from "../stores/createStore";
import { values } from "mobx";
import { observer } from "mobx-react";
import { CategoryItem } from "./CategoryItem";

export function Categories() {
  const store = useStore();

  function handleClick(e) {
    const listElem = e.target.closest("li");
    if (!listElem) return;
    const elem = document.querySelector(".activeCategory");
    if (elem) {
      elem.classList.remove("activeCategory");
    }

    store.todoCategory.changeActive(+listElem.id);
    listElem.classList.add("activeCategory");
  }

  return (
    <div>
      <ul onClick={handleClick}>
        {values(store.todoCategory.todoList).map((elem) => {
          return (
            <CategoryItem
              key={store.todoCategory.todoList.indexOf(elem)}
              idx={store.todoCategory.todoList.indexOf(elem)}
              data={elem.name}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default observer(Categories);
