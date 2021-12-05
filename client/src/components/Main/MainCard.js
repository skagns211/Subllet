import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TopList from "./TopList";
import backImg from "../../IMG/MainCardBackImg.png";

const MainSection = styled.section`
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
  /* justify-content: space-around; */
  flex-direction: column;
  background-image: url(${backImg});
  background-repeat: no-repeat;
  /* background-size: 48rem 30rem; */
  background-size: 100% 100%;
  /* height: 30vh; */
  /* margin-left: 0.5rem;
    margin-top: 3.6rem; */
  margin: 3.6rem 0.7rem 0.5rem 0.5rem;
  padding: 0;
  /* width: 48rem;
    height: 30rem; */
  width: auto; //!
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
    /* height: 35rem; */
  }
  .guest {
    display: none;
  }
  /* margin: 0;
    min-height: 100vh;
    position: relative; */
  hr {
    width: 22.5rem;
    margin-left: 1rem;
    margin-top: 0;
  }
  span {
    /* border: 1px solid #ffffff; */
    border-radius: 0.3rem;
    background-color: #252a3c;
    color: white;
    height: 6rem;
    /* margin-right: 40rem; */
    font-size: 1.2rem;
    /* display: flex;
      align-items: flex-end;
      justify-content: flex-end; */
    /* justify-self: center; */
  }
  img {
    width: 2.5rem;
    margin-left: 3.2rem;
    margin-top: 1rem;
    border-radius: 2rem;
  }
  .user {
    background-color: transparent;
    align-self: flex-start;
    margin: 1rem 0 0 0;
    font-size: 2rem;
    /* margin-right: 35rem; */
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
    /* text-align: center; */
  }
`;

const MainCardRightBottom = styled.div`
  display: flex;
  flex-direction: column;
  .info {
    margin-top: 1rem;
    margin-right: 5rem;
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
`;
const MainCard = () => {
  const state = useSelector((state) => state);
  // const { email, nickname, profile } = state.loginUserInfo; //! user정보 state
  const { nickname, profile } = JSON.parse(
    window.localStorage.getItem("loginUserInfo")
  ); //! user정보 state
  console.log(state);

  return (
    <>
      <MainSection>
        <MainCardBody>
          <div>
            <Link to="/MySubllet">
              <img
                alt="defaultImg"
                src={
                  profile
                    ? profile
                    : "https://i.esdrop.com/d/z3v0lj8ztjvc/UKFjJlgwrH.png"
                }
              />
              <span className="user">{nickname} 님의 Subllet</span>
            </Link>
          </div>
          <hr></hr>
          <span className="totalPrice">
            총 이용 금액: <br />
            <div>₩ 39,203</div>
          </span>
          <span className="nextPay">
            다음 결제까지: <br />
            <div>Coupang : 4일 전</div>
            <div>Melon : 2일 전</div>
          </span>
          <MainCardBottom>
            <span className="subscribe">
              구독중
              <br />
              <div>Netflix</div>
              <div>Melon</div>
              <div>Coupang</div>
              <div>밀리의서재</div>
            </span>
            <MainCardRightBottom>
              <span className="info">
                Huni 님의 <br />
                <div>총 구독 수 : 7개</div>
                <div>총 스크랩 수 : 20개</div>
              </span>
              <span className="addSub">
                <Link to="/AllView">
                  <i className="fas fa-plus-circle"></i>
                </Link>
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

export default MainCard;
