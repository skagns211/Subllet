import React from "react";
import styled from "styled-components";

const CheckBoxContainer = styled.div`
  height: 2rem;
  margin-bottom: 0.5rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  vertical-align: middle;
  /* border: 1px solid white; */
  span {
    color: white;

    text-indent: 1rem;
    &.req {
      text-indent: 0.5rem;
      color: #ff8a00;
    }
  }
`;
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckBox = styled.div`
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  border: ${(props) =>
    props.isCheck ? "0.1rem solid black" : "0.1rem solid  #dddddd"};
  background: ${(props) => (props.isAgree ? "black" : "white")};
  border-radius: 0.4rem;
  transition: all 150ms;
  /* border: 1px solid yellow; */
  ${Icon} {
    visibility: ${(props) => (props.isAgree ? "visible" : "hidden")};
  }
`;

const AgreeCheck = ({ isAgree, setIsAgree }) => {
  return (
    <CheckBoxContainer onClick={() => setIsAgree(!isAgree)}>
      <StyledCheckBox isAgree={isAgree}>
        <Icon viewBox="0 0 24 24">
          <polyline points="19 7 10 17 5 12" />
        </Icon>
      </StyledCheckBox>
      <span>개인정보수집 및 이용동의</span>
      <span className="req">(필수)</span>
    </CheckBoxContainer>
  );
};

export default AgreeCheck;
