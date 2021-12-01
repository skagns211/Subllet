import React from "react";
import styled from "styled-components";
import InnerImage from "../components/Detail/InnerImage";
import ServiceContent from "../components/Detail/ServiceContent";
import Comment from "../components/Detail/Comment";

const Detail = () => {
  const StyledBody = styled.section`
    max-width: 1300px;
    margin: 0 auto;
    transition: 0.4s;
  `;
  return (
    <StyledBody>
      <InnerImage />
      <ServiceContent />
      <Comment />
    </StyledBody>
  );
};

export default Detail;
