import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Select from "react-select";
import axios from "axios";
import AgreeCheck from "./AgreeCheck";

//! Styled Setting--------------------------------------------

const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  /* margin-top: 0.5rem; */
  display: flex;
  flex-direction: column;
  /* border: 1px solid green; */
`;
const ElementBox = styled.div`
  width: 100%;
  /* height: 11rem; */
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  /* border: 1px solid purple; */
  div {
    &.validText {
      display: inline-flexbox;
      height: 1.5rem;
      align-items: center;
      color: white;
      font-size: 0.7em;
      /* border: 1px solid white; */
    }
  }
`;
const ElementTitle = styled.div`
  width: 100%;
  height: 2rem;
  color: white;
  font-size: 1.3rem;
  /* border: 1px solid white; */
`;
const EmailTab = styled.div`
  width: 100%;
  display: inline-flex;
  /* border: 1px solid blue; */
  div {
    font-size: 1rem;
    &.At {
      width: 10%;
      font-size: 2rem;
      text-align: center;
      color: gray;
    }
  }
`;

const InputBox = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0;
  border: 0.5px solid gray;
  /* margin-top: 0.2rem; */
  /* background-color: white; */
  border-radius: 0.2rem;
  font-size: 1rem;
  text-indent: 1rem;
  /* text-align: center; */
  ::-webkit-input-placeholder {
    text-align: center;
  }
  &.Email {
    width: 45%;
  }
`;

const SelectEmail = styled(Select)`
  width: 45%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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

const ErrorMessage = styled.div`
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  color: red;
  font-size: 0.7em;
  /* border: 1px solid white; */
  &.good {
    color: #ff8a00;
  }
`;
const Button = styled.button`
  top: 1rem;
  /* position: relative; */
  width: 100%;
  height: 2.62rem;
  border: none;
  border-radius: 0.2rem;
  /* margin-left: 0.2rem; */
  background-color: #252a3c;
  font-size: 1rem;
  color: #ff8a00;
  :hover {
    color: rgba(255, 255, 255, 0.85);
    box-shadow: rgba(30, 22, 54, 0.7) 0 5rem 0rem 2rem inset;
  }
`;

//! Component render-------------------------------------------------------------

const SignUpForm = () => {
  const [frontEmail, setFrontEmail] = useState("");
  const [backEmail, setBackEmail] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(frontEmail + "@" + backEmail);
    // console.log(frontEmail);
  }, [frontEmail]);

  useEffect(() => {
    setEmail(frontEmail + "@" + backEmail);
    // console.log(backEmail);
  }, [backEmail]);

  useEffect(() => {
    // console.log(email);
  }, [email]);

  const [userInfo, setUserInfo] = useState({
    nickname: "",
    password: "",
    passwordCheck: "",
  });
  useEffect(() => {
    validPassword(userInfo.password);
  }, [userInfo.password]);

  useEffect(() => {
    validPassword(userInfo.password);
    equalPassword(userInfo.password, userInfo.passwordCheck);
    // console.log(userInfo);
  }, [userInfo]);

  const userData = {
    email: email,
    nickname: userInfo.nickname,
    password: userInfo.password,
  };

  //!유효성검사 관련 State
  const [isEmail, setIsEmail] = useState(false);
  const [isDupEmail, setIsDupEmail] = useState(false); //! 이메일 중복을 확인하는 State
  const [isDupNickname, setIsDupNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPwdCheck, setIsPwdCheck] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  //! 회원가입 상태 state
  const [isComplete, setIsComplete] = useState(false);

  //! 메세지 State
  const [emailMessage, setEmailMessage] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordCheckMessage, setPasswordCheckMessage] = useState("");

  //!SelectBox Options-------------------------------------------
  const options = [
    { value: "naver.com", label: "naver.com" },
    { value: "gmail.com", label: "gmail.com" },
    { value: "hanmail.net", label: "hanmail.net" },
    { value: "daum.net", label: "daum.net" },
    { value: "nate.com", label: "nate.com" },
    { value: "hotmail.com", label: "hotmail.com" },
    { value: "outlook.com", label: "outlook.com" },
    { value: "icloud.com", label: "icloud.com" },
  ];

  //! 유효성검사 --------------------------------------------------

  //! password 유효성검사
  const validPassword = (password) => {
    const regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!regPassword.test(password)) {
      setIsPassword(false);
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
    } else {
      setIsPassword(true);
      setPasswordMessage("사용하기 좋은 비밀번호입니다:)");
    }
  };
  //! password 확인 유효성검사
  const equalPassword = (password, cheeckPassword) => {
    if (password === cheeckPassword) {
      setIsPwdCheck(true);
      setPasswordCheckMessage("비밀번호가 일치합니다:)");
    } else {
      setIsPwdCheck(false);
      setPasswordCheckMessage("비밀번호가 일치하지 않습니다.");
    }
  };
  //! Handler function-----------------------------------------------
  const navigate = useNavigate();
  const handleEmailFrontValue = (e) => {
    setFrontEmail(e.target.value);
  };

  const handleEmailBackValue = (value, key) => {
    setBackEmail(value.value);
    // console.log(value.value);
  };
  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  //! Axios -----------------------------------------------------

  const checkEmail = () => {
    //! 이메일 중복확인
    console.log(userData.email);
    if (frontEmail.length === 0 || backEmail.length === 0) {
      setIsDupEmail(false);
      setEmailMessage("이메일이 입력되지 않았습니다. 이메일을 입력해주세요.");
    } else {
      axios
        .post("/auth/email", { email: userData.email })
        .then((res) => {
          console.log(res);
          setIsEmail(true);
          setIsDupEmail(true);
          setEmailMessage("사용가능한 이메일입니다.");
        })
        .catch((err) => {
          console.log(err.response);
          const resMsg = err.response.data;
          if (resMsg === "Overlap") {
            setIsDupEmail(false);
            setEmailMessage("이미 회원가입된 이메일입니다.");
          } else if (resMsg === "Empty body") {
            setIsDupEmail(false);
            setEmailMessage(
              "이메일이 입력되지 않았습니다. 이메일을 입력해주세요."
            );
          }
        });
    }
  };

  const checkNickname = () => {
    axios
      .post("/auth/nickname", { nickname: userData.nickname })
      .then((res) => {
        setIsDupNickname(true);
        setNicknameMessage("사용가능한 닉네임입니다:)");
      })
      .catch((err) => {
        console.error(err.response);
        const resMsg = err.response.data;
        if (resMsg === "Overlap") {
          setIsDupNickname(false);
          setNicknameMessage("이미 사용중인 닉네임입니다.");
        } else if (resMsg === "Empty body") {
          setIsDupNickname(false);
          setNicknameMessage(
            "닉네임이 입력되지 않았습니다. 닉네임을 입력해주세요."
          );
        }
      });
  };

  const handleComplete = () => {
    console.log(isEmail, isDupEmail, isDupNickname, isPassword, isPwdCheck);
    if (
      isEmail &&
      isDupEmail &&
      isDupNickname &&
      isPassword &&
      isPwdCheck === false
    ) {
      console.log("회원가입 요청이 실패하였습니다.");
    } else {
      axios.post("/auth/signup", userData).then((res) => {
        console.log(res.data);
        const resMsg = res.data;
        if (resMsg === "Signup success") {
          setIsComplete(true);
          console.log("회원가입 요청이 성공적으로 전달되었습니다.");
          setTimeout(() => {
            navigate("/main");
          }, 2000);
        }
      });
    }
  };

  //! 1. Authorization Code를 받고 서버로 넘겨주는것까지

  return (
    <SignUpContainer>
      <ElementBox>
        <ElementTitle>이메일</ElementTitle>
        <EmailTab>
          <InputBox
            className="Email"
            placeholder="이메일"
            onChange={(e) => {
              handleEmailFrontValue(e);
            }}
          />
          <div className="At">@</div>
          <SelectEmail
            classNamePrefix="Select"
            options={options}
            onChange={(value) => {
              handleEmailBackValue(value);
            }}
            placeholder="선택해주세요"
          />
        </EmailTab>
        {isEmail ? (
          <ErrorMessage className="good">{emailMessage}</ErrorMessage>
        ) : email.length === 0 ? null : (
          <ErrorMessage>{emailMessage}</ErrorMessage>
        )}
        <Button onClick={() => checkEmail()}>이메일 중복검사</Button>
      </ElementBox>
      <ElementBox>
        <ElementTitle>닉네임</ElementTitle>
        <div className="validText">중복되지 않는 닉네임을 입력해주세요</div>
        <InputBox
          placeholder="닉네임"
          onChange={handleInputValue("nickname")}
        />
        {isDupNickname ? (
          <ErrorMessage className="good">{nicknameMessage}</ErrorMessage>
        ) : userInfo.nickname.length === 0 ? (
          <ErrorMessage></ErrorMessage>
        ) : (
          <ErrorMessage>{nicknameMessage}</ErrorMessage>
        )}
        <Button onClick={() => checkNickname()}>닉네임 중복검사</Button>
      </ElementBox>
      <ElementBox>
        <ElementTitle>비밀번호</ElementTitle>
        <div className="validText">
          숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!
        </div>
        <InputBox
          placeholder="비밀번호"
          type="password"
          onChange={handleInputValue("password")}
        />
        {isPassword ? null : userInfo.password.length === 0 ? null : (
          <ErrorMessage>{passwordMessage}</ErrorMessage>
        )}
      </ElementBox>
      <ElementBox>
        <ElementTitle>비밀번호 확인</ElementTitle>
        <InputBox
          placeholder="비밀번호 확인"
          type="password"
          onChange={handleInputValue("passwordCheck")}
        />
        {isPwdCheck ? null : userInfo.passwordCheck.length === 0 ? null : (
          <ErrorMessage>{passwordCheckMessage}</ErrorMessage>
        )}
      </ElementBox>
      <AgreeCheck isCheck={isCheck} setIsCheck={setIsCheck} />
      <Button onClick={() => handleComplete()}>회원가입</Button>
    </SignUpContainer>
  );
};

export default SignUpForm;
