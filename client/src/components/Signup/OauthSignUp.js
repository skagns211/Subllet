import React from "react";
import styled from "styled-components";

import kakao_oauth from "../../IMG/Oauth/kakao_oauth.png";
import google_oauth from "../../IMG/Oauth/google_oauth.png";
import naver_oauth from "../../IMG/Oauth/naver_oauth.png";

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

const OauthSignUp = () => {
  return (
    <OauthContainer>
      <div>SNS 계정으로 회원가입</div>
      <IconBox>
        <img src={kakao_oauth} />
        <img src={google_oauth} />
        <img src={naver_oauth} />
      </IconBox>
    </OauthContainer>
  );
};

export default OauthSignUp;
