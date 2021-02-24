import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";
import Map from "./components/Map";

// Creating a provider to redux
const store = createStore(reducer);

// Render our Map with redux provider
ReactDOM.render(
  <Provider store={store}>
    <Map />
  </Provider>,
  document.getElementById("root")
);
