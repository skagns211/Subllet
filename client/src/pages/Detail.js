import React from "react";
import styled from "styled-components";
import InnerImage from "../components/Detail/InnerImage";
import ServiceContent from "../components/Detail/ServiceContent";
import Comment from "../components/Detail/Comment";

const Detail = () => {
  return (
    <>
      <div>Detail page</div>
      <InnerImage />
      <ServiceContent />
      <Comment />
    </>
  );
};

export default Detail;
