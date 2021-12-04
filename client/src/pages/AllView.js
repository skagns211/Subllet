import React, { useState } from "react";
import styled from "styled-components";

import Filter from "../components/AllView/Filter";
import FilterList from "../components/AllView/FilterList";

const StyledBody = styled.section`
  max-width: 950px;
  margin: 0 auto;
`;

const AllView = () => {
  const [category, setCategory] = useState(false);
  const [price, setPrice] = useState(false);
  const [free, setFree] = useState(false);
  const [open, setOpen] = useState(false);

  

  return (
    <>
      {category ? (
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
      ) : price ? (
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
      ) : free ? (
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
    </>
  );
};

export default AllView;
