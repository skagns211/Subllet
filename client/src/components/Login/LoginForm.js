import { React, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { setLoginUserInfo, setIsLogin } from "../../actions";
import styled from "styled-components";
import OauthLogin from "./OauthLogin";
import axios from "axios";

const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .loginFormContainer {
    background-color: #272729;
    padding: 0 5rem 10rem 5rem;
    margin-top: 5rem;
    border-radius: 1rem;
  }
  hr {
    width: 95%;
    margin-top: 1rem;
    border: 1px solid #7e7e7e;
  }
  .title {
    color: #ffffff;
    font-size: 2rem;
    width: 100%;
    margin: 4rem 18rem 0 0;
  }
  .emailTitle {
    color: #ffffff;
    font-size: 1.5rem;
    margin: 3rem 10rem 1rem 0;
  }
  .passwordTitle {
    color: #ffffff;
    font-size: 1.5rem;
    margin: 3rem 10rem 1rem 0;
  }
  .warning {
    margin: 1rem 6rem 0 0;
    color: #cf3c3c;
  }
`;

const LoginBtn = styled.button`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  /* position: relative; */
  width: 97%;
  height: 2.62rem;
  border: none;
  border-radius: 0.2rem;
  /* margin-left: 0.2rem; */
  background-color: #252a3c;
  font-size: 1rem;
  color: #ff8a00;
  :hover {
    color: #252a3c;
    box-shadow: #ff8a00 0 5rem 0rem 2rem inset;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  input {
    text-indent: 1rem;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  span {
    font-size: 2rem;
    color: #ffffff;
    width: 1rem;
  }
  input {
    margin-right: 1.1rem;
    border-radius: 0.2rem;
    border: 0.5px solid gray;
    font-size: 1rem;
    width: 9rem;
  }
  .inputEmail {
    display: inline-flex;
    position: absolute;
    /* left: 2rem; */
    margin-left: 1.5rem;
    height: 2rem;
    width: 6.5rem;
  }
  .cancleBtn {
    position: relative;
    left: 8.5rem;
    width: 1.5rem;
    height: 1.5rem;
    button {
      padding: 0.8rem 1rem 0.25rem 1rem;
    }
  }
`;

const SelectEmail = styled(Select)`
  width: 9.8rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-left: 1.2rem;
  .Select__control {
    border: 1px solid #a1a1a1;
    border-radius: 0.2rem;
    cursor: pointer;
  }

  .Select__control:hover {
    border-color: #a1a1a1;
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px black;
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }
  .Select__value {
    font-size: 1rem;
    color: blue;
  }

  .Select__menu {
    color: #3c3d3e;
  }
  .Select__dropdown-indicator {
    color: gray;
    /* background: purple; */
  }
`;

const PassWordContainer = styled.div`
  input {
    width: 22rem;
    height: 2rem;
    text-indent: 1rem;
    font-size: 1rem;
  }
`;

const emailList = [
  { value: "naver.com", label: "naver.com" },
  { value: "gmail.com", label: "gmail.com" },
  { value: "hanmail.net", label: "hanmail.net" },
  { value: "daum.net", label: "daum.net" },
  { value: "nate.com", label: "nate.com" },
  { value: "hotmail.com", label: "hotmail.com" },
  { value: "outlook.com", label: "outlook.com" },
  { value: "icloud.com", label: "icloud.com" },
  { value: "직접 입력", label: "직접 입력" },
];

const LoginForm = () => {
  const dispatch = useDispatch(); //! action 사용 함수

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleEmailValue = (key) => (e) => {
    const atIndex = loginInfo.email.indexOf("@");
    loginInfo.email.includes("@")
      ? setLoginInfo({
          ...loginInfo,
          [key]: e.target.value + loginInfo.email.slice(atIndex),
        })
      : setLoginInfo({
          ...loginInfo,
          [key]: e.target.value,
        });
  };
  const handlePwdValue = (key) => (e) => {
    setLoginInfo({
      ...loginInfo,
      [key]: e.target.value,
    });
  };

  const [isSelectSelf, setIsSelectSelf] = useState(false);

  //! email이 이미 선택되어 있으면 id에 재선택된 email을 붙여줌
  //! email option이 "직접입력"이면 option을 text로 바꿔줌
  //! 직접 입력한 value 적용 필요!!!!!
  const handleSelect = (value, key) => {
    const atIndex = loginInfo.email.indexOf("@");
    const justId = loginInfo.email.slice(0, atIndex);
    loginInfo.email.includes("@")
      ? setLoginInfo({
          ...loginInfo,
          email: justId + "@" + value.value,
        })
      : setLoginInfo({
          ...loginInfo,
          email: loginInfo.email + "@" + value.value,
        });
    value.value === "직접 입력"
      ? setIsSelectSelf(true)
      : setIsSelectSelf(false);
  };
  const [isEamilSelect, setIsEmailSelect] = useState("");
  const handleEmailSelect = (value) => {
    setIsEmailSelect(value.value);
  };
  const [isWarning, setIsWarning] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const postInfo = () => {
    const { email, password } = loginInfo;
    const isAt = email.includes("@");
    if (!email || !password || !isAt) {
      setIsEmpty(true);
      setIsWarning(false);
    } else {
      axios
        .post("/auth/login", {
          email,
          password,
        })
        .then((res) => {
          const { userInfo } = res.data; //! refreshToken을 어디로 받을지 상의필요
          const loginUserInfo = userInfo;
          dispatch(setLoginUserInfo(loginUserInfo));
          // dispatch(setAccessToken(accessToken));
          dispatch(setIsLogin(true));
          // navigate("/");
          window.location.replace("/main"); //! navigate 사용시 isLogin에 따른 nav변경 안됨
        })
        .catch((err) => {
          setIsWarning(true);
          setIsEmpty(false);
        });
    }
  };

  const inputEnter = (e) => {
    e.key === "Enter" ? postInfo() : void 0;
  };

  return (
    <LoginStyled>
      <div className="loginFormContainer">
        <div className="title">로그인</div>
        <hr />
        <div className="emailTitle">이메일</div>
        <LoginContainer>
          <EmailContainer>
            <input
              type="text"
              placeholder="이메일"
              onChange={handleEmailValue("email")}
              onKeyPress={inputEnter}
            ></input>
            <span>@</span>
            {isSelectSelf ? (
              <span>
                <input
                  className="inputEmail"
                  type="text"
                  onChange={(value) => handleEmailSelect(value)} //! 손봐야함
                  value={isEamilSelect}
                ></input>
                <span className="cancleBtn">
                  <button type="button" onClick={() => setIsSelectSelf(false)}>
                    X
                  </button>
                </span>
              </span>
            ) : (
              <SelectEmail
                onChange={(value) => {
                  handleSelect(value);
                }}
                classNamePrefix="Select"
                options={emailList}
                placeholder="선택해주세요"
              ></SelectEmail>
            )}
          </EmailContainer>
        </LoginContainer>
        <div className="passwordTitle">비밀번호</div>
        <PassWordContainer>
          <input
            type="password"
            placeholder="비밀번호"
            onChange={handlePwdValue("password")}
            onKeyPress={inputEnter}
          ></input>
        </PassWordContainer>
        {isWarning ? (
          <div className="warning">
            이메일 또는 비밀번호가 올바르지 않습니다
          </div>
        ) : null}
        {isEmpty ? (
          <div className="warning">이메일과 비밀번호를 모두 입력해주세요</div>
        ) : null}
        <LoginBtn className="loginBtn" onClick={() => postInfo()}>
          로그인
        </LoginBtn>
        <hr />
        <OauthLogin />
      </div>
    </LoginStyled>
  );
};

export default LoginForm;
