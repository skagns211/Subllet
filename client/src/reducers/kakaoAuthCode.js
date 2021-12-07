// import {  } from "../actions/index";

import { KAKAO_AUTH_CODE } from "../actions";

const kakaoAuthCode = "";

const kakaAuthReducer = (state = kakaoAuthCode, action) => {
  // const { email, nickname, profile } = await action.payload;
  switch (action.type) {
    case KAKAO_AUTH_CODE:
      console.log(action.payload);
      return (state = action.payload);
    default:
      return state;
  }
};
export default kakaAuthReducer;
