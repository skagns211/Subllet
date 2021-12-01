import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledBody = styled.div`
  color: white;
`;

const FilterLabel = styled.div`
  margin: 1rem 0rem;
  width: 70%;
  font-size: 2rem;
  div {
    padding-left: 20%;
  }
`;

const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;

  div {
    position: relative;
    top: -11.5rem;
    background: rgba(102, 102, 102, 0.8);
    border-radius: 10px;
    padding: 10.1rem;
  }

  label {
    border-radius: 5px;
    border: 1px solid #e69332;
    width: 70%;
    padding: 0.5rem 0rem;
    margin-top: 2rem;
  }
  label:hover {
    cursor: pointer;
  }
  ul {
    border-radius: 5px;
    list-style: none;
    padding-left: 0;
    position: absolute;
    z-index: 999;
    border: 1px solid #e69332;
    width: 70%;
    margin-top: 5rem;
  }
  li {
    padding: 1rem;
    background-color: #130d0a;
  }
  li:hover {
    background-color: #e69332;
    cursor: pointer;
  }
`;

export const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  position: relative;
  top: -11.5rem;
  background: rgba(102, 102, 102, 0.8);
  border-radius: 10px;
  padding: 10.1rem;
`;

const Filter = ({ category, setCategory, price, setPrice, free, setFree }) => {
  const categoryClick = () => {
    setCategory(!category);
    setPrice(false);
    setFree(false);
  };
  const priceClick = () => {
    setCategory(false);
    setPrice(!price);
    setFree(false);
  };
  const freeClick = () => {
    setCategory(false);
    setPrice(false);
    setFree(!free);
  };
  return (
    <StyledBody>
      <FilterLabel>
        <div>모두보기</div>
      </FilterLabel>
      <DropDown>
        <label onClick={categoryClick}>카테고리</label>
        {category ? (
          <ul>
            <li>Video</li>
            <li>Music</li>
            <li>Shopping</li>
            <li>Life</li>
          </ul>
        ) : null}
      </DropDown>
      <DropDown>
        <label onClick={priceClick}>가격</label>
        {price ? (
          <ul>
            <li>5000</li>
            <li>10000</li>
            <li>15000</li>
            <li>20000</li>
          </ul>
        ) : null}
      </DropDown>
      <DropDown>
        <label onClick={freeClick}>체험하기 유무</label>
        {free ? (
          <ul>
            <li>유</li>
            <li>무</li>
          </ul>
        ) : null}
      </DropDown>
    </StyledBody>
  );
};

export default Filter;
