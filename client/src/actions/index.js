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
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const IS_LOGIN = "IS_LOGIN";

export const setLoginUserInfo = (loginUserInfo) => {
  console.log(loginUserInfo);
  return {
    type: LOGIN_USER_INFO,
    payload: loginUserInfo,
  };
};

export const setAccessToken = (token) => {
  return {
    type: ACCESS_TOKEN,
    payload: token,
  };
};

export const setIsLogin = (data) => {
  return {
    type: IS_LOGIN,
    payload: data ? true : false,
  };
};
