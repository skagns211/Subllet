import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledBody = styled.div``;
const ServiceList = styled.div`
  list-style: none;
  background-color: #252a3b;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 2rem 0rem 2rem;
  padding-top: 1.5rem;
  img {
    width: 100%;
    height: 100%;
    min-width: 10rem;
    max-width: 35%;
    max-height: 8rem;
    object-fit: cover;
    border-radius: 5px;
    margin: 0 0 1.5rem 10%;
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
const FilterList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("/service").then((res) => {
      setServices(res.data.services);
    });
  }, []);

  return (
    <StyledBody>
      <ServiceList>
        {services.map((service) => {
          return <img src={service.outer_image} alt="detail 이미지" />;
        })}
      </ServiceList>
    </StyledBody>
  );
};

export default FilterList;
