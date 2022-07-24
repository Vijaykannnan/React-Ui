import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";
import Content from "./components/content/content";
import Menu from "./components/menus/menu";
import { legacy_createStore as createStore } from "redux";
import ReducerData from "./components/reducer/reducer";

import { Provider } from "react-redux";
let store = createStore(ReducerData);
function OverAllSite() {
  return (
    <Provider store={store}>
      <Header />
      <Menu />
      <Content />
    </Provider>
  );
}

ReactDOM.render(<OverAllSite />, document.querySelector("#root"));
