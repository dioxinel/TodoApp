import React from "react";
import { createStore, Provider } from "./stores/createStore";
import { TodoApp } from "./components/TodoApp";

const store = createStore();

function App() {
  return (
    <div className="App">
      <Provider value={store}>
        <TodoApp />
      </Provider>
    </div>
  );
}

export default App;
