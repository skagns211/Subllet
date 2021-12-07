import { combineReducers } from "redux";
import loginUserInfo from "./loginUserInfo";
import isLogin from "./isLogin";
import accessToken from "./accessToken";
import kakaoAuthCode from "./kakaoAuthCode";
import authUserInfo from "./authUserInfo";

// reducers폴더의 reducer파일 import 후 combineReducers 함수의 인자로 넣어서 combine

const rootReducer = combineReducers({
  loginUserInfo,
  isLogin,
  accessToken,
  kakaoAuthCode,
  authUserInfo,
});

export default rootReducer;
