import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";
import Map from "./components/Map";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Map />
  </Provider>,
  document.getElementById("root")
);
