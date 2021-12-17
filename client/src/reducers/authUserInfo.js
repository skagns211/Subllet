import { AUTH_USERINFO, AUTH_NICKNAME } from "../actions";

const authUserInfo = {
  email: "",
  nickname: "",
  profile: "",
  signup_method: "",
};

const authUserReducer = (state = authUserInfo, action) => {
  switch (action.type) {
    case AUTH_USERINFO:
      return {
        ...state,
        email: action.payload.email,
        profile: action.payload.profile,
        signup_method: action.payload.signup_method,
      };
    case AUTH_NICKNAME:
      return {
        ...state,
        nickname: action.payload.nickname,
      };
    default:
      return state;
  }
};
export default authUserReducer;
