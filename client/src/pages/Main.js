import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MainCard from "../components/Main/MainCard";
import GuestMainCard from "../components/Main/GuestMainCard";
import Video from "../components/Main/Video";
import Music from "../components/Main/Music";
import Shopping from "../components/Main/Shopping";
import Pick from "../components/Main/Pick";
import Book from "../components/Main/Book";
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

  return (
    <>
      <StyledTopBody>
        {state.isLogin ? <MainCard /> : <GuestMainCard />}
      </StyledTopBody>
      <StyledBottomBody>
        <Video />
        <Music />
        <Shopping />
        <Pick />
        <Book />
        <Life />
      </StyledBottomBody>
    </>
  );
};

export default Main;
