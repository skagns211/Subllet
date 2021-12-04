import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Select from "react-select";
import axios from "axios";

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
    // console.log(userInfo);
  }, [userInfo]);

  const userData = {
    email: email,
    nickname: userInfo.nickname,
    password: userInfo.password,
  };
  console.log(userData);

  //!유효성검사 및 State
  const [isEmail, setIsEmail] = useState(false);
  const [isDupEmail, setIsDupEmail] = useState(false); //! 이메일 중복을 확인하는 State
  const [isDupNickname, setIsDupNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPwdCheck, setIsPwdCheck] = useState(false);

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
  //!------------------------------------------------------------
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
  const handleComplete = () => {
    axios
      .post("/auth/signup", userData)
      .then((res) => {
        console.log(res.data);
        const successMsg = res.data.message;
        if (successMsg) {
          setIsComplete(true);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((err) => {
        throw err;
      });
  };

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
        <ErrorMessage>올바른 이메일 형식이 아닙니다.</ErrorMessage>
      </ElementBox>
      <ElementBox>
        <ElementTitle>닉네임</ElementTitle>
        <div className="validText">중복되지 않는 닉네임을 입력해주세요</div>
        <InputBox
          placeholder="닉네임"
          onChange={handleInputValue("nickname")}
        />
        <ErrorMessage>중복된 닉네임입니다.</ErrorMessage>
        <Button>닉네임 중복검사</Button>
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
        <ErrorMessage>
          비밀번호는 영문, 숫자를 포함하여 8이상이어야 합니다
        </ErrorMessage>
        {/* <Button>닉네임 중복검사</Button> */}
      </ElementBox>
      <ElementBox>
        <ElementTitle>비밀번호 확인</ElementTitle>
        <InputBox
          placeholder="비밀번호 확인"
          type="password"
          onChange={handleInputValue("passwordCheck")}
        />
        <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        {/* <Button>회원가입</Button> */}
      </ElementBox>
      <Button>회원가입</Button>
    </SignUpContainer>
  );
};

export default SignUpForm;
