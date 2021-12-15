import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBody = styled.section`
  width: 100%;
  margin-top: 2rem;
`;

const ServiceList = styled.div`
  list-style: none;
  background-color: #252a3b;
  border-radius: 5px;
  margin: 1rem 1rem 1rem 1rem;
  padding-top: 1rem;
  padding-left: 2rem;
  a {
    margin: 0.5rem 0 0.5rem 0;
    img {
      width: 90%;
      height: 9rem;
      border-radius: 5px;
      margin: 1rem 0rem;
    }
  }

  @media only screen and (min-width: 425px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 1rem;
    padding-left: 0rem;
    a {
      margin: 0.5rem 0.5rem 0.5rem 2.8%;
      width: 45%;
      img {
        width: 100%;
        height: 100%;
        margin: 0rem 0rem;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    a {
      margin: 0.5rem 0rem 0.5rem 2.5%;
      width: 30%;
      img {
        width: 100%;
        margin: 0rem 0rem;
        height: 8rem;
      }
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
