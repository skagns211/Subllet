// import {  } from "../actions/index";

import { LOGIN_USER_INFO } from "../actions";

const loginUserInfo = () =>
  JSON.parse(window.localStorage.getItem("isLogin")) || {
    email: "",
    nickname: "",
    profile: "",
  };

const userReducer = (state = loginUserInfo, action) => {
  // const { email, nickname, profile } = await action.payload;
  switch (action.type) {
    case LOGIN_USER_INFO:
      console.log(action.payload);
      return {
        ...state,
        email: action.payload.email,
        nickname: action.payload.nickname,
        profile: action.payload.profile,
      };
    default:
      return state;
  }
};
console.log(loginUserInfo);
export default userReducer;
