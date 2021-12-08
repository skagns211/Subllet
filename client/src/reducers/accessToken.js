// import {  } from "../actions/index";

import { ACCESS_TOKEN } from "../actions";

const accessToken = () =>
  JSON.parse(window.localStorage.getItem("accessToken")) || "";

const accessTokenReducer = (state = accessToken, action) => {
  switch (action.type) {
    case ACCESS_TOKEN:
      console.log(action.payload);
      return (state = action.payload);
    default:
      return state;
  }
};
export default accessTokenReducer;
