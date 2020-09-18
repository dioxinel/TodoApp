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
  }));
