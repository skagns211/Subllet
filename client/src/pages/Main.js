import React from "react";
import styled from "styled-components";
import MainCard from "../components/Main/MainCard";
import GuestMainCard from "../components/Main/GuestMainCard";
import Video from "../components/Main/Video";
import Music from "../components/Main/Music";
import Shoping from "../components/Main/Shopping";
import Pick from "../components/Main/Pick";

const StyledBody = styled.section`
  max-width: 950px;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <StyledBody>
      {false ? <MainCard /> : <GuestMainCard />} {/* isLogin에 따라 */}
      <Video />
      <Music />
      <Shoping />
      <Pick />
    </StyledBody>
  );
};

export default Main;
