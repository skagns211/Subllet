import { NAVER_AUTH_CODE } from "../actions";

const naverAuthCode = "";

const naverAuthReducer = (state = naverAuthCode, action) => {
  switch (action.type) {
    case NAVER_AUTH_CODE:
      return (state = action.payload);
    default:
      return state;
  }
};
export default naverAuthReducer;
