import { applySnapshot, onSnapshot } from "mobx-state-tree";

export function createPersist(store) {
  function rehydrate() {
    const snapshot = window.localStorage.getItem("___key");

    if (snapshot) {
      applySnapshot(store, JSON.parse(snapshot));
    }
  }
  function purge() {
    window.localStorage.removeItem("___key");
  }

  onSnapshot(store, (snapshot) => {
    window.localStorage.setItem("___key", JSON.stringify(snapshot));
  });

  return {
    rehydrate,
    purge,
  };
}
