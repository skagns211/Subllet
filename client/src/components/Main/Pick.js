import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StylePick = styled.div`
  display: flex;
  color: #ff8a00;
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-left: 0.9rem;
  width: 96%;
  img {
    cursor: pointer;
  }
`;

const PickBox = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 500px) {
    margin-left: 1rem;
  }
  @media only screen and (max-width: 800px) {
    img {
      width: 99%;
    }
    div {
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (min-width: 800px) and (max-width: 1050px) {
    img {
      width: 99%;
    }
    div {
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (min-width: 1050px) and (max-width: 1300px) {
    img {
      width: 99%;
    }
    div {
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (min-width: 1301px) {
    img {
      width: 99%;
    }
    div {
      margin-bottom: 0.5rem;
    }
  }
`;

const ForUserBox = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 500px) {
    margin-right: 1.8rem;
  }
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
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const serviceList = state.services;
  const arrLength = serviceList.length;
  const randomArr = Math.random() * arrLength;
  const randomArr2 = Math.random() * arrLength;
  const pick = serviceList[Math.floor(randomArr)];
  const forYou = serviceList[Math.floor(randomArr2)];
  const pickImg = pick && pick.outer_image;
  const forYouImg = forYou && forYou.outer_image;
  const handleIntoDetail = (path) => {
    navigate(`/detail/${path}`);
  };

  return (
    <StylePick>
      <PickBox>
        <div>Subllet's Pick</div>
        <img
          alt="pickImg"
          src={pickImg}
          onClick={() => handleIntoDetail(pick.id)}
        ></img>
      </PickBox>
      <ForUserBox>
        {state.loginUserInfo.nickname ? (
          <div>For {state.loginUserInfo.nickname}</div>
        ) : (
          <div>For Guest</div>
        )}
        <img
          alt="pickImg"
          src={forYouImg}
          onClick={() => handleIntoDetail(forYou.id)}
        ></img>
      </ForUserBox>
    </StylePick>
  );
};

export default Pick;
