import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TopList from "./TopList";
import { IMG } from "./imageUrl";

const randomIdx = Math.floor(Math.random() * IMG["backImg"].length);
const randomBackImg = IMG.backImg[randomIdx];

const MainSection = styled.section`
  @font-face {
    font-family: "InfinitySans-RegularA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "InfinitySans-RegularA1";
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 1050px) and (max-width: 1300px) {
    display: flex;
  }
  @media only screen and (min-width: 1300px) {
    display: flex;
  }
`;

const MainCardBody = styled.div`
  display: flex;
  opacity: 0.3;
  flex-direction: column;
  background-image: url(${randomBackImg});
  background-repeat: no-repeat;
  z-index: 500;
  background-size: 100% 100%;
  border-radius: 1rem;
  margin: 2rem 0.7rem 0.5rem 0.5rem;
  padding: 0;
  width: auto;
  height: auto;

  @media only screen and (max-width: 1050px) {
    padding-bottom: 1.5rem;
  }
  @media only screen and (min-width: 1050px) and (max-width: 1300px) {
    background-size: 100% 100%;
    width: 100rem;
  }
  @media only screen and (min-width: 1301px) {
    background-size: 100% 100%;
    width: 55rem;
    height: 35rem;
  }
  hr {
    width: 22.5rem;
    margin-left: 1rem;
    margin-top: 0;
  }
  span {
    border-radius: 0.3rem;
    background-color: #252a3c;
    color: white;
    height: 6rem;
    font-size: 1.2rem;
  }
  img {
    width: 2.5rem;
    margin-left: 1.5rem;
    margin-top: 1rem;
    border-radius: 2rem;
  }
  .user {
    font-family: "Geo", sans-serif;
    background-color: transparent;
    align-self: flex-start;
    margin: 1rem 0 0 0;
    font-size: 2rem;
    padding: 1rem 5rem 1rem 1rem;
  }
  .totalPrice {
    align-self: flex-start;
    margin-left: 1rem;
    margin-top: 1rem;
    padding: 0.5rem 5rem 0.5rem 2.5rem;
    width: 15rem;
    div {
      text-align: center;
      margin-top: 0.7rem;
      font-size: 2rem;
    }
  }
  .nextPay {
    align-self: flex-start;
    margin-left: 1rem;
    margin-top: 1rem;
    padding: 0.5rem 5rem 0.5rem 2.5rem;
    width: 15rem;
  }
  @media only screen and (max-width: 500px) {
    .user {
      padding-right: 0;
    }
    .totalPrice {
      padding-left: 1.3rem;
      width: 14rem;
    }
    .nextPay {
      padding-left: 1.3rem;
      width: 14rem;
    }
    hr {
      width: 90%;
    }
  }
`;

const MainCardBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin: 0;
  .subscribe {
    margin: 1rem 1rem 0rem 1rem;
    padding-left: 2rem;
    padding-top: 0.5rem;
    width: 7.5rem;
    height: 10.3rem;
  }
  @media only screen and (max-width: 500px) {
    .subscribe {
      padding-left: 0.8rem;
    }
  }
`;

const MainCardRightBottom = styled.div`
  display: flex;
  flex-direction: column;
  .info {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0rem 0 1.5rem;
    width: 10.5rem;
    height: 5rem;
  }
  .addSub {
    padding: 0.5rem 1rem 0 0.5rem;
    width: 10.5rem;
    height: 3.8rem;
    text-align: center;
    font-size: 2rem;
    div {
      font-size: 0.9rem;
    }
  }
  @media only screen and (max-width: 500px) {
    .info {
      width: 9.5rem;
    }
    .addSub {
      width: 9.5rem;
    }
  }
`;

const RequestWindow = styled.div`
  font-family: "Geo", sans-serif;
  background-color: black;
  position: absolute;
  padding: 0 1rem 0 1rem;
  opacity: 0.8;
  z-index: 501;
  @media only screen and (max-width: 800px) {
    margin: 11rem 0 0 0;
    left: 21%;
    width: 50%;
    height: 15rem;
    text-align: center;
    font-size: 1.5rem;
    color: #ffffff;
    padding-top: 3rem;
    border-radius: 1rem;
    .login {
      color: #ff8a00;
      text-decoration: underline;
    }
    .signup {
      color: #ff8a00;
      text-decoration: underline;
    }
  }
  @media only screen and (min-width: 800px) and (max-width: 1050px) {
    margin-top: 5rem;
    left: 23%;
    width: 50%;
    height: 20rem;
    text-align: center;
    font-size: 2rem;
    color: #ffffff;
    padding-top: 3rem;
    border-radius: 1rem;
    .login {
      color: #ff8a00;
      text-decoration: underline;
    }
    .signup {
      color: #ff8a00;
      text-decoration: underline;
    }
  }
  @media only screen and (min-width: 1050px) and (max-width: 1300px) {
    margin-top: 10rem;
    left: 15%;
    width: 40%;
    height: 20rem;
    text-align: center;
    font-size: 2rem;
    color: #ffffff;
    padding-top: 3rem;
    border-radius: 1rem;
    .login {
      color: #ff8a00;
      text-decoration: underline;
    }
    .signup {
      color: #ff8a00;
      text-decoration: underline;
    }
  }

  @media only screen and (min-width: 1301px) {
    margin-top: 10rem;
    margin-left: 1.5rem;
    width: 45.5rem;
    height: 20rem;
    text-align: center;
    font-size: 2rem;
    color: #ffffff;
    padding-top: 3rem;
    border-radius: 1rem;
    .login {
      color: #ff8a00;
      text-decoration: underline;
    }
    .signup {
      color: #ff8a00;
      text-decoration: underline;
    }
  }
`;
const GuestMainCard = () => {
  return (
    <>
      <MainSection>
        <RequestWindow>
          <div>
            로그인을 하시면 <br /> Subllet의
            <br /> 다양한 서비스를 <br />
            이용하실 수 있어요!
          </div>
          <br />
          <Link to="/userlogin">
            <span className="login">로그인</span>
          </Link>
          <br />
          <br />
          <Link to="/signup">
            <span className="signup">회원가입</span>
          </Link>
        </RequestWindow>
        <MainCardBody>
          <div>
            <img
              alt="defaultImg"
              src="https://i.esdrop.com/d/z3v0lj8ztjvc/OizvMNga4W.png"
            />
            <span className="user">Guest 님의 Subllet</span>
          </div>
          <hr></hr>
          <span className="totalPrice">
            총 이용 금액: <br />
            <div>₩ -</div>
          </span>
          <span className="nextPay">
            다음 결제까지: <br />
            <div>-</div>
          </span>
          <MainCardBottom>
            <span className="subscribe">
              구독중
              <br />
              <div>-</div>
            </span>
            <MainCardRightBottom>
              <span className="info">
                Guest 님의 <br />
                <div>총 구독 수 : -개</div>
                <div>총 스크랩 수 : -개</div>
              </span>
              <span className="addSub">
                <i className="fas fa-plus-circle"></i>
                <br />
                <div>구독을 추가하세요</div>
              </span>
            </MainCardRightBottom>
          </MainCardBottom>
        </MainCardBody>
        <TopList />
      </MainSection>
    </>
  );
};

export default GuestMainCard;
