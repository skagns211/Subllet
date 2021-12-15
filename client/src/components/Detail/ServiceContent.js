import React, { useEffect, useState, useRef } from "react";
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

const ServiceContent = ({ detail, prices }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [serviceMsg, setServiceMsg] = useState();

  useEffect(() => {
    if (detail.prices && serviceMsg === undefined) {
      setServiceMsg(detail.prices[0].message.split("-").slice(1));
      dispatch(selectPlan([detail.prices[0].title, detail.prices[0].price]));
    }
  });

  const checked = (e) => {
    const plan = e.target.value.split(",");
    console.log(plan);
    dispatch(selectPlan(plan));

    const filterMsg = detail.prices.filter((price) => {
      return price.title === plan[0];
    });

    setServiceMsg(filterMsg[0].message.split("-").slice(1));
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
                  <label key={price.id}>
                    <input
                      type="radio"
                      name="price"
                      value={`${price.title}, ${price.price}`}
                      onChange={checked}
                      defaultChecked={idx === 0}
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
            {serviceMsg &&
              serviceMsg.map((message, idx) => {
                return <div key={idx}>{`- ${message}`}</div>;
              })}
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
