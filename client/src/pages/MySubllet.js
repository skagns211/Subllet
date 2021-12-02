import React from "react";
import styled from "styled-components";
import MyInfo from "../components/MySubllet/MyInfo";
import MyScrap from "../components/MySubllet/MyScrap";
import MyScribe from "../components/MySubllet/MyScribe";

const MySublletContainer = styled.main`
  /* width: 50.8%; */
  max-width: 81.25rem;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* border: 1px solid white; */
  /* height: 100vh; */
  margin: auto;
  div {
    &.Title {
      font-size: 3rem;
      color: white;
    }
  }
  @media only screen and (min-width: 800px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
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

const MySubllet = () => {
  return (
    <MySublletContainer>
      <div className="Title">My subllet</div>
      <MyInfo />
      <Line />
      <MyScribe />
      <MyScrap />
    </MySublletContainer>
  );
};

export default MySubllet;
