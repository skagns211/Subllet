import { AUTH_CODE } from "../actions";

const authCode = "";

const authReducer = (state = authCode, action) => {
  switch (action.type) {
    case AUTH_CODE:
      return (state = action.payload);
    default:
      return state;
  }
};

export default authReducer;
