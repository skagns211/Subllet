import React from "react";
import styled from "styled-components";
import { IMG } from "./imageUrl";

const StylePick = styled.div`
  display: flex;
  color: #ff8a00;
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-left: 2rem;
  width: 90%;
`;

const PickBox = styled.div`
  @media only screen and (max-width: 800px) {
    img {
      width: 99%;
    }
    div {
      margin-left: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (min-width: 800px) and (max-width: 1050px) {
    img {
      width: 99%;
    }
    div {
      margin-left: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (min-width: 1050px) and (max-width: 1300px) {
    img {
      width: 99%;
    }
    div {
      margin-left: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (min-width: 1301px) {
    img {
      width: 99%;
    }
    div {
      margin-left: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const ForUserBox = styled.div`
  @media only screen and (max-width: 800px) {
    img {
      width: 99%;
    }
    div {
      margin-left: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (min-width: 800px) and (max-width: 1050px) {
    img {
      width: 99%;
    }
    div {
      margin-left: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (min-width: 1050px) and (max-width: 1300px) {
    img {
      width: 99%;
    }
    div {
      margin-left: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (min-width: 1301px) {
    img {
      width: 99%;
    }
    div {
      margin-left: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const Pick = () => {
  const ObjIMG = Math.floor(Math.random() * 3 + 2); // Math.random() * (최댓값 - 최솟값) + 최솟값
  const randomImg = Math.floor(ObjIMG);
  const randomKey = Object.keys(IMG)[randomImg];
  const arrLength = IMG[randomKey].length;
  const randomArr = Math.random() * arrLength;
  const randomArr2 = Math.random() * arrLength;
  const pickImg = IMG[randomKey][Math.floor(randomArr)];
  const forImg = IMG[randomKey][Math.floor(randomArr2)];

  return (
    <StylePick>
      <PickBox>
        <div>Subllet's Pick</div>
        <img alt="pickImg" src={pickImg}></img>
      </PickBox>
      <ForUserBox>
        <div>For Guest</div>
        <img alt="pickImg" src={forImg}></img>
      </ForUserBox>
    </StylePick>
  );
};

export default Pick;
