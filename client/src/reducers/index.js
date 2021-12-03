import { combineReducers } from "redux";
import userReducer from "./userReducer";

// reducers폴더의 reducer파일 import 후 combineReducers 함수의 인자로 넣어서 combine

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
