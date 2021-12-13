// import {  } from "../actions/index";

import { LOGIN_USER_INFO, SUB_COUNT } from "../actions";

const loginUserInfo = {
  email: "",
  nickname: "",
  profile: "",
  total_subscribes: 0,
  total_price: 0,
  total_scraps: 0,
};

const userReducer = (state = loginUserInfo, action) => {
  // const { email, nickname, profile } = await action.payload;
  switch (action.type) {
    case LOGIN_USER_INFO:
      return {
        ...state,
        email: action.payload.email,
        nickname: action.payload.nickname,
        profile: action.payload.profile,
      };
    case SUB_COUNT:
      return {
        ...state,
        total_subscribes: action.payload.total_subscribes,
        total_price: action.payload.total_price,
        total_scrpas: action.payload.total_scraps,
      };
    default:
      return state;
  }
};
export default userReducer;
