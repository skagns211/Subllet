import React from "react";
import styled from "styled-components";

const InnerImage = () => {
  const StyledBody = styled.section`
    max-width: 100%;
  `;
  const BackgroundImage = styled.div`
    background-image: url("https://i.ibb.co/3FR86KX/2021-11-28-20-53-51.png");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (min-device-width: 800px) {
      background-image: url("https://i.ibb.co/3FR86KX/2021-11-28-20-53-51.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 35rem;
      opacity: 0.7;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  `;
  const ScrapButton = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    div {
      font-size: 2rem;
    }
  `;
  const DetailMessage = styled.div`
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    margin: 0rem 1rem;
    button {
      padding: 1rem;
      font-size: 1.5rem;
      border-radius: 0.5rem;
      background-color: black;
      opacity: 0.7;
      color: white;
    }
  `;
  return (
    <StyledBody>
      <BackgroundImage>
        <ScrapButton>
          <i class="far fa-star fa-2x"></i>
          <div>0</div>
        </ScrapButton>
        <DetailMessage>
          <span>로켓배송 상품 100% 무료배송</span>
          <button>내 구독 목록에 추가</button>
        </DetailMessage>
      </BackgroundImage>
    </StyledBody>
  );
};

export default InnerImage;
