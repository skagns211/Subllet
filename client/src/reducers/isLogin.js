// import {  } from "../actions/index";

import { IS_LOGIN } from "../actions";

const isLogin = () =>
  JSON.parse(window.localStorage.getItem("isLogin")) || false;

const loginReducer = (state = isLogin, action) => {
  // const { email, nickname, profile } = await action.payload;
  switch (action.type) {
    case IS_LOGIN:
      console.log(action.payload);
      return (state = action.payload);
    default:
      return state;
  }
};
export default loginReducer;
