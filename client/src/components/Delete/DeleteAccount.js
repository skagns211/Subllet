import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBody = styled.div`
  color: white;
  margin: 2rem auto;
  max-width: 50rem;
`;

const StyledForm = styled.div`
  background-color: #252a3c;
  margin: 1rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  div {
    margin: 1rem;
    font-size: 1rem;
  }
  a {
    margin-top: 1rem;
    border: 1px solid #ff8a00;
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 1rem;
    :hover {
      background-color: #ff8a00;
    }
  }
  @media only screen and (min-width: 768px) {
    div {
      font-size: 2rem;
    }
    a {
      margin-top: 2rem;
      font-size: 2rem;
    }
  }
`;

const DeleteAccount = () => {
  return (
    <StyledBody>
      <StyledForm>
        <div>그동안 서비스를 이용해 주셔서 감사합니다</div>
        <Link to="/main">홈으로</Link>
      </StyledForm>
    </StyledBody>
  );
};

export default DeleteAccount;
