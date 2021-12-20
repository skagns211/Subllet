import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBody = styled.section`
  width: 100%;
  margin-top: 2rem;
`;

const ServiceList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  background-color: #252a3c;
  border-radius: 5px;
  margin: 1rem 1rem 1rem 1rem;
  padding-top: 0.5rem;

  a {
    margin: 0.5rem 0 0.5rem 0;
    width: 50%;
    height: 100%;
    img {
      width: 90%;
      min-height: 6rem;
      max-height: 10rem;
      margin-left: 5%;
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
      -webkit-transition: 0.3s;
      -moz-transition: 0.3s;
      -ms-transition: 0.3s;
      -o-transition: 0.3s;
      transition: 0.3s;
      :hover {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
  }
  div {
    color: white;
    width: 100%;
    height: 8rem;
    font-size: 2rem;
    margin-top: 5rem;
    text-align: center;
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
        {filter && filter.length > 0 ? (
          filter &&
          filter.map((service) => {
            return (
              <Link key={service.id} to={`/detail/${service.id}`}>
                <img src={service.outer_image} alt="detail 이미지" />
              </Link>
            );
          })
        ) : (
          <div>서비스가 없습니다</div>
        )}
      </ServiceList>
    </StyledBody>
  );
};

export default FilterList;
