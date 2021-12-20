import React from "react";
import styled from "styled-components";

const CustomerCenter = () => {
  const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    color: white;
    font-size: 2rem;
    div {
      background-color: #252a3c;
      border-radius: 0.5rem;
      padding: 1.5em;
    }
  `;
  return (
    <StyledBody>
      <div>
        죄송합니다, <br />
        서비스 준비 중입니다.
      </div>
    </StyledBody>
  );
};

export default CustomerCenter;
