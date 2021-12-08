import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import kakao_oauth from "../../IMG/Oauth/kakao_oauth.png";
import google_oauth from "../../IMG/Oauth/google_oauth.png";
import naver_oauth from "../../IMG/Oauth/naver_oauth.png";
require("dotenv").config();

const OauthContainer = styled.div`
  width: 100%;
  height: 7rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  /* border: 1px solid blue; */
  div {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: white;
    /* border: 1px solid white; */
  }
`;
const IconBox = styled.span`
  width: 100%;
  height: 80%;
  /* margin-top: 1rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  img {
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 0.5rem 0 0.5rem;
    cursor: pointer;
    /* border: 1px solid white; */
  }
`;

const OauthSignUp = () => {
  const navigate = useNavigate();
  // const KAKAO_REST_API_KEY = process.env.KAKAO_REST_API_KEY;
  const KAKAO_REST_API_KEY = "1612f790c5728491ad5c5c7ba0ba99d6"; //! javascript key
  const KAKAO_REDIRECT_URI = "https://localhost:3000/auth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const NAVER_CLIENT_ID = "fSzmSCYBKfOat2t90EFv";
  const NAVER_CALLBACK_URL = "https://localhost:3000/auth/naver/signup";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=STATE_STRING&redirect_uri=${NAVER_CALLBACK_URL}`;

  return (
    <OauthContainer>
      <div>SNS 계정으로 회원가입</div>
      <IconBox>
        <a href={KAKAO_AUTH_URL}>
          <img src={kakao_oauth} />
        </a>
        <a href={NAVER_AUTH_URL}>
          <img src={naver_oauth} />
        </a>
        <img src={google_oauth} />
      </IconBox>
    </OauthContainer>
  );
};

export default OauthSignUp;
