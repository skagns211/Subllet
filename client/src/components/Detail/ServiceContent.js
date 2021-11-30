import React from "react";
import styled from "styled-components";

const ServiceContent = () => {
  const StyledBody = styled.div`
    max-width: 100%;
  `;

  const Service = styled.div`
    @media only screen and (min-width: 800px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  `;

  const ServiceDetail = styled.div`
    background-color: #252a3b;
    color: white;
    font-size: 2rem;
    border-radius: 5px;
    padding: 1rem;
    margin: 0.5rem 0rem;
    @media only screen and (min-width: 800px) {
      height: 20rem;
      width: 37rem;
      flex-wrap: nowrap;
    }
  `;

  const LinkButton = styled.div`
    display: flex;
    justify-content: center;
    button {
      background-color: #252a3b;
      color: #e37b02;
      margin: 0.5rem 0rem;
      font-size: 2rem;
      border-radius: 5px;
      width: 100%;
      border: 0px;
      padding: 0.5rem;
      @media only screen and (min-width: 800px) {
      }
    }
  `;
  const ServiceOption = styled.div`
    margin: 1rem 3rem;
    font-size: 2rem;
    color: #e37b02;
  `;

  return (
    <StyledBody>
      <Service>
        <span>
          <ServiceOption>Price</ServiceOption>
          <ServiceDetail>
            <input type="radio" name="price" value="2900" checked />
            <label>월 2900원</label>
            <br />
            <input type="radio" name="price" value="3900" />
            <label>월 3900원</label>
            <br />
            <input type="radio" name="price" value="4900" />
            <label>월 4900원</label>
          </ServiceDetail>
        </span>
        <span>
          <ServiceOption>Service</ServiceOption>
          <ServiceDetail>
            1. 로켓배송상품 무료배송 <br />
            2. 새벽배송 (19시전까지 주문시) <br />
            3. 저녁배송 (09시전까지 주문시 당일배송) <br />
            4. 로켓배송상품 30일 무료반품 <br />
            5.쿠팡플레이 무료이용
          </ServiceDetail>
        </span>
      </Service>

      <LinkButton>
        <button>구독하러가기</button>
      </LinkButton>
    </StyledBody>
  );
};

export default ServiceContent;
