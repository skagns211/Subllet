//! Action Types
// export const ACTION_NAME = "ACTION_NAME";
// 위와 같은 방법으로 Action 선언, export 후 import해서 사용

//! Action Creator Functions
// export const functionName = () => {
//     return {
//         type: ACTION_NAME,
//         payload: {

//         }
//     }
// }
// 위와 같은 방법으로 Action 함수 작성, export 후 import해서 사용

export const LOGIN_USER_INFO = "LOGIN_USER_INFO";
export const SUB_COUNT = "SUB_COUNT";
export const IS_LOGIN = "IS_LOGIN";
export const AUTH_NICKNAME = "AUTH_NICKNAME";
export const AUTH_USERINFO = "AUTH_USERINFO";
export const SERVICE_DETAIL = "SERVICE_DETAIL";
export const SERVICECS_LIST = "SERVICECS_LIST";
export const SELECT_PLAN = "SELECT_PLAN"; // Detail Page
// export const KAKAO_AUTH_CODE = "KAKAO_AUTH_CODE";
export const NAVER_AUTH_CODE = "NAVER_AUTH_CODE";
export const AUTH_CODE = "AUTH_CODE";
export const CHANGE_USER_INFO = "CHANGE_USER_INFO";
export const ADD_SUBSCRIBE = "ADD_SUBSCRIBE";

export const setLoginUserInfo = (loginUserInfo) => {
  return {
    type: LOGIN_USER_INFO,
    payload: loginUserInfo,
  };
};

export const setSubscribesCount = (data) => {
  return {
    type: SUB_COUNT,
    payload: data,
  };
};

export const setIsLogin = (data) => {
  return {
    type: IS_LOGIN,
    payload: data ? true : false,
  };
};

// export const setKakaoAuthCode = (data) => {
//   return {
//     type: KAKAO_AUTH_CODE,
//     payload: data,
//   };
// };

export const setAuthCode = (data) => {
  return {
    type: AUTH_CODE,
    payload: data,
  };
};

export const setNaverAuthCode = (data) => {
  return {
    type: NAVER_AUTH_CODE,
    payload: data,
  };
};

export const setAuthUserInfo = (data) => {
  if (Object.keys(data)[0] === "email") {
    return {
      type: AUTH_USERINFO,
      payload: data,
    };
  } else {
    return {
      type: AUTH_NICKNAME,
      payload: data,
    };
  }
};

export const changeUserInfo = (data) => {
  return {
    type: CHANGE_USER_INFO,
    payload: data,
  };
};

export const selectPlan = (plan) => {
  return {
    type: SELECT_PLAN,
    payload: {
      planname: plan[0],
      planprice: plan[1],
    },
  };
};

export const setService = (data) => {
  return {
    type: SERVICE_DETAIL,
    payload: data,
  };
};

export const setServices = (data) => {
  return {
    type: SERVICECS_LIST,
    payload: data,
  };
};

export const setAddSubscribe = () => {
  return {
    type: ADD_SUBSCRIBE,
  };
};
