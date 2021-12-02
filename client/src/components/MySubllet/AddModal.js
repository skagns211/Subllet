import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SelectBox, SelectBox2, SelectBox3 } from "./Select";

const ModalContainer = styled.div`
  //!Modal 구현 css
  background-color: #3a3f51;
  border-radius: 5%;
  width: 32rem;
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
  justify-content: flex-start;
  align-items: center;
`;

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

const AddHeader = styled.h1`
  font-size: 2rem;
  margin-top: 1rem;
  color: white;
`;

const InputBox = styled.input`
  width: 24rem;
  height: 2.5rem;
  margin-top: 0.2rem;
  border-radius: 0.4rem;
  border: none;
  background-color: white;
  font-size: 1rem;
  text-align: center;
  ::-webkit-input-placeholder {
    text-align: center;
  }
`;

const DivInput = styled.div`
  width: 24rem;
  height: 2.5rem;
  font-size: 1.5rem;
  border-radius: 0.4rem;
  border: 0.5px solid white;
  text-align: center;
  justify-content: center;
  color: white;

  /* border: 0.5px solid white; */
`;

const Button = styled.button`
  top: 1rem;
  position: relative;
  width: 7rem;
  height: 2.62rem;
  border: none;
  border-radius: 0.4rem;
  margin-left: 0.2rem;
  background-color: #817c8d;
  font-family: "paybooc-Medium";
  font-size: 0.7rem;
  color: #ffffff;
  :hover {
    color: rgba(255, 255, 255, 0.85);
    box-shadow: rgba(30, 22, 54, 0.7) 0 5rem 0rem 2rem inset;
  }
`;

// const Button2 = styled.a`
//   -webkit-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
//   -moz-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
//   -ms-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
//   -o-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
//   transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
//   display: block;
//   margin-top: 0.624rem;
//   width: 5rem;
//   text-decoration: none;
//   border-radius: 0.25rem;
//   padding: 0.8rem 1.2rem;
//   color: rgba(30, 22, 54, 0.6);
//   box-shadow: rgba(30, 22, 54, 0.4) 0 0rem 0rem 0.125rem inset;
//   text-align: center;
//   :hover {
//     color: rgba(255, 255, 255, 0.85);
//     box-shadow: rgba(30, 22, 54, 0.7) 0 5rem 0rem 2rem inset;
//   }
//   @media only screen and (max-width: 600px) {
//     -webkit-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
//     -moz-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
//     -ms-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
//     -o-transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
//     width: 4rem;
//     height: 0.8rem;
//     font-size: 0.7rem;
//   }
// `;
const EmptySpace = styled.div`
  height: 1rem;
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
        <AddHeader> 구독을 추가해주세요! </AddHeader>
        <EmptySpace></EmptySpace>
        <SelectBox />
        <SelectBox2 />
        <SelectBox3 />
        <Button
          onClick={() => {
            // navigate("/mysubllet");
            openModalHandler();
          }}
        >
          구독추가
        </Button>
      </ModalContainer>
    </>
  );
};

export default AddModal;
