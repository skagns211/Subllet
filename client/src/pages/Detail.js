import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InnerImage from "../components/Detail/InnerImage";
import ServiceContent from "../components/Detail/ServiceContent";
import Comment from "../components/Detail/Comment";
import { useParams } from "react-router";
import axios from "axios";

const StyledBody = styled.article`
  max-width: 950px;
  margin: 0 auto;
  transition: 0.4s;
`;

const Detail = () => {
  const ServiceId = Number(useParams().id);

  const [detail, setDetail] = useState([]);
  const [scrapNum, setScrapNum] = useState();
  const [isScrap, setIsScrap] = useState(false);
  const [isSub, setIsSub] = useState(false);
  const [comments, setComments] = useState([]);
  const [change, setChange] = useState("");

  useEffect(() => {
    axios.get(`/service/${ServiceId}`).then((res) => {
      setDetail(res.data.service);
      setScrapNum(res.data.service.scrapNum);
      setComments(res.data.service.Comments);
    });
  }, [isScrap, change]);

  return (
    <StyledBody>
      <InnerImage
        ServiceId={ServiceId}
        detail={detail}
        scrapNum={scrapNum}
        isScrap={isScrap}
        setIsScrap={setIsScrap}
        isSub={isSub}
        setIsSub={setIsSub}
      />
      <ServiceContent detail={detail} />
      <Comment
        detail={detail}
        ServiceId={ServiceId}
        comments={comments}
        setComments={setComments}
        setChange={setChange}
        change={change}
      />
    </StyledBody>
  );
};

export default Detail;
