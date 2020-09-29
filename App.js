import React from "react";
import { Provider } from "react-redux";

import GameBoard from "./components/GameBoard";
import store from "./redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <GameBoard />
    </Provider>
  );
}
