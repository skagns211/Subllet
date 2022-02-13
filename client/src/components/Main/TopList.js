import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledTopList = styled.span`
  color: #ff8a00;
  font-size: 1.5rem;
  // margin-top: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  .top {
    padding: 0 0 0.6rem 0.5rem;
    font-weight: bold;
    text-decoration: underline;
  }
`;

const TopImg = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 0 0.5rem 0 0.5rem;
  cursor: pointer;
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
  @media only screen and (min-width: 800px) and (max-width: 1050px) {
    img {
      width: 100%;
      height: 100%;
      margin-bottom: 0.2rem;
    }
  }
  @media only screen and (min-width: 1050px) and (max-width: 1300px) {
    flex-direction: column;
    img {
      width: 15rem;
      height: 6.55rem;
      margin-bottom: 0.2rem;
    }
  }
  @media only screen and (min-width: 1300px) {
    flex-direction: column;
    img {
      width: 16rem;
      height: 6.3rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const TopList = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();

  const sortedTopList = state.services.sort((a, b) => {
    return b.total_likes - a.total_likes;
  });
  const top5 = sortedTopList.slice(0, 5).map((el) => {
    return el;
  });

  const handleIntoDetail = (path) => {
    navigate(`/detail/${path}`);
  };

  const topList = top5.map((el, idx) => {
    return (
      <div key={idx}>
        <img
          alt="topList"
          src={el.outer_image}
          onClick={() => handleIntoDetail(el.id)}
        ></img>
      </div>
    );
  });

  return (
    <StyledTopList>
      <div className="top">Top 5</div>
      <TopImg>{topList}</TopImg>
    </StyledTopList>
  );
};

export default TopList;
