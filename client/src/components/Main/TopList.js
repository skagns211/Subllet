import React from "react";
import styled from "styled-components";
import { IMG } from "../Main/imageUrl";

const TopList = () => {
  const StyledTopList = styled.div`
    color: #ff8a00;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-left: 0.5rem;
  `;

  const TopImg = styled.div`
    display: flex;
    img {
      height: 4rem;
      width: 9.6rem;
    }
  `;

  return (
    <StyledTopList>
      <div>Top 5</div>
      <TopImg>
        {IMG["topList"].map((el) => {
          return <img alt="TopList" src={el}></img>;
        })}
      </TopImg>
    </StyledTopList>
  );
};

export default TopList;
