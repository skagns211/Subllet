import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import IU from "../../IMG/아이유.jpeg";

const MyInfoContainer = styled.main`
  width: 100%;
  height: 30rem;
  margin-top: 2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  /* border: 0.5px solid white; */
  /* flex-basis: auto; */
`;

const MyInfoTitle = styled.div`
  height: 10%;
  font-size: 2rem;
  color: #ff8a00;
  /* border: 0.5px solid white; */
`;

const MyInfoBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252a3c;
  border-radius: 0.5rem;
  /* border: 0.5px solid red; */
`;
const LeftBox = styled.span`
  width: 35%;
  color: #ff8a00;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 0.5px solid white; */

  img {
    border-radius: 50%;
    width: 18rem;
    height: 18rem;
    margin: auto;
    /* border: 1px solid #b2b2b2; */
    object-fit: cover;
  }

  @media only screen and (max-width: 800px) {
    width: 45%;
  }
`;
const RightBox = styled.span`
  width: 40%;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 0.5px solid white; */
  justify-content: center;
  /* align-items: center; */
  div {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
  @media only screen and (max-width: 800px) {
    width: 45%;
  }
`;

const Button = styled.button`
  top: 1rem;
  /* position: relative; */
  width: 9rem;
  height: 3rem;
  border: none;
  border-radius: 0.4rem;
  margin-right: 1rem;
  background-color: #3a3f51;
  font-family: "paybooc-Medium";
  font-size: 1.1rem;
  color: #ff8a00;
  :hover {
    color: rgba(255, 255, 255, 0.85);
    box-shadow: rgba(30, 22, 54, 0.7) 0 5rem 0rem 2rem inset;
  }
`;

const MyInfo = () => {
  return (
    <MyInfoContainer>
      <MyInfoTitle>회원정보</MyInfoTitle>
      <MyInfoBox>
        <LeftBox>
          <img src={IU} />
        </LeftBox>
        <RightBox>
          <div>닉네임: IU</div>
          <div>이메일: iloveIU@gmail.com</div>
          <div>구독중: 7개</div>
          <div>총금액: 100,000원</div>
          <div>스크랩: 20개</div>
          <div>
            <Link to="/changeinfo">
              <Button>회원정보 변경</Button>
            </Link>
            <Link to="/delete">
              <Button>회원 탈퇴</Button>
            </Link>
          </div>
        </RightBox>
      </MyInfoBox>
    </MyInfoContainer>
  );
};

export default MyInfo;
