import React from "react";
import styled from "styled-components";
import kakao_oauth from "../../IMG/Oauth/kakao_oauth.png";
import google_oauth from "../../IMG/Oauth/google_oauth.png";
import NaverButton from "../../IMG/Oauth/NaverButton.png";
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
    /* border: 1px solid white; */
  }
`;

const OauthLogin = () => {
  const KAKAO_REST_API_KEY = "1612f790c5728491ad5c5c7ba0ba99d6"; //! javascript key
  const KAKAO_REDIRECT_URI = "https://localhost:3000/auth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const NAVER_CLIENT_ID = "fSzmSCYBKfOat2t90EFv";
  const NAVER_CALLBACK_URL = "https://localhost:3000/auth/naver/signup";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=STATE_STRING&redirect_uri=${NAVER_CALLBACK_URL}`;

  const GOOGLE_CLIENT_ID =
    "109814742623-1el31kjtobn7c5nmdpsqd3843fdnlbkg.apps.googleusercontent.com";
  const GOOGLE_SECRET = "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";
  const GOOGLE_CALLBACK_URL = "https://localhost:3000/auth/google/signup";

  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_CALLBACK_URL}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;

  return (
    <OauthContainer>
      <div>SNS 계정으로 로그인</div>
      <IconBox>
        <a href={KAKAO_AUTH_URL}>
          <img src={kakao_oauth} />
        </a>
        <a href={NAVER_AUTH_URL}>
          <img src={NaverButton} />
        </a>
        <a href={GOOGLE_AUTH_URL}>
          <img src={google_oauth} />
        </a>
      </IconBox>
    </OauthContainer>
  );
};

export default OauthLogin;
