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
  const isLogin = window.localStorage.getItem("isLogin");
  const loginUserInfo = window.localStorage.getItem("loginUserInfo");
  const accessToken = window.localStorage.getItem("accessToken");

  const ServiceId = useParams().id;

  const [comments, setComments] = useState([]);
  const [detail, setDetail] = useState([]);
  const [scrapNum, setScrapNum] = useState();
  const [isScrap, setIsScrap] = useState();
  const [isSub, setIsSub] = useState();

  useEffect(() => {
    loginUserInfo &&
      window.localStorage.setItem("loginUserInfo", loginUserInfo);
  }, [loginUserInfo]);

  useEffect(() => {
    accessToken && window.localStorage.setItem("accessToken", accessToken);
  }, [accessToken]);

  useEffect(() => {
    isLogin && window.localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  useEffect(() => {
    axios
      .get(`/service/${ServiceId}`)
      .then((res) => {
        setComments(res.data.service.Comments);
        setDetail(res.data.service);
        setScrapNum(res.data.service.scrapNum);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isScrap]);

  console.log(detail);

  return (
    <StyledBody>
      <InnerImage
        isLogin={isLogin}
        ServiceId={ServiceId}
        accessToken={accessToken}
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
        accessToken={accessToken}
        loginUserInfo={loginUserInfo}
      />
    </StyledBody>
  );
};

export default Detail;
