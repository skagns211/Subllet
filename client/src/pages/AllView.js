import React, { useState } from "react";
import styled from "styled-components";

import Filter from "../components/AllView/Filter";
import FilterList from "../components/AllView/FilterList";

const AllView = () => {
  const StyledBody = styled.section`
    max-width: 1300px;
  `;
  const ModalBackdrop = styled.div`
    // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
    max-width: 1300px;
  `;
  const [category, setCategory] = useState(false);
  const [price, setPrice] = useState(false);
  const [free, setFree] = useState(false);

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
      {category ? (
        <ModalBackdrop onClick={categoryClick}>
          <Filter
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            free={free}
            setFree={setFree}
          />
          <FilterList />
        </ModalBackdrop>
      ) : price ? (
        <ModalBackdrop onClick={priceClick}>
          <Filter
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            free={free}
            setFree={setFree}
          />
          <FilterList />
        </ModalBackdrop>
      ) : free ? (
        <ModalBackdrop onClick={freeClick}>
          <Filter
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            free={free}
            setFree={setFree}
          />
          <FilterList />
        </ModalBackdrop>
      ) : (
        <StyledBody>
          <Filter
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            free={free}
            setFree={setFree}
          />
          <FilterList />
        </StyledBody>
      )}
    </StyledBody>
  );
};

export default AllView;
