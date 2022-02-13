import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { selectPlan } from "../../actions";

const StyledBody = styled.section`
  max-width: 100%;
`;

const Service = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span {
      width: 100%;
    }
  }
`;

const ServiceDetail = styled.div`
  background-color: #252a3c;
  color: white;
  font-size: 1rem;
  @font-face {
    font-family: "InfinitySans-RegularA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "InfinitySans-RegularA1";
  border-radius: 5px;
  padding: 1rem;
  margin: 0.5rem 1rem;
  display: flex;
  flex-direction: column;

  label {
    margin: 0.5rem 0 0rem 0rem;
    :hover {
      cursor: pointer;
    }
    input {
      margin-right: 0.5rem;
      :hover {
        cursor: pointer;
      }
    }
  }
  div {
    margin: 0.5rem 0 0rem 0rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
    min-height: 20rem;
    flex-wrap: nowrap;
    margin: 1rem 1rem 1rem 1rem;
  }
`;

const LinkButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    @font-face {
      font-family: "InfinitySans-RegularA1";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
    font-family: "InfinitySans-RegularA1";
    background-color: #252a3c;
    margin: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    width: 100%;
    border: 0px;
    padding: 0.5rem;
    color: #ff8a00;
    :hover {
      background-color: #ff8a00;
      color: #252a3c;
      cursor: pointer;
    }
  }
  @media only screen and (min-width: 768px) {
    button {
      font-size: 1.5rem;
      margin: 0 1rem 1rem 1rem;
      padding: 1rem;
    }
  }
`;
const ServiceOption = styled.div`
  margin: 1rem 0 0 1rem;
  font-size: 1.5rem;
  color: #ff8a00;
  @media only screen and (min-width: 768px) {
    margin: 1rem 0 0 1rem;
    font-size: 2rem;
  }
`;

const Price = styled.span`
  margin-right: 1rem;
`;

const ServiceContent = ({ detail }) => {
  const dispatch = useDispatch();

  const [serviceMsg, setServiceMsg] = useState();

  useEffect(() => {
    if (detail.prices && serviceMsg === undefined) {
      setServiceMsg(detail.prices[0].message.split("-").slice(1));
      dispatch(selectPlan([detail.prices[0].title, detail.prices[0].price]));
    }
  }, [detail.prices, serviceMsg, dispatch]);

  const checked = (e) => {
    const plan = e.target.value.split(",");
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
                return <div key={idx}>- &nbsp;{`${message}`}</div>;
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
