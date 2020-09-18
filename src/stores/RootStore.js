import { types } from "mobx-state-tree";
import { TodoCategoryStore } from "./TodoCategoryStore";

export const RootStore = types.model("RootStore", {
  todoCategory: types.optional(TodoCategoryStore, {}),
});
