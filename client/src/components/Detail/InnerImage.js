import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setLoginUserInfo, setIsLogin } from "../../actions";


import AlertModal from "../AlertModal";

const StyledBody = styled.section`
  margin-top: 1rem;
  max-width: 100%;
`;
const BackgroundImage = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  height: 20rem;
  @media only screen and (min-width: 768px) {
    height: 35rem;
  }
`;

const MoveButton = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: lighter;
  font-size: 5rem;
  color: white;
  @media only screen and (min-width: 768px) {
    font-size: 10rem;
  }
`;

const ScrapButton = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  div {
    font-size: 1.5rem;
    color: yellow;
  }
  i {
    color: yellow;
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 768px) {
    div {
      font-size: 2rem;
    }
    i {
      font-size: 2rem;
    }
  }
  @media only screen and (min-width: 800px) {
    margin-top: 0;
  }
`;
const DetailMessage = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  margin: 0rem 1rem;
  color: white;
  button {
    padding: 0.5rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    background-color: black;
    opacity: 0.7;
    color: white;
  }
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    button {
      padding: 1rem;
      font-size: 2rem;
    }
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
  // const navigate = useNavigate();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { id } = state.loginUserInfo;
  const [alertMsg, setAlertMsg] = useState();
  const [notLogin, setNotLogin] = useState(false);


  const handleClick = () => {
    setOpen(!open);
    setAlertMsg({ message: "로그인을 먼저 해주세요", button: "로그인" });
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
      .then((res) => {
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

  const prePage = () => {
    if (ServiceId - 1 > 0) {
      window.location.replace(`/detail/${ServiceId - 1}`);
      // navigate(`/detail/${test}`, { replace: true });
    }
  };

  const nextPage = () => {
    if (ServiceId + 1 <= state.services.length) {
      window.location.replace(`/detail/${ServiceId + 1}`);
      // navigate(`/detail/${ServiceId + 1}`, { replace: true });
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
      <BackgroundImage image={detail.inner_image}>
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
        <MoveButton>
          <i onClick={prePage} class="fas fa-chevron-left"></i>
          <i onClick={nextPage} class="fas fa-chevron-right"></i>
        </MoveButton>
        <DetailMessage>
          <span>{detail.title}</span>
          {state.isLogin && isSub ? (
            <button onClick={delSub}>구독중</button>
          ) : state.isLogin && !isSub ? (
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
