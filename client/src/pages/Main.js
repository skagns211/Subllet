import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MainCard from "../components/Main/MainCard";
import GuestMainCard from "../components/Main/GuestMainCard";
import Video from "../components/Main/Video";
import Music from "../components/Main/Music";
import Shoping from "../components/Main/Shopping";
import Pick from "../components/Main/Pick";
import Life from "../components/Main/Life";

const StyledTopBody = styled.section`
  max-width: 1100px;
  margin: 0 auto;
`;

const StyledBottomBody = styled.section`
  max-width: 950px;
  margin: 0 auto;
`;

const Main = () => {
  const state = useSelector((state) => state);
  const isLogin = window.localStorage.getItem("isLogin");
  const loginUserInfo = window.localStorage.getItem("loginUserInfo");
  const accessToken = window.localStorage.getItem("accessToken");
  console.log(isLogin);

  useEffect(() => {
    loginUserInfo &&
      window.localStorage.setItem("loginUserInfo", loginUserInfo);
  }, [loginUserInfo]);

  useEffect(() => {
    accessToken && window.localStorage.setItem("accessToken", accessToken);
  }, [accessToken]);

  useEffect(() => {
    isLogin && window.localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  console.log(state.services);
  console.log(state.authUserInfo);
  return (
    <>
      <StyledTopBody>
        {isLogin === "true" ? <MainCard /> : <GuestMainCard />}
        {/* isLogin에 따라 */}
      </StyledTopBody>
      <StyledBottomBody>
        <Video />
        <Music />
        <Shoping />
        <Pick />
        <Life />
      </StyledBottomBody>
    </>
  );
};

export default Main;
