import { types } from "mobx-state-tree";
import { Todo } from "./TodoStore";
import uuid from "uuid/v4";

export const TodoList = types
  .model("TodoList", {
    todos: types.array(Todo, []),
    name: types.string,
    id: types.string,
  })
  .actions((store) => ({
    addTodo(todo) {
      store.todos.unshift(Todo.create({ todo: todo, id: uuid() }));
    },
  }))
  .views((store) => ({
    get uncompleted() {
      let num = 0;
      store.todos.map((elem) => {
        if (!elem.isCompleted) {
          num++;
        }
        return num;
      });
      return num;
    },
  }));
