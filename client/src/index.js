import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";

axios.defaults.baseURL = "https://localhost:4000";
// axios.defaults.baseURL = "https://server.subllet.co.kr";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
