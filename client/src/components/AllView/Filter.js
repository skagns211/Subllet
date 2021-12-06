import React from "react";
import styled from "styled-components";

const StyledBody = styled.div`
  color: white;
`;

const FilterLabel = styled.div`
  margin-top: 2rem;
  width: 75%;
  font-size: 2rem;
  div {
    padding-left: 20%;
  }
  @media only screen and (min-width: 800px) {
    div {
      padding-left: 5%;
    }
  }
`;

const StyledDropDown = styled.div`
  display: flex;
  flex-direction: column;
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
  @media only screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;

    label {
      width: 100%;
      min-width: 18rem;
    }
  }
`;

const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;

  ul {
    border-radius: 5px;
    list-style: none;
    padding-left: 0;
    position: absolute;
    z-index: 999;
    border: 1px solid #e69332;
    margin-top: 5rem;
    background-color: #130d0a;
    opacity: 0.9;
    width: 70%;
    max-width: 41.5rem;
    li {
      padding: 1rem;
      background-color: #130d0a;
    }
    li:hover {
      background-color: #e69332;
      cursor: pointer;
    }
  }
  @media only screen and (min-width: 800px) {
    ul {
      width: 18rem;
    }
  }
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
      <StyledDropDown>
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
      </StyledDropDown>
    </StyledBody>
  );
};

export default Filter;
