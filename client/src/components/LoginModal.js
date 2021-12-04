import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBody = styled.div`
  color: white;
  background-color: #252a3b;
  border-radius: 10px;
  width: 32rem;
  max-width: 28rem;
  height: 10rem;
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 1rem;
  transform: translate(-50%, -50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  button {
    font-size: 1rem;
    background-color: #3b3f51;
    border: 0;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    color: #ff8a00;
  }
`;
const ModalBack = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9998;
  border: 2px solid white;
`;

const LoginModal = ({ handleClick }) => {
  return (
    <>
      <ModalBack onClick={handleClick} />
      <StyledBody>
        <div>로그인 하신 후 이용해 주시기 바랍니다.</div>
        <Link to="/userlogin">
          <button>로그인</button>
        </Link>
      </StyledBody>
    </>
  );
};

export default LoginModal;
