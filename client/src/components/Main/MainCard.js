import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import TopList from "./TopList";
import { IMG } from "./imageUrl";
import axios from "axios";
import { setLoginUserInfo, setIsLogin } from "../../actions";

const randomIdx = Math.floor(Math.random() * IMG["backImg"].length);
const randomBackImg = IMG.backImg[randomIdx];

const MainSection = styled.section`
  @font-face {
    font-family: "InfinitySans-RegularA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "InfinitySans-RegularA1";
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 1050px) and (max-width: 1300px) {
    display: flex;
  }
  @media only screen and (min-width: 1300px) {
    display: flex;
  }
`;

const MainCardBody = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${randomBackImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 1rem;
  margin: 2rem 0.7rem 0.5rem 0.5rem;
  padding: 0;
  width: auto;
  height: auto;
  @media only screen and (max-width: 1050px) {
    padding-bottom: 1.5rem;
  }
  @media only screen and (min-width: 1050px) and (max-width: 1300px) {
    background-size: 100% 100%;
    width: 100rem;
  }
  @media only screen and (min-width: 1301px) {
    background-size: 100% 100%;
    width: 55rem;
  }
  .guest {
    display: none;
  }
  hr {
    width: 22.5rem;
    margin-left: 1rem;
    margin-top: 0;
  }
  span {
    border-radius: 0.5rem;
    background-color: #252a3c;
    color: white;
    height: 6rem;
    font-size: 1.2rem;
  }
  img {
    width: 3.5rem;
    height: 3.5rem;
    margin-left: 1.5rem;
    margin-top: 1rem;
    border-radius: 70%;
    overflow: hidden;
    object-fit: cover;
  }
  .user {
    font-family: "Geo", sans-serif;
    background-color: transparent;
    align-self: flex-start;
    margin: 1rem 0 0 0;
    font-size: 2rem;
    padding: 1rem 5rem 1rem 1rem;
  }
  .totalPrice {
    align-self: flex-start;
    margin-left: 1rem;
    margin-top: 1rem;
    padding: 0.5rem 5rem 0.5rem 2.5rem;
    width: 15rem;
    span {
      text-decoration: underline;
      font-weight: bold;
    }
    div {
      text-align: center;
      margin-top: 0.7rem;
      font-size: 2rem;
    }
  }
  .nextPay {
    align-self: flex-start;
    margin-left: 1rem;
    margin-top: 1rem;
    padding: 0.5rem 5rem 0.5rem 2.5rem;
    width: 15rem;
    overflow: auto;
    span {
      margin: 0;
      text-decoration: underline;
      font-weight: bold;
    }
    div {
      padding-top: 0.4rem;
    }
  }
  .nextPay::-webkit-scrollbar {
    width: 0.7rem;
  }
  .nextPay::-webkit-scrollbar-thumb {
    background-color: #3a3f51;
    border-radius: 1rem;
  }

  @media only screen and (max-width: 500px) {
    .user {
      padding-right: 0;
    }
    .totalPrice {
      padding-left: 1.3rem;
      width: 14rem;
    }
    .nextPay {
      padding-left: 1.3rem;
      width: 14rem;
    }
    hr {
      width: 90%;
    }
  }
`;

const MainCardBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin: 0;
  .subscribe {
    margin: 1rem 1rem 0rem 1rem;
    padding-left: 2rem;
    padding-top: 0.5rem;
    width: 7.5rem;
    height: 10.3rem;
    overflow: auto;
    p {
      font-weight: bold;
      text-decoration: underline;
      margin: 0.5rem 0 0 0;
    }
    div {
      cursor: pointer;
      padding-top: 0.4rem;
    }
  }
  .subscribe::-webkit-scrollbar {
    width: 0.7rem;
  }
  .subscribe::-webkit-scrollbar-thumb {
    background-color: #3a3f51;
    border-radius: 1rem;
  }

  @media only screen and (max-width: 500px) {
    .subscribe {
      padding-left: 0.8rem;
    }
  }
`;

const MainCardRightBottom = styled.div`
  display: flex;
  flex-direction: column;
  .info {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0rem 0 1.5rem;
    width: 10.5rem;
    height: 5rem;
    div {
      padding-top: 0.4rem;
    }
  }
  .addSub {
    padding: 0.5rem 1rem 0 0.5rem;
    width: 10.5rem;
    height: 3.8rem;
    text-align: center;
    font-size: 2rem;
    div {
      font-size: 0.9rem;
    }
  }
  @media only screen and (max-width: 500px) {
    .info {
      width: 9.5rem;
    }
    .addSub {
      width: 9.5rem;
    }
  }
`;
const MainCard = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [service, setService] = useState(["-"]);
  const [payDate, setPayDate] = useState([]);
  const [serviceLink, setServiceLink] = useState();
  const {
    id,
    email,
    nickname,
    profile,
    signup_method,
    total_price,
    total_scraps,
    total_subscribes,
  } = state.loginUserInfo; //! user정보

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
        // window.location.href = "/userlogin";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .all([axios.get("/subscribe"), axios.get("/scrap")])
      .then(
        axios.spread((res1, res2) => {
          const total_subscribes = res1.data.subscribes.length;
          const price =
            res1.data.subscribes &&
            res1.data.subscribes.map((el) => {
              return el.planprice.replace(/[^0-9]/g, "") * 1;
            });
          let total_price = 0;
          price.length !== 0
            ? (total_price =
                res1.data.subscribes &&
                price.reduce((acc, cur) => {
                  return acc + cur;
                }))
            : (total_price = 0);
          const total_scraps = res2.data.scraps.length;
          const loginUserInfo = {
            id,
            email,
            nickname,
            profile,
            signup_method,
            total_subscribes,
            total_price,
            total_scraps,
          };
          dispatch(setLoginUserInfo(loginUserInfo));
          if (res1.data.subscribes.length !== 0) {
            setService(
              res1.data.subscribes.map((el) => {
                return el.Service.title;
              })
            );
            setServiceLink(
              res1.data.subscribes.map((el) => {
                return el.Service.id;
              })
            );
            setPayDate(
              res1.data.subscribes.map((el) => {
                return el.paydate;
              })
            );
          }
        })
      )
      .catch((err) => {
        if (
          err.response &&
          err.response.status === 401 &&
          state.isLogin === true
        ) {
          logoutHandler();
        }
      });
  }, [dispatch, state.isLogin]);

  const nextPayDate = payDate.map((el) => {
    const date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    const nextDate = new Date(year, month, el);
    const btMs = nextDate.getTime() - date.getTime();
    const btDay = Math.round(btMs / (1000 * 60 * 60 * 24));
    return btDay;
  });

  const handleIntoDetail = (path) => {
    navigate(`/detail/${path}`);
  };

  return (
    <>
      <MainSection>
        <MainCardBody>
          <div>
            <Link to="/MySubllet">
              <img
                alt="defaultImg"
                src={
                  profile
                    ? profile
                    : "https://i.esdrop.com/d/z3v0lj8ztjvc/OizvMNga4W.png"
                }
              />
              <span className="user">{nickname} 님의 Subllet</span>
            </Link>
          </div>
          <hr></hr>
          <span className="totalPrice">
            <span>총 이용 금액:</span> <br />
            <div>
              ₩{" "}
              {total_price
                ? total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : 0}
            </div>
          </span>
          <span className="nextPay">
            <span>다음 결제까지 :</span> <br />
            {payDate.length !== 0
              ? service.map((el, idx) => {
                  return (
                    <div key={idx}>
                      {nextPayDate[idx] >= 0 && nextPayDate[idx] < 10
                        ? `${el} : ${nextPayDate[idx] + 1}일 전`
                        : null}
                    </div>
                  );
                })
              : "-"}
          </span>
          <MainCardBottom>
            <span className="subscribe">
              <p>구독중</p>
              <br />
              {service.map((el, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => handleIntoDetail(serviceLink[idx])}
                  >
                    {el}
                  </div>
                );
              })}
            </span>
            <MainCardRightBottom>
              <span className="info">
                {state.loginUserInfo.nickname} 님의 <br />
                <div>총 구독 수 : {total_subscribes}개</div>
                <div>총 스크랩 수 : {total_scraps}개</div>
              </span>
              <span className="addSub">
                <Link to="/AllView">
                  <i className="fas fa-plus-circle"></i>
                </Link>
                <br />
                <div>구독을 추가하세요</div>
              </span>
            </MainCardRightBottom>
          </MainCardBottom>
        </MainCardBody>
        <TopList />
      </MainSection>
    </>
  );
};

export default MainCard;
