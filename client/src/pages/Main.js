import React from "react";
import styled from "styled-components";
import MainCard from "../components/Main/MainCard";
import TopList from "../components/Main/TopList";
import Video from "../components/Main/Video";
import Music from "../components/Main/Music";
import Shoping from "../components/Main/Shopping";

const Main = () => {
  const StyledBody = styled.section`
    max-width: 1300px;
    margin: 0 auto;
  `;

  return (
    <StyledBody>
      <MainCard />
      <Video />
      <Music />
      <Shoping />
    </StyledBody>
  );
};

export default Main;
