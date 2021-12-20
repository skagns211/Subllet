import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const StyledBody = styled.div`
  margin: 0 0 -70px 0;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  @media only screen and (min-width: 800px) {
    margin: -5rem 0 -70px 0;
  }
`;

const Pages1 = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: center;

  background-image: url("https://subllet-profile.s3.ap-northeast-2.amazonaws.com/polish-ga04bd29ab_1920+1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div:nth-child(1) {
    display: flex;
    align-items: center;
    font-size: 4rem;
    a {
      color: #ff8a00;
      :hover {
        cursor: pointer;
      }
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
  div:nth-child(2) {
    margin-top: 1rem;
    font-size: 1rem;
    color: #808080;
  }
  @media only screen and (min-width: 768px) {
    div:nth-child(1) {
      font-size: 6rem;
      img {
        width: 5rem;
        height: 5rem;
      }
    }
    div:nth-child(2) {
      font-size: 1.5rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    div:nth-child(1) {
      font-size: 8rem;
      img {
        width: 7rem;
        height: 7rem;
      }
    }
    div:nth-child(2) {
      font-size: 2rem;
    }
  }
`;

const LeftMove = keyframes`
  0% {
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Pages2 = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  display: ${(props) => (props.innerWidth < 1024 ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  div {
    position: relative;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    animation-name: ${LeftMove};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    div:nth-child(1) {
      font-size: 3rem;
      text-decoration: underline;
      color: white;
    }
    div:nth-child(2) {
      font-size: 2rem;
      margin-top: 4rem;
      color: #808080;
    }
  }
  img {
    width: 50%;
    max-width: 30rem;
    height: auto;
  }
`;

const Pages3 = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  display: ${(props) => (props.innerWidth < 1024 ? "none" : "flex")};
  background-color: #130d0a;
  justify-content: center;
  align-items: center;
  div {
    position: relative;
    margin-left: 1rem;
    margin-right: 1.5rem;
    animation-name: ${FadeIn};
    animation-duration: 10s;
    animation-iteration-count: infinite;
    div:nth-child(1) {
      font-size: 3rem;
      text-decoration: underline;
      color: white;
    }
    div:nth-child(2) {
      width: 100%;
      font-size: 2rem;
      margin-top: 4rem;
      color: #808080;
    }
  }
  img {
    width: 50%;
    max-width: 30rem;
    height: auto;
  }
`;

const Pages4 = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  background: url("https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%87%E1%85%A2%E1%84%80%E1%85%A7%E1%86%BC.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div:nth-child(1) {
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    color: white;
    span {
      color: #ff8a00;
    }
  }
  a {
    font-size: 1.5rem;
    color: #ff8a00;
    border: 1px solid #ff8a00;
    border-radius: 5px;
    padding: 0rem 0.5rem;
    margin-top: 0.5rem;
    :hover {
      cursor: pointer;
      color: white;
      background-color: #ff8a00;
    }
  }
  @media only screen and (min-width: 768px) {
    div:nth-child(1) {
      font-size: 5rem;
    }
    a {
      font-size: 3rem;
      padding: 0.5rem 1rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    div:nth-child(1) {
      font-size: 8rem;
    }
    a {
      font-size: 3rem;
      padding: 0.5rem 1rem;
    }
  }
`;

const Landing = () => {
  const innerWidth = window.innerWidth;

  return (
    <StyledBody innerWidth={innerWidth}>
      <Pages1>
        <div>
          <Link to="/main">Subllet</Link>
          <img src="https://subllet-profile.s3.ap-northeast-2.amazonaws.com/favicon.png" />
        </div>
        <div>넘쳐나는 구독 서비스, 내 구독지갑 'Subllet'으로 관리하세요!</div>
      </Pages1>
      <Pages2 innerWidth={innerWidth}>
        <div>
          <div>구독관리 서비스</div>
          <div>
            월 구독 금액,
            <br /> 구독중인 서비스를 <br />
            효율적으로 <br />
            관리할 수 있습니다
          </div>
        </div>
        <img src="https://subllet-profile.s3.ap-northeast-2.amazonaws.com/gif1.gif" />
      </Pages2>
      <Pages3 innerWidth={innerWidth}>
        <img src="https://subllet-profile.s3.ap-northeast-2.amazonaws.com/gif2.gif" />
        <div>
          <div>서비스정보</div>
          <div>
            관심있는 서비스의 정보를
            <br />
            조회해 보고, <br />
            스크랩 기능을 이용해
            <br />
            스크랩할 수 있습니다
          </div>
        </div>
      </Pages3>
      <Pages4>
        <div>
          지금&nbsp;<span>Subllet</span>&nbsp;하세요!
        </div>
        <Link to="/main">start</Link>
      </Pages4>
    </StyledBody>
  );
};

export default Landing;
