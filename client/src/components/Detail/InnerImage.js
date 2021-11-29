import React from "react";
import styled from "styled-components";

const InnerImage = () => {
  const StyledBody = styled.section``;
  const BackgroundImage = styled.div`
    background-image: url("https://i.ibb.co/3FR86KX/2021-11-28-20-53-51.png");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 53vh;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  const ScrapButton = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `;
  const DetailMessage = styled.div`
    padding: 1rem;
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
  `;
  return (
    <>
      <div>InnerImage</div>
      <StyledBody>
        <BackgroundImage>
          <ScrapButton>
            <i class="far fa-star"></i>
            <div>0</div>
          </ScrapButton>
          <DetailMessage>
            <span>로켓배송 상품 100% 무료배송</span>
            <button>내 구독 목록에 추가</button>
          </DetailMessage>
        </BackgroundImage>
      </StyledBody>
    </>
  );
};

export default InnerImage;
