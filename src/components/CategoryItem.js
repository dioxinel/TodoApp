import React from "react";

export function CategoryItem({ data, idx }) {
  return <li id={idx}>{data}</li>;
}
