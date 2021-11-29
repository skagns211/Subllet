import React from "react";
import styled from "styled-components";
import backImg from "../IMG/MainCardBackImg.png";

const MainCard = () => {
  const MainCardBody = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-image: url(${backImg});
    background-repeat: no-repeat;
    background-size: 55rem 30rem;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    position: relative;
    span {
      border: 1px solid #ffffff;
      border-radius: 0.3rem;
      background-color: #252a3c;
      color: white;
    }
  `;

  const CardBox = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center;
    color: white; */
  `;

  return (
    <>
      <MainCardBody>
        <CardBox>
          <span>총 이용 금액: </span>
          <span>다음 결제까지</span>
          <span>구독중</span>
          <span>huni 님의</span>
          <span>구독을 추가하세요</span>
        </CardBox>
      </MainCardBody>
    </>
  );
};

export default MainCard;
