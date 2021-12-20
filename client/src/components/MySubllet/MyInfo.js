import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyInfoContainer = styled.main`
  width: 100%;
  height: 30rem;
  margin-top: 2rem;
  @font-face {
    font-family: "InfinitySans-RegularA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "InfinitySans-RegularA1";
  /* font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif; */
  /* border: 0.5px solid white; */ /* flex-basis: auto; */
  @media only screen and (max-width: 600px) {
    width: 98%;
    height: 26rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const MyInfoTitle = styled.div`
  height: 10%;
  font-size: 1.8rem;
  color: #ff8a00;
  display: flex;
  align-items: center;
  /* border: 0.5px solid white; */
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
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
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const LeftBox = styled.span`
  width: 35%;
  color: #ff8a00;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 0.5px solid white; */
  @media only screen and (min-width: 601px) and (max-width: 850px) {
    width: 40%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 80%;
  }

  img {
    border-radius: 50%;
    width: 18rem;
    height: 18rem;
    margin: auto;
    /* border: 1px solid #b2b2b2; */
    object-fit: cover;
    @media only screen and (min-width: 601px) and (max-width: 850px) {
      width: 14rem;
      height: 14rem;
    }
    @media only screen and (max-width: 600px) {
      width: 9rem;
      height: 9rem;
    }
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
  @media only screen and (max-width: 600px) {
    display: grid;
    width: 60%;
    /* height: 50%; */
  }

  div {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    /* border: 0.5px solid white; */
    display: flex;

    a {
      width: 52%;
      display: flex;
      align-items: center;
      text-align: center;
      button {
        @media only screen and (max-width: 600px) {
          font-size: 0.75rem;
        }
      }
    }
    @media only screen and (min-width: 601px) and (max-width: 850px) {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
    @media only screen and (max-width: 600px) {
      /* align-items: start; */
      width: 100%;
      font-size: 0.9rem;
      margin-top: 0.3rem;
      margin-bottom: 0.3rem;
    }
  }
`;

const Button = styled.button`
  top: 1rem;
  /* position: relative; */
  width: 9rem;
  height: 3rem;
  border: none;
  border-radius: 0.4rem;
  /* margin-right: 1rem; */
  background-color: #3a3f51;
  @font-face {
    font-family: "InfinitySans-RegularA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "InfinitySans-RegularA1";
  font-size: 1rem;
  color: #ff8a00;
  cursor: pointer;
  :hover {
    color: #3a3f51;
    font-weight: bold;
    box-shadow: #ff8a00 0 5rem 0rem 2rem inset;
  }
  @media only screen and (min-width: 601px) and (max-width: 850px) {
    width: 7rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 600px) {
    width: 93%;
    height: 2rem;
    font-size: 0.8rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const MyInfo = ({ myScrap }) => {
  const state = useSelector((state) => state);
  const {
    email,
    nickname,
    profile,
    total_price,
    total_scraps,
    total_subscribes,
  } = state.loginUserInfo;
  const defaultImg = "https://i.esdrop.com/d/z3v0lj8ztjvc/kXWkE8sPcW.png";

  return (
    <MyInfoContainer>
      <MyInfoTitle>회원정보</MyInfoTitle>
      <MyInfoBox>
        <LeftBox>
          <img src={profile ? profile : defaultImg} />
        </LeftBox>
        <RightBox>
          <div>닉네임: {nickname}</div>
          <div>이메일: {email}</div>
          <div>구독중: {total_subscribes}</div>
          <div>
            총금액:{" "}
            {total_price &&
              total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            &nbsp;원
          </div>
          <div>스크랩: {myScrap.length}</div>
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
