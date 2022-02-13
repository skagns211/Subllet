import {
  LOGIN_USER_INFO,
  SUB_COUNT,
  CHANGE_USER_INFO,
  ADD_SUBSCRIBE,
} from "../actions";

const loginUserInfo = {
  id: 0,
  email: "",
  nickname: "",
  profile: "",
  signup_method: "",
  total_subscribes: 0,
  total_price: 0,
  total_scraps: 0,
};

const userReducer = (state = loginUserInfo, action) => {
  switch (action.type) {
    case LOGIN_USER_INFO:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        nickname: action.payload.nickname,
        profile: action.payload.profile,
        signup_method: action.payload.signup_method,
        total_subscribes: action.payload.total_subscribes,
        total_price: action.payload.total_price,
        total_scraps: action.payload.total_scraps,
      };
    case SUB_COUNT:
      return {
        ...state,
        total_subscribes: action.payload.total_subscribes,
        total_price: action.payload.total_price,
        total_scrpas: action.payload.total_scraps,
      };
    case CHANGE_USER_INFO:
      return {
        ...state,
        nickname: action.payload.nickname,
        profile: action.payload.profile,
      };
    case ADD_SUBSCRIBE:
      return {
        ...state,
        total_subscribes: state.total_subscribes + 1,
      };
    default:
      return state;
  }
};
export default userReducer;
