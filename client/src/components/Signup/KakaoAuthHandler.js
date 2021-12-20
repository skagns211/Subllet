import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import {
  setAuthCode,
  setAuthUserInfo,
  setLoginUserInfo,
  setIsLogin,
} from "../../actions/index";
import AgreeCheck from "./AgreeCheck";
import LoadingSpinner from "./../LodingSpinner";

const AfterPageContainer = styled.main`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  max-width: 500px;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid white; */
  /* @media only screen and (min-width: 800px) {
    padding-left: 1rem;
    padding-right: 1rem;
  } */
`;

const InnerBox = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid yellow; */
  @media only screen and (max-width: 500px) {
    height: 95%;
  }
`;

const SignUpTitle = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  /* border: 1px solid white; */
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  background: #cecece;
  /* @media only screen and (max-width: 534px) {
    width: 22rem;
    height: 1px;
    padding: 0;
    margin-bottom: 0.5rem;
    align-items: center;
    background: #cecece;
  } */
`;
const ElementTitle = styled.div`
  width: 100%;
  height: 2rem;
  color: white;
  font-size: 1.3rem;
  /* border: 1px solid white; */
`;

const EmailDiv = styled.div`
  width: 100%;
  height: 2.3rem;
  padding: 0;
  border: 0.5px solid gray;
  color: #d1d1d1;
  display: flex;
  align-items: center;
  /* margin-top: 0.2rem; */
  background-color: #60666d;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  text-indent: 1rem;
  /* text-align: center; */
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

const KakaoAuthHandler = () => {
  const state = useSelector((state) => state); //! state 사용 함수
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAgree, setIsAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //! Authorization Code
  let authoCode = new URL(window.location.href).searchParams.get("code");
  useEffect(() => dispatch(setAuthCode(authoCode)), [state.authCode]);
  dispatch(setAuthCode(authoCode));

  useEffect(() => {
    axios
      .post("/oauth/kakao", {
        authorizationCode: authoCode,
      })
      .then((res) => {
        if (res.data.userInfo) {
          const { userInfo } = res.data;
          const loginUserInfo = userInfo;
          dispatch(setLoginUserInfo(loginUserInfo));
          dispatch(setIsLogin(true));
          navigate("/main");
        } else {
          setIsLoading(true);
          const authUser = {
            email: res.data.email,
            nickname: "",
            profile: res.data.profile,
            signup_method: res.data.signup_method,
          };
          dispatch(setAuthUserInfo(authUser));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const [isDupNickname, setIsDupNickname] = useState(false);
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [allCheckMessage, setAllCheckMessage] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const checkNickname = () => {
    axios
      .post("/auth/nickname", { nickname: state.authUserInfo.nickname })
      .then((res) => {
        setIsDupNickname(true);
        setNicknameMessage("사용 가능한 닉네임입니다");
      })
      .catch((err) => {
        console.error(err.response);
        const resMsg = err.response.data;
        if (resMsg === "Overlap") {
          setIsDupNickname(false);
          setNicknameMessage("이미 사용 중인 닉네임입니다");
        } else if (resMsg === "Empty body") {
          setIsDupNickname(false);
          setNicknameMessage(
            "닉네임이 입력되지 않았습니다. 닉네임을 입력해 주세요."
          );
        }
      });
  };

  const handleComplete = () => {
    if (isAgree === true && isDupNickname === true) {
      axios
        .post("/oauth/signup", state.authUserInfo)
        .then((res) => {
          setIsComplete(true);
          navigate("/main");
        })
        .catch((err) => {
          console.error(err.response);
        });
    } else {
      setAllCheckMessage("모든 정보를 정확하게 입력해 주세요");
    }
  };

  return (
    <AfterPageContainer>
      {!isLoading ? (
        <LoadingSpinner />
      ) : (
        <InnerBox>
          <SignUpTitle className="SignUpTitle">추가 정보 입력</SignUpTitle>
          <Line />
          <ElementTitle>이메일</ElementTitle>
          <EmailDiv>{state.authUserInfo.email}</EmailDiv>
          <Line />
          <ElementBox>
            <ElementTitle>닉네임</ElementTitle>
            <div className="validText">
              중복되지 않는 닉네임을 입력해 주세요
            </div>
            <InputBox
              placeholder="닉네임"
              onChange={(e) =>
                dispatch(setAuthUserInfo({ nickname: e.target.value }))
              }
            />
            {isDupNickname ? (
              <ErrorMessage className="good">{nicknameMessage}</ErrorMessage>
            ) : state.authUserInfo.nickname === 0 ? (
              <ErrorMessage></ErrorMessage>
            ) : (
              <ErrorMessage>{nicknameMessage}</ErrorMessage>
            )}

            <Button onClick={() => checkNickname()}>닉네임 중복검사</Button>
            {isDupNickname === true && isAgree === true ? null : (
              <ErrorMessage>{allCheckMessage}</ErrorMessage>
            )}
          </ElementBox>
          <AgreeCheck isAgree={isAgree} setIsAgree={setIsAgree} />
          <Button onClick={() => handleComplete()}>회원가입</Button>
        </InnerBox>
      )}
    </AfterPageContainer>
  );
};

export default KakaoAuthHandler;
