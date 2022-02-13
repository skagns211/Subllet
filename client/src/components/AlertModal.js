import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBody = styled.div`
  color: white;
  background-color: black;
  border-radius: 10px;
  width: 18rem;
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
    background-color: #3a3f51;
    border: 0;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    color: #ff8a00;
    :hover {
      cursor: pointer;
      background-color: #ff8a00;
      color: #252a3c;
    }
  }
  div {
    display: flex;
    button {
      margin: 0 1rem;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 32rem;
    max-width: 28rem;
    height: 10rem;
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

const AlertModal = ({
  handleClick,
  alertMsg,
  clickDel,
  del,
  notLogin,
  success,
  delAcc,
  checkDel,
  SuccessDel,
}) => {
  return (
    <>
      <ModalBack onClick={handleClick} />
      <StyledBody>
        <div>{alertMsg.message}</div>
        {del ? (
          <button onClick={clickDel}>{alertMsg.button}</button>
        ) : success ? (
          <Link to="/mysubllet">
            <button>{alertMsg.button}</button>
          </Link>
        ) : delAcc ? (
          <Link to="/main">
            <button>{alertMsg.button}</button>
          </Link>
        ) : checkDel ? (
          <div>
            <button onClick={SuccessDel}>{alertMsg.button}</button>
            <button onClick={handleClick}>취소</button>
          </div>
        ) : notLogin ? (
          <Link to="/userlogin">
            <button>{alertMsg.button}</button>
          </Link>
        ) : (
          <button onClick={handleClick}>{alertMsg.button}</button>
        )}
      </StyledBody>
    </>
  );
};

export default AlertModal;
