import React from "react";
import styled from "styled-components";
import backImg from "../../IMG/MainCardBackImg.png";

const MainCard = () => {
  const MainSection = styled.section``;

  const MainCardBody = styled.div`
    display: flex;
    /* justify-content: space-around; */
    flex-direction: column;
    background-image: url(${backImg});
    background-repeat: no-repeat;
    background-size: 48rem 30rem;
    height: 30vh;
    margin-left: 0.5rem;
    padding: 0;
    width: 48rem;
    height: 30rem;
    /* margin: 0;
    min-height: 100vh;
    position: relative; */
    hr {
      width: 19rem;
      margin-left: 3rem;
      margin-top: 0;
    }
    span {
      /* border: 1px solid #ffffff; */
      border-radius: 0.3rem;
      background-color: #252a3c;
      color: white;
      /* margin-right: 40rem; */
      font-size: 1.2rem;
      /* display: flex;
      align-items: flex-end;
      justify-content: flex-end; */
      /* justify-self: center; */
    }
    .user {
      background-color: transparent;
      align-self: flex-start;
      margin: 1rem 0 0 3rem;
      font-size: 2rem;
      /* margin-right: 35rem; */
      padding: 1rem 5rem 1rem 1rem;
    }
    .totalPrice {
      align-self: flex-start;
      margin-left: 3rem;
      margin-top: 1rem;
      padding: 0.5rem 5rem 0.5rem 2rem;
      width: 12rem;
      div {
        text-align: center;
        margin-top: 0.7rem;
        font-size: 2rem;
      }
    }
    .nextPay {
      align-self: flex-start;
      margin-left: 3rem;
      margin-top: 1rem;
      padding: 0.5rem 5rem 0.5rem 2rem;
      width: 12rem;
    }
    /* .subscribe {
      // align-self: flex-start; 
      margin-left: 3rem;
      margin-top: 1rem;
      padding: 0.5rem 2rem 0.5rem 2rem;
      width: 12rem;
    } */
  `;

  const MainCardBottom = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    margin: 0;
    .subscribe {
      margin: 1rem 1rem 0rem 3rem;
      padding-right: 3.4rem;
      height: 9rem;
      div {
      }
    }
  `;

  const MainCardRightBottom = styled.div`
    display: flex;
    flex-direction: column;
    .info {
      margin-top: 1rem;
      margin-right: 5rem;
      margin-bottom: 1rem;
      padding-right: 0.6rem;
    }
    .addSub {
      width: 9.2rem;
      height: 3.58rem;
    }
  `;

  return (
    <>
      <MainSection>
        <MainCardBody>
          <span className="user">huni 님의 Subllet</span>
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
                huni 님의 <br />
                <div>총 구독 수 : 7개</div>
                <div>총 스크랩 수 : 20개</div>
              </span>
              <span className="addSub">구독을 추가하세요</span>
            </MainCardRightBottom>
          </MainCardBottom>
        </MainCardBody>
      </MainSection>
    </>
  );
};

export default MainCard;
