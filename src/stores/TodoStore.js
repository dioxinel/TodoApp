import { types } from "mobx-state-tree";

export const Todo = types
  .model("Todo", {
    todo: types.string,
    id: types.string,
    isCompleted: false,
  })
  .actions((store) => ({
    complete() {
      store.isCompleted = !store.isCompleted;
    },
  }));
