import React from "react";
import styled from "styled-components";

const StyledBody = styled.section`
  color: white;
`;

const FilterLabel = styled.div`
  @font-face {
    font-family: "InfinitySans-RegularA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "InfinitySans-RegularA1";
  margin-top: 4rem;
  width: 75%;
  font-size: 2rem;
  div {
    padding-left: 20%;
  }
  @media only screen and (min-width: 800px) {
    margin-top: 1rem;
    div {
      padding-left: 5%;
    }
  }
`;

const StyledDropDown = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin-left: 0.6rem;
  }
`;

const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  width: 100%;
  div {
    border-radius: 5px;
    border: 1px solid #ff8a00;
    width: 70%;
    min-width: 18rem;
    max-width: 25rem;
    padding: 0.5rem 1rem;
    margin-top: 2rem;
    :hover {
      cursor: pointer;
      background-color: #ff8a00;
    }
  }
  ul {
    border-radius: 5px;
    list-style: none;
    padding-left: 0;
    position: absolute;
    z-index: 999;
    border: 1px solid #ff8a00;
    margin-top: 5rem;
    background-color: #130d0a;
    opacity: 0.9;
    width: 75%;
    min-width: 20rem;
    max-width: 27rem;
    li {
      padding: 1rem;
      background-color: #130d0a;
      :hover {
        background-color: #ff8a00;
        cursor: pointer;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    div {
      width: 80%;
      min-width: 10rem;
      margin-right: 0.5rem;
    }
    ul {
      width: 30%;
      min-width: 10rem;
      max-width: 17.7rem;

      margin-right: 0.5rem;
    }
  }
`;

const Filter = ({
  category,
  setCategory,
  price,
  setPrice,
  free,
  setFree,
  filterServices,
  categoryName,
  priceName,
  freeName,
}) => {
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
          <div onClick={categoryClick}>{categoryName}</div>
          {category ? (
            <ul onClick={categoryClick}>
              <li onClick={(category) => filterServices(category, price, free)}>
                모든 카테고리
              </li>
              <li onClick={(category) => filterServices(category, price, free)}>
                Video
              </li>
              <li onClick={(category) => filterServices(category, price, free)}>
                Music
              </li>
              <li onClick={(category) => filterServices(category, price, free)}>
                Shopping
              </li>
              <li onClick={(category) => filterServices(category, price, free)}>
                Book
              </li>
              <li onClick={(category) => filterServices(category, price, free)}>
                Life
              </li>
            </ul>
          ) : null}
        </DropDown>
        <DropDown>
          <div onClick={priceClick}>{priceName}</div>
          {price ? (
            <ul onClick={priceClick}>
              <li onClick={(price) => filterServices(category, price, free)}>
                모든 가격
              </li>
              <li onClick={(price) => filterServices(category, price, free)}>
                ~ 5000
              </li>
              <li onClick={(price) => filterServices(category, price, free)}>
                ~ 10000
              </li>
              <li onClick={(price) => filterServices(category, price, free)}>
                ~ 15000
              </li>
              <li onClick={(price) => filterServices(category, price, free)}>
                ~ 20000
              </li>
            </ul>
          ) : null}
        </DropDown>
        <DropDown>
          <div onClick={freeClick}>{freeName}</div>
          {free ? (
            <ul onClick={freeClick}>
              <li onClick={(free) => filterServices(category, price, free)}>
                모든 체험
              </li>
              <li onClick={(free) => filterServices(category, price, free)}>
                유
              </li>
              <li onClick={(free) => filterServices(category, price, free)}>
                무
              </li>
            </ul>
          ) : null}
        </DropDown>
      </StyledDropDown>
    </StyledBody>
  );
};

export default Filter;
