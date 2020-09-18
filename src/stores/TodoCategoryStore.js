import { types } from "mobx-state-tree";
import uuid from "uuid/v4";
import { TodoList } from "./TodoListStore";

export const TodoCategoryStore = types
  .model("TodoCategoryStore", {
    todoList: types.optional(types.array(TodoList), [
      { name: "Main", id: uuid() },
    ]),
    isActive: types.optional(types.number, 0),
  })
  .actions((store) => ({
    addList(name) {
      store.todoList.push(TodoList.create({ name: name, id: uuid() }));
    },
    changeActive(num) {
      store.isActive = num;
    },
  }));
