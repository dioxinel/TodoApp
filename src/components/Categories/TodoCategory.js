import React from "react";
import Categories from "./Categories";
import AddCategory from "./AddCategory";

export function TodoCategory() {
  return (
    <div className={"list"}>
      <Categories />
      <AddCategory />
    </div>
  );
}

export default TodoCategory;
