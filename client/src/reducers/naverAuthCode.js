// import {  } from "../actions/index";

import { NAVER_AUTH_CODE } from "../actions";

const naverAuthCode = "";

const naverAuthReducer = (state = naverAuthCode, action) => {
  // const { email, nickname, profile } = await action.payload;
  switch (action.type) {
    case NAVER_AUTH_CODE:
      console.log(action.payload);
      return (state = action.payload);
    default:
      return state;
  }
};
export default naverAuthReducer;
