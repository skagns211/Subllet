import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBody = styled.div``;
const ServiceList = styled.div`
  list-style: none;
  background-color: #252a3b;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 2rem 0rem 2rem;
  padding-top: 1.5rem;
  a {
    width: 18rem;
    max-width: 30%;
    /* min-width: 30%; */
    margin: 0.5rem 0.5rem 0.5rem 1.6%;
    img {
      min-width: 100%;
      max-height: 8rem;
      border-radius: 5px;
    }
  }

  @media only screen and (max-width: 500px) {
    img {
      margin: 0 0 1.5rem 10%;
    }
  }
  @media only screen and (min-width: 800px) {
    img {
      height: 10rem;
      /* min-width: 9rem; */
      /* width: 100%; */
      max-width: 30%;
      /* max-height: 8rem; */
      object-fit: fill;
      border-radius: 5px;
      margin: 0 0 3% 2.5%;
    }
  }
`;
const FilterList = ({ filter }) => {
  return (
    <StyledBody>
      <ServiceList>
        {filter &&
          filter.map((service) => {
            return (
              <Link key={service.id} to={`/detail/${service.id}`}>
                <img src={service.outer_image} alt="detail 이미지" />
              </Link>
            );
          })}
      </ServiceList>
    </StyledBody>
  );
};

export default FilterList;
