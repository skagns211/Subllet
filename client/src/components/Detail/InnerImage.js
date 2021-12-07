import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [isScrap, setIsScrap] = useState();
  const [scrapNum, setScrapNum] = useState();

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (isLogin === true) {
      axios
        .get(`/scrap/${ServiceId}`, {
          headers: { authorization: `Bearer ${JSON.parse(accessToken)}` },
        })
        .then((res) => {
          setIsScrap(res.data.isScrap);
          // console.log(res);
        });
    }
  });

  useEffect(() => {
    axios.get(`/service/${ServiceId}`).then((res) => {
      setScrapNum(res.data.scrapNum);
    });
  });

  const addScrap = () => {
    axios
      .post(`/scrap/${ServiceId}`, null, {
        headers: { authorization: `Bearer ${JSON.parse(accessToken)}` },
      })
      .then(() => {
        setIsScrap(true);
      });
  };

  const deleteScrap = () => {
    axios
      .delete(`/scrap/${ServiceId}`, {
        headers: { authorization: `Bearer ${JSON.parse(accessToken)}` },
      })
      .then(() => {
        setIsScrap(false);
      });
  };

  return (
    <StyledBody>
      {open ? <LoginModal handleClick={handleClick} /> : null}
      <BackgroundImage detail={detail.inner_image}>
        <ScrapButton>
          {JSON.parse(isLogin) && isScrap ? (
            <>
              <i onClick={deleteScrap} className="fas fa-star fa-2x"></i>
              <div>{scrapNum}</div>
            </>
          ) : JSON.parse(isLogin) && isScrap === false ? (
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
          {JSON.parse(isLogin) ? (
            <button>내 구독 목록에 추가</button>
          ) : (
            <button onClick={handleClick}>내 구독 목록에 추가</button>
          )}
        </DetailMessage>
      </BackgroundImage>
    </StyledBody>
  );
};

export default InnerImage;
