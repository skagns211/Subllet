import React from "react";
import styled from "styled-components";

const CustomerCenter = () => {
  const StyledBody = styled.div`
    @font-face {
      font-family: "InfinitySans-RegularA1";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
    font-family: "InfinitySans-RegularA1";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    color: white;
    font-size: 2rem;
    width: 95%;
    margin: auto;
    @media only screen and (max-width: 500px) {
      font-size: 1.8rem;
    }
    div {
      background-color: #252a3c;
      border-radius: 0.5rem;
      padding: 1.5em;
    }
  `;
  return (
    <StyledBody>
      <div>서비스 준비 중입니다.</div>
    </StyledBody>
  );
};

export default CustomerCenter;
