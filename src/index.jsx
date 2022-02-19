import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
