import React from "react";
import styled from "styled-components";
import dummy from "../../dummy/dummy";

const StyledBody = styled.div``;
const ServiceList = styled.div`
  list-style: none;
  background-color: #252a3b;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 2rem 0rem 2rem;
  padding-top: 1.5rem;
  img {
    width: 100%;
    height: 100%;
    min-width: 10rem;
    width: 100%;
    max-width: 35%;
    max-height: 8rem;
    object-fit: cover;
    border-radius: 5px;
    margin: 0 0 1.5rem 10%;
  }
  @media only screen and (max-width: 500px) {
    img {
      margin: 0 0 1.5rem 10%;
    }
  }
  @media only screen and (min-width: 800px) {
    img {
      height: 100%;
      min-width: 9rem;
      width: 100%;
      max-width: 30%;
      max-height: 8rem;
      object-fit: cover;
      border-radius: 5px;
      margin: 0 0 3% 2.5%;
    }
  }
`;
const FilterList = () => {
  return (
    <StyledBody>
      <ServiceList>
        {dummy.map((dummy) => {
          return <img src={dummy.service.outer_image} />;
        })}
      </ServiceList>
    </StyledBody>
  );
};

export default FilterList;
