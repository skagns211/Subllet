import React, { useState } from "react";
import styled from "styled-components";
import dummy from "../../dummy/dummy";

const MyScrapContainer = styled.main`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  /* margin-top: 2rem; */
  /* border: 0.5px solid white; */
  /* flex-basis: auto; */
`;
const TitleBox = styled.div`
  width: 100%;
  height: 3rem;
  display: inline-flex;
  /* border: 0.5px solid red; */
`;

const MyScrapTitle = styled.div`
  width: 100%;
  /* height: 10%; */
  display: flex;
  font-size: 2rem;
  color: #ff8a00;
  /* border: 0.5px solid white; */
`;
const MyScrapBox = styled.div`
  width: 100%;
  height: 90%;
  display: inline-flex;
  flex-wrap: wrap;
  /* justify-content: center;
  align-items: center; */
  background-color: #252a3c;
  border-radius: 1.2rem;
  border: 0.5px solid white;
`;

const ScrapImg = styled.img`
  max-width: 50%;
  height: 10rem;
  margin: auto;
  display: flex;
  object-fit: cover;
  border-radius: 1.2rem;
`;

const MyScrap = () => {
  return (
    <MyScrapContainer>
      <TitleBox>
        <MyScrapTitle>My Scrap</MyScrapTitle>
      </TitleBox>
      <MyScrapBox>
        {dummy.map((el) => {
          return <ScrapImg src={el.service.outer_image} />;
        })}
      </MyScrapBox>
    </MyScrapContainer>
  );
};

export default MyScrap;
