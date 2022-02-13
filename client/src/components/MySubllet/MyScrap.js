import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MyScrapContainer = styled.main`
  /* width: 100%; */
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  /* margin-top: 2rem; */
  /* border: 0.5px solid white; */
  /* flex-basis: auto; */
  @media only screen and (max-width: 600px) {
    width: 98%;
    margin-top: 0rem;
    margin-left: auto;
    margin-right: auto;
  }
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
  align-items: center;
  font-size: 2rem;
  color: #ff8a00;
  /* border: 0.5px solid white; */
  @media only screen and (max-width: 600px) {
    width: 85%;
    font-size: 1.6rem;
  }
`;

const MyScrapBox = styled.div`
  width: 100%;
  min-height: 5rem;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 1%;
  display: flex;
  /* display: inline-flex; */
  /* flex-wrap: wrap; */
  justify-content: center;
  /* align-items: center; */
  background-color: #252a3c;
  border-radius: 0.5rem;
  /* border: 0.5px solid red; */
`;
const InBox = styled.div`
  width: 95%;
  display: inline-flex;
  flex-wrap: wrap;
  /* border: 1px solid white; */
  div {
    &.noScrapMessage {
      width: 100%;
      height: 75%;
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  }
  span {
    width: 33.3%;
    margin-top: 1%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-right: 0rem;
    @media only screen and (max-width: 600px) {
      width: 49%;
    }
  }
`;

const ScrapImg = styled.img`
  width: 98%;
  /* height: 10rem; */
  display: flex;
  object-fit: cover;
  border-radius: 0.2rem;
`;

const MyScrap = ({ myScrap }) => {
  const navigate = useNavigate();
  return (
    <MyScrapContainer>
      <TitleBox>
        <MyScrapTitle>My Scrap</MyScrapTitle>
      </TitleBox>
      <MyScrapBox>
        <InBox>
          {myScrap.length === 0 ? (
            <div className="noScrapMessage">스크랩한 서비스가 없습니다.</div>
          ) : (
            myScrap.map((el) => {
              return (
                <span
                  onClick={() => {
                    navigate(`/detail/${el.id}`);
                  }}
                >
                  <ScrapImg src={el.outer_image} />
                </span>
              );
            })
          )}
        </InBox>
      </MyScrapBox>
    </MyScrapContainer>
  );
};

export default MyScrap;
