import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import LoginModal from "../LoginModal";

const StyledBody = styled.section`
  margin-top: 1rem;
  max-width: 100%;
`;
const BackgroundImage = styled.div`
  background-image: url(${(props) => props.detail});
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  @media only screen and (min-device-width: 800px) {
    background-image: url(${(props) => props.detail});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 35rem;
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const ScrapButton = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  div {
    font-size: 2rem;
    color: yellow;
  }
  i {
    color: yellow;
  }
`;
const DetailMessage = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  margin: 0rem 1rem;
  button {
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    background-color: black;
    opacity: 0.7;
    color: white;
  }
`;

const InnerImage = ({ isLogin, ServiceId, accessToken, detail }) => {
  const state = useSelector((state) => state);

  console.log(state.service);

  const [open, setOpen] = useState(false);
  const [isScrap, setIsScrap] = useState();
  const [isSub, setIsSub] = useState();
  const [scrapNum, setScrapNum] = useState();

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (JSON.parse(isLogin)) {
      axios
        .all([
          axios.get(`/scrap/${ServiceId}`, {
            headers: { authorization: `Bearer ${JSON.parse(accessToken)}` },
          }),
          axios.get(`/subscribe/${ServiceId}`, {
            headers: { authorization: `Bearer ${JSON.parse(accessToken)}` },
          }),
          // axios.get(`/service/${ServiceId}`, {
          //   headers: { authorization: `Bearer ${JSON.parse(accessToken)}` },
          // }),
        ])
        .then(
          axios.spread((isScrap, isSub, scrapNum) => {
            setIsScrap(isScrap.data.isScrap);
            setIsSub(isSub.data.isSubscribe);
            // setScrapNum(scrapNum.data.service.scrapNum);
          })
        );
    }
  }, []);

  const addScrap = () => {
    axios
      .post(`/scrap/${ServiceId}`, null, {
        headers: { authorization: `Bearer ${JSON.parse(accessToken)}` },
      })
      .then(() => {
        setIsScrap(true);
      });
  };

  const delScrap = () => {
    axios
      .delete(`/scrap/${ServiceId}`, {
        headers: { authorization: `Bearer ${JSON.parse(accessToken)}` },
      })
      .then(() => {
        setIsScrap(false);
      });
  };

  const addSub = () => {
    axios
      .post(
        `/subscribe/${ServiceId}`,
        {
          planname: state.selectPlan.planname,
          planprice: state.selectPlan.planprice,
        },
        {
          headers: { authorization: `Bearer ${JSON.parse(accessToken)}` },
        }
      )
      .then(() => {
        setIsSub(true);
      });
  };

  const delSub = () => {
    axios
      .delete(`/subscribe/${ServiceId}`, {
        headers: { authorization: `Bearer ${JSON.parse(accessToken)}` },
      })
      .then(() => {
        setIsSub(false);
      });
  };

  const ServiceDetail = state.services.filter((service) => {
    return service.id === ServiceId;
  });

  return (
    <StyledBody>
      {open ? <LoginModal handleClick={handleClick} /> : null}
      <BackgroundImage image={state.service.inner_image}>
        <ScrapButton>
          {JSON.parse(isLogin) && isScrap ? (
            <>
              <i onClick={delScrap} className="fas fa-star fa-2x"></i>
              <div>{scrapNum}</div>
            </>
          ) : JSON.parse(isLogin) && !isScrap ? (
            <>
              <i onClick={addScrap} className="far fa-star fa-2x"></i>
              <div>{scrapNum}</div>
            </>
          ) : (
            <>
              <i onClick={handleClick} className="far fa-star fa-2x"></i>
              <div>{scrapNum}</div>
            </>
          )}
        </ScrapButton>
        <DetailMessage>
          <span>로켓배송 상품 100% 무료배송</span>
          {JSON.parse(isLogin) && isSub ? (
            <button onClick={delSub}>구독중</button>
          ) : JSON.parse(isLogin) && !isSub ? (
            <button onClick={addSub}>내 구독 목록에 추가</button>
          ) : (
            <button onClick={handleClick}>내 구독 목록에 추가</button>
          )}
        </DetailMessage>
      </BackgroundImage>
    </StyledBody>
  );
};

export default InnerImage;
