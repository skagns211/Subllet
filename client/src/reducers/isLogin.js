import { IS_LOGIN } from "../actions";

const isLogin = JSON.parse(window.localStorage.getItem("isLogin")) || false;

const loginReducer = (state = isLogin, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return (state = action.payload);
    default:
      return state;
  }
};
export default loginReducer;
