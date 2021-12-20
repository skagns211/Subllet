import react, { useState, useEffect } from "react";
import styled from "styled-components";
import OauthSignUp from "../components/Signup/OauthSignUp";
import SignUpForm from "../components/Signup/SignUpForm";
require("dotenv").config();
// `${process.env.REACT_APP_URL}/auth/signup`;

const SignUpContainer = styled.main`
  max-width: 500px;
  /* height: 100vh; */
  margin: auto;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #272729; */
  border-radius: 0.5rem;
  /* border: 1px solid white; */
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
`;

const SignUp = () => {
  return (
    <SignUpContainer>
      <InnerBox>
        <SignUpTitle className="SignUpTitle">회원가입</SignUpTitle>
        <OauthSignUp />
        <Line />
        <SignUpForm />
      </InnerBox>
    </SignUpContainer>
  );
};

export default SignUp;
