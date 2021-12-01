import React from "react";
import styled from "styled-components";
import dummy from "../../dummy/dummy";

const FilterList = () => {
  const StyledBody = styled.div`
    max-width: 100%;
  `;
  const ServiceList = styled.div`
    height: 100%;
    list-style: none;
    padding-top: 2rem;
    padding-left: 2rem;
    margin: 1rem 3rem;
    background-color: #252a3b;
    flex-direction: row;
    border-radius: 5px;

    img {
      margin: 0rem 1rem 2rem 1rem;
      width: 18rem;
      height: 9rem;
      object-fit: cover;
      border-radius: 5px;
      /* position: relative; */
    }
  `;
  return (
    <StyledBody>
      <div>Scrap</div>
      <ServiceList>
        {dummy.map(dummy => {
          return <img src={dummy.service.outer_image} />;
        })}
      </ServiceList>
    </StyledBody>
  );
};

export default FilterList;
