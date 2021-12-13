import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectPlan } from "../../actions";

const StyledBody = styled.div`
  max-width: 100%;
`;

const Service = styled.div`
  @media only screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span {
      width: 100%;
    }
  }
`;

const ServiceDetail = styled.div`
  background-color: #252a3b;
  color: white;
  font-size: 2rem;
  border-radius: 5px;
  padding: 1rem;
  margin: 0.5rem 0rem;
  display: flex;
  flex-direction: column;
  input {
    margin: 1rem;
  }

  @media only screen and (min-width: 800px) {
    height: 20rem;
    /* width: 37rem; */
    flex-wrap: nowrap;
  }
`;

const LinkButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: #252a3b;
    margin: 0.5rem 0rem;
    font-size: 2rem;
    border-radius: 5px;
    width: 100%;
    border: 0px;
    padding: 0.5rem;
    color: #e37b02;
  }
`;
const ServiceOption = styled.div`
  margin: 1rem 3rem;
  font-size: 2rem;
  color: #e37b02;
`;

const Price = styled.span`
  margin-right: 1rem;
`;

const ServiceContent = ({ detail }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const checked = (e) => {
    let plan = e.target.value.split(",");
    dispatch(selectPlan(plan));
  };

  const mvPage = () => {
    window.open(`${detail.url}`);
  };

  return (
    <StyledBody>
      <Service>
        <Price>
          <ServiceOption>Price</ServiceOption>
          <ServiceDetail>
            {detail.prices &&
              detail.prices.map((price, idx) => {
                return (
                  <label key={idx}>
                    <input
                      type="radio"
                      name="price"
                      value={`${price.title}, ${price.price}`}
                      onChange={checked}
                    />
                    {`${price.title} 월 ${price.price}`}
                  </label>
                );
              })}
          </ServiceDetail>
        </Price>
        <span>
          <ServiceOption>Service</ServiceOption>
          <ServiceDetail>
            {/* 1. 로켓배송상품 무료배송 <br />
            2. 새벽배송 (19시전까지 주문시) <br />
            3. 저녁배송 (09시전까지 주문시 당일배송) <br />
            4. 로켓배송상품 30일 무료반품 <br />
            5.쿠팡플레이 무료이용 */}
          </ServiceDetail>
        </span>
      </Service>
      <LinkButton>
        <button onClick={mvPage}>구독하러가기</button>
      </LinkButton>
    </StyledBody>
  );
};

export default ServiceContent;
