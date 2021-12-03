import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SelectService, SelectPlanPrice, SelectDate } from "./Select";

const ModalBackdrop = styled.div`
  //! Modal backdrop css
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1010;
  background-color: rgba(0, 0, 0, 0.8);
`;
const ModalContainer = styled.div`
  //!Modal 구현 css

  background-color: #252a3c;
  border-radius: 0.5rem;
  width: 25%;
  /* width: 32rem; */
  min-width: 25rem;
  max-width: 37.5rem;
  height: 38rem;
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 0.31rem;
  transform: translate(-50%, -50%);
  z-index: 1011;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  /* border: 0.5px solid white; */
  span {
    display: flex;
    justify-content: center;
  }
`;

const AddHeader = styled.h1`
  font-size: 1.8rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: white;
  text-align: center;
  /* border: 0.5px solid white; */
`;

const Title = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  color: #ff8a00;
  /* border: 0.5px solid white; */
`;

const Button = styled.button`
  top: 1rem;
  position: relative;
  width: 40%;
  height: 3rem;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.4rem;
  margin-left: 0.2rem;
  background-color: #817c8d;
  font-family: "paybooc-Medium";
  font-size: 1rem;
  color: #ffffff;
  cursor: pointer;
  :hover {
    color: rgba(255, 255, 255, 0.85);
    box-shadow: rgba(30, 22, 54, 0.7) 0 5rem 0rem 2rem inset;
  }
`;

const AddModal = ({ openModalHandler }) => {
  const navigate = useNavigate();

  return (
    <>
      <ModalBackdrop
        onClick={() => {
          openModalHandler();
        }}
      ></ModalBackdrop>
      <ModalContainer welcome>
        <ContentBox>
          <AddHeader> 구독을 추가해주세요! </AddHeader>
          <Title>Service</Title>
          <SelectService />
          <Title>Plan & Price</Title>
          <SelectPlanPrice />
          <Title>PayDate</Title>
          <SelectDate />
          <span>
            <Button
              onClick={() => {
                // navigate("/mysubllet");
                openModalHandler();
              }}
            >
              구독추가
            </Button>
          </span>
        </ContentBox>
      </ModalContainer>
    </>
  );
};

export default AddModal;
