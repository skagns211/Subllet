import React from "react";
import styled from "styled-components";

const ServiceContent = () => {
  const StyledBody = styled.div``;
  const Price = styled.form`
    background-color: #252a3b;
    color: white;
    margin: 0.5rem 3rem;
    font-size: 2rem;
  `;
  const Service = styled.form`
    background-color: #252a3b;
    color: white;
    margin: 0.5rem 3rem;
    font-size: 2rem;
  `;
  const LinkButton = styled.div`
    button {
      background-color: #252a3b;
      color: white;
      margin: 0.5rem 3rem;
      font-size: 2rem;
    }
  `;
  return (
    <>
      <div>ServiceContent</div>
      <StyledBody>
        <Price>
          <p>price</p>
          <input type="radio" id="2900" name="price" value="2900" checked />
          <label>월 2900원</label>
          <br />
          <input type="radio" id="3900" name="price" value="3900" />
          <label>월 3900원</label>
          <br />
          <input type="radio" id="4900" name="price" value="4900" />
          <label>월 4900원</label>
          <br />
        </Price>
        <Service>
          <p>service</p>
          <div>
            1. 로켓배송상품 무료배송 <br />
            2. 새벽배송 (19시전까지 주문시) <br />
            3. 저녁배송 (09시전까지 주문시 당일배송) <br />
            4. 로켓배송상품 30일 무료반품 <br />
            5.쿠팡플레이 무료이용
            <br />
          </div>
        </Service>
        <LinkButton>
          <button>구독하러가기</button>
        </LinkButton>
      </StyledBody>
    </>
  );
};

export default ServiceContent;
