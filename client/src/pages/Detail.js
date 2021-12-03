import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InnerImage from "../components/Detail/InnerImage";
import ServiceContent from "../components/Detail/ServiceContent";
import Comment from "../components/Detail/Comment";
import { useParams } from "react-router";
import axios from "axios";

const StyledBody = styled.section`
  max-width: 950px;
  margin: 0 auto;
  transition: 0.4s;
`;

const Detail = () => {
  const ServiceId = useParams().id;
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios
      .get(`https://localhost:4000/service/${ServiceId}`, {
        withCredentials: true,
      })
      .then((res) => {
        setDetail(res.data.service);
      });
  }, []);

  console.log(detail);

  return (
    <StyledBody>
      <InnerImage detail={detail} />
      <ServiceContent detail={detail} />
      <Comment detail={detail} />
    </StyledBody>
  );
};

export default Detail;
