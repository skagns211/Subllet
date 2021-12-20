import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setLoginUserInfo, setIsLogin } from "../../actions";

import AlertModal from "../AlertModal";

const StyledBody = styled.section`
  @font-face {
    font-family: "InfinitySans-RegularA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "InfinitySans-RegularA1";
  margin-top: 2rem;
  max-width: 100%;
  @media only screen and (min-width: 800px) {
    margin-top: 1rem;
  }
`;

const BackgroundImage = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  height: 20rem;
  @media only screen and (min-width: 768px) {
    height: 35rem;
  }
`;

const MoveButton = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: lighter;
  font-size: 3rem;
  opacity: 0.7;
  color: gray;
  margin: 8rem 1rem 0rem 1rem;
  i:hover {
    cursor: pointer;
    color: lightgray;
  }
  @media only screen and (min-width: 768px) {
    font-size: 5rem;
    margin: 15rem 1rem 0rem 1rem;
  }
`;

const ScrapButton = styled.div`
  display: flex;
  align-items: center;
  div {
    font-size: 1.5rem;
    color: #ff8a00;
  }
  i {
    color: #ff8a00;
    margin-right: 0.5rem;
    :hover {
      color: yellow;
      cursor: pointer;
    }
  }
  @media only screen and (min-width: 768px) {
    div {
      font-size: 2rem;
    }
    i {
      font-size: 2rem;
    }
  }
`;
const DetailMessage = styled.div`
  background: ;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1rem;
  color: #ff8a00;
  font-weight: bold;
  margin: 6rem 1rem;
  button {
    padding: 0.5rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    background-color: black;
    opacity: 0.9;
    color: #ff8a00;
    border: 0;
    :hover {
      cursor: pointer;
      background: #ff8a00;
      color: white;
    }
  }
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    margin: 9rem 1rem;
    button {
      padding: 1rem;
      font-size: 2rem;
    }
  }
`;

const DetailLabel = styled.div`
  margin: 0 1rem 0.5rem 1rem;
  display: flex;
  color: #ff8a00;
  align-items: center;
  justify-content: space-between;
  div {
    font-size: 2.3rem;
  }
  i {
    font-size: 2rem;
  }
`;

const InnerImage = ({
  ServiceId,
  detail,
  scrapNum,
  isScrap,
  setIsScrap,
  isSub,
  setIsSub,
}) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = state.loginUserInfo;

  const [open, setOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState();
  const [notLogin, setNotLogin] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setAlertMsg({ message: "로그인 후 이용해 주세요", button: "로그인" });
    if (!state.isLogin) {
      setNotLogin(true);
    }
  };

  useEffect(() => {
    if (state.isLogin) {
      axios
        .all([
          axios.get(`/scrap/${ServiceId}`),
          axios.get(`/subscribe/${ServiceId}`),
        ])
        .then(
          axios.spread((isScrap, isSub) => {
            setIsScrap(isScrap.data.isScrap);
            setIsSub(isSub.data.isSubscribe);
          })
        )
        .catch((err) => console.log(err));
    }
  });

  const logoutHandler = () => {
    axios
      .post("/auth/logout", { id })
      .then(() => {
        const loginUserInfo = {
          email: "",
          nickname: "",
          profile: "",
        };
        dispatch(setLoginUserInfo(loginUserInfo));
        alert("세션이 만료되어 로그아웃 되었습니다. 로그인 해주세요.");
        dispatch(setIsLogin(false));
        window.location.href = "/main";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addScrap = () => {
    axios
      .post(`/scrap/${ServiceId}`, null)
      .then(() => {
        setIsScrap(true);
      })
      .catch((err) => {
        if (err.response.status === 401 && state.isLogin === true) {
          logoutHandler();
        }
      });
  };

  const delScrap = () => {
    axios
      .delete(`/scrap/${ServiceId}`)
      .then(() => {
        setIsScrap(false);
      })
      .catch((err) => {
        if (err.response.status === 401 && state.isLogin === true) {
          logoutHandler();
        }
      });
  };

  const addSub = () => {
    axios
      .post(`/subscribe/${ServiceId}`, {
        paydate: new Date().toDateString().slice(8, 10),
        planname: state.selectPlan.planname,
        planprice: state.selectPlan.planprice,
      })
      .then(() => {
        setIsSub(true);
      })
      .catch((err) => {
        if (err.response.status === 401 && state.isLogin === true) {
          logoutHandler();
        }
      });
  };

  const delSub = () => {
    axios
      .delete(`/subscribe/${ServiceId}`)
      .then(() => {
        setIsSub(false);
      })
      .catch((err) => {
        if (err.response.status === 401 && state.isLogin === true) {
          logoutHandler();
        }
      });
  };

  const prePage = () => {
    if (ServiceId - 1 > 0) {
      window.location.replace(`/detail/${ServiceId - 1}`);
    }
  };

  const nextPage = () => {
    if (ServiceId + 1 <= state.services.length) {
      window.location.replace(`/detail/${ServiceId + 1}`);
    }
  };

  return (
    <StyledBody>
      {open ? (
        <AlertModal
          notLogin={notLogin}
          alertMsg={alertMsg}
          handleClick={handleClick}
        />
      ) : null}
      <DetailLabel>
        <div>{detail.title}</div>
        <ScrapButton>
          {state.isLogin && isScrap ? (
            <>
              <i onClick={delScrap} className="fas fa-star fa-2x"></i>
              <div>{scrapNum}</div>
            </>
          ) : state.isLogin && !isScrap ? (
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
      </DetailLabel>
      <BackgroundImage image={detail.inner_image}>
        <MoveButton>
          <i onClick={prePage} className="fas fa-chevron-left"></i>
          <i onClick={nextPage} className="fas fa-chevron-right"></i>
        </MoveButton>
        <DetailMessage>
          {state.isLogin && isSub ? (
            <button onClick={delSub}>구독중</button>
          ) : state.isLogin && !isSub ? (
            <button onClick={addSub}>구독 추가</button>
          ) : (
            <button onClick={handleClick}>구독 추가</button>
          )}
        </DetailMessage>
      </BackgroundImage>
    </StyledBody>
  );
};

export default InnerImage;
