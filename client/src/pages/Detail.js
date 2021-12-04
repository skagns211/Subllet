import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InnerImage from "../components/Detail/InnerImage";
import ServiceContent from "../components/Detail/ServiceContent";
import Comment from "../components/Detail/Comment";
import { useParams } from "react-router";
import axios from "axios";
require("dotenv").config();

const StyledBody = styled.section`
  max-width: 950px;
  margin: 0 auto;
  transition: 0.4s;
`;

const Detail = () => {
  const ServiceId = useParams().id;
  const [detail, setDetail] = useState({});
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/service/${ServiceId}`, {
        withCredentials: true,
      })
      .then((res) => {
        setDetail(res.data.service);
        setComments(res.data.Comments);
      });
  }, []);

  return (
    <StyledBody>
      <InnerImage open={open} detail={detail} handleClick={handleClick} />
      <ServiceContent detail={detail} />
      <Comment detail={detail} comments={comments} />
    </StyledBody>
  );
};

export default Detail;
