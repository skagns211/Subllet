import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBody = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  img {
    width: 30rem;
  }
  div:nth-child(2) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  a {
    margin-top: 2rem;
    font-size: 2rem;
    border: 1px solid #ff8a00;
    border-radius: 5px;
    padding: 1rem;
    :hover {
      cursor: pointer;
      background-color: #ff8a00;
      border: 1px solid white;
      color: black;
    }
  }
`;

const NotFound = () => {
  return (
    <StyledBody>
      <img src="https://subllet-profile.s3.ap-northeast-2.amazonaws.com/68747470733a2f2f696d616765732e76656c6f672e696f2f696d616765732f736b61676e733231312f706f73742f64666437333637652d336162632d346365332d383066622d3665366562656137336338382f25453125383425383925453125383525423325453125383425384625453125383525423325.png"></img>
      <div>페이지가 존재하지 않습니다.</div>
      <div>링크를 잘못 입력하셨거나 페이지가 삭제되었을 수 있습니다.</div>
      <Link to="/main">홈으로 이동</Link>
    </StyledBody>
  );
};

export default NotFound;
