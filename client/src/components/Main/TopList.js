import React from "react";
import styled from "styled-components";
import { IMG } from "../Main/imageUrl";

const StyledTopList = styled.span`
  color: #ff8a00;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const TopImg = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 0 0.5rem 0 0.5rem;
  img {
    /* margin-right: 1rem; */
    width: 100%;
    height: 170%;
  }
  @media only screen and (max-width: 800px) {
    img {
      width: 100%;
      height: 170%;
    }
  }
  @media only screen and (min-width: 1050px) and (max-width: 1300px) {
    flex-direction: column;
    img {
      width: 18rem;
      height: 6.55rem;
      margin-bottom: 0.2rem;
    }
  }
  @media only screen and (min-width: 1300px) {
    flex-direction: column;
    img {
      width: 12rem;
      height: 6.3rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const topListRight = IMG["topListRight"].map((el, idx) => {
  return (
    <div key={idx}>
      <img alt="topListRight" src={el}></img>
    </div>
  );
});

const TopList = () => {
  return (
    <StyledTopList>
      <div>Top 5</div>
      <TopImg>{topListRight}</TopImg>
    </StyledTopList>
  );
};

export default TopList;
