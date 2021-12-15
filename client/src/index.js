import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";

axios.defaults.baseURL = "http://ec2-18-212-9-107.compute-1.amazonaws.com";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
