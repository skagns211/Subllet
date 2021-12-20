import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginUserInfo from "./loginUserInfo";
import isLogin from "./isLogin";
import authCode from "./authCode";
import naverAuthCode from "./naverAuthCode";
import authUserInfo from "./authUserInfo";
import selectPlan from "./selectPlan";
import service from "./service";
import services from "./services";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  loginUserInfo,
  isLogin,
  authCode,
  naverAuthCode,
  authUserInfo,
  selectPlan,
  service,
  services,
});

export default persistReducer(persistConfig, rootReducer);
