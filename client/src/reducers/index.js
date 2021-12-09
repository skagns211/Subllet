import { combineReducers } from "redux";
import loginUserInfo from "./loginUserInfo";
import isLogin from "./isLogin";
import accessToken from "./accessToken";
import authCode from "./authCode";
import naverAuthCode from "./naverAuthCode";
import authUserInfo from "./authUserInfo";
import selectPlan from "./selectPlan";
import service from "./service";
import services from "./services";

// reducers폴더의 reducer파일 import 후 combineReducers 함수의 인자로 넣어서 combine

const rootReducer = combineReducers({
  loginUserInfo,
  isLogin,
  accessToken,
  authCode,
  naverAuthCode,
  authUserInfo,
  selectPlan,
  service,
  services,
});

export default rootReducer;
