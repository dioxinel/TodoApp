import React from "react";
import { useStore } from "../stores/createStore";
import { values } from "mobx";
import { observer } from "mobx-react";
import { TodoItem } from "./TodoItem";

export function Todos() {
  const store = useStore();
  const activeCategory = store.todoCategory.isActive;
  return (
    <div>
      <ul>
        {values(store.todoCategory.todoList[activeCategory].todos).map(
          (elem) => {
            return <TodoItem key={elem.id} idx={elem.id} data={elem} />;
          }
        )}
      </ul>
    </div>
  );
}

export default observer(Todos);
