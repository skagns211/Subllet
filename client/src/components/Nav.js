import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoginUserInfo, setIsLogin } from "../actions";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import logo from "../IMG/favicon.png";
import defaultImg from "../IMG/default.png";

const NavHeader = styled.header`
  @media only screen and (min-width: 800px) {
    display: flex;
    /* justify-content: space-around; */
    justify-content: space-between; //둘 중 하나 골라야함
    background-color: #0f0f0f;
    width: 100%;
    height: 70px;
  }
  @media only screen and (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    background-color: #0f0f0f;
    width: 100%;
    height: 70px;
  }
`;

const MinNavTap = styled.span`
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-shrink: 0;
    span {
      display: flex;
      flex-shrink: 0;
      justify-content: space-around;
      margin-top: 2.7rem;
      :not(:last-child) {
        margin-left: 1.5rem;
      }
      :last-child {
        margin-left: 1rem;
      }
    }
    a {
      color: #ff8a00;
    }
  }
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const MaxNavTap = styled.div`
  display: flex;
  justify-self: right;
  flex-shrink: 0;
  margin-right: 2rem;
  div {
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;
    margin-left: 1rem;
    margin-top: 2.7rem;
  }
  a {
    color: #ff8a00;
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const SearchBar = styled.input`
  display: flex;
  /* margin-right: 15rem; */
  width: 35rem;
  height: 2.3rem;
  margin-left: 1.5rem;
  margin-top: 1rem;
  background-color: #000000;
  border: 1px solid #ff8a00;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  text-align: center;
  color: white;
  ::placeholder {
    font-size: 1rem;
    color: #c5c5c5;
  }
  :focus::placeholder {
    color: transparent;
  }
  @media only screen and (max-width: 1050px) and (min-width: 800px) {
    width: 15rem;
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Font = styled.span`
  display: flex;
  color: #ff8a00;
  font-size: 3.8rem;
  margin-top: 0.5rem;
  @media only screen and (min-width: 800px) {
    margin-left: 2rem;
  }
  @media only screen and (max-width: 800px) {
    padding-right: 3.3rem;
  }
  span {
    @media only screen and (max-width: 800px) {
      margin-left: 1.5rem;
    }
  }
  img {
    margin-top: 0.6rem;
    width: 4rem;
    height: 3rem;
  }
  a {
    color: #ff8a00;
  }
`;

const RightNav = styled.span`
  display: flex;
  /* :hover ul {
    visibility: visible;
  } */

  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #ff8a00;
    text-align: center;
    color: #ffffff;
  }
  li:last-child {
    border-bottom: none;
  }
  li:hover {
    background-color: #ff8a00;
    opacity: 0.65;
  }
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 3.7rem;
    border-radius: 2rem;
    margin: 0.4rem 0rem 0.4rem 0;

    /* margin-top: 0.4rem;
    margin-right: 1.6rem; */
  }
  :hover ul {
    visibility: visible;
  }
  ul {
    z-index: 1;
    width: 6rem;
    margin: 0;
    padding: 0;
    list-style: none;
    top: 4.3rem;
    background-color: #000000;
    border: 1px solid #ff8a00;
    opacity: 0.8;
    left: 5rem;
    visibility: hidden;
  }
`;

const Nav = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { email, nickname, profile } = state.loginUserInfo;

  useEffect(() => {
    window.localStorage.setItem(
      "accessToken",
      JSON.stringify(state.accessToken)
    );
  }, [state.accessToken]);

  useEffect(() => {
    window.localStorage.setItem("isLogin", JSON.stringify(state.isLogin));
  }, [state.isLogin]);

  console.log(state.accessToken);
  const logoutHandler = () => {
    axios
      .post("/auth/logout", null, {
        headers: {
          authorization: `Bearer ${state.accessToken}`,
        },
      })
      .then((res) => {
        if (res.statusText === "OK") {
          const loginUserInfo = {
            email: "",
            nickname: "",
            profile: "",
          };
          dispatch(setLoginUserInfo(loginUserInfo));
          dispatch(setIsLogin(false));
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  console.log(state.accessToken);

  return (
    <>
      <NavHeader>
        <MinNavTap>
          <span>
            <Link to="/AllView">모두보기</Link>
          </span>
          <span>
            <Link to="/customercenter">고객센터</Link>
          </span>
        </MinNavTap>
        <Font>
          <Link to="/">
            <span>Subllet</span>
          </Link>
          <img alt="logo" src={logo}></img>
          <SearchBar type="search" placeholder="서비스를 검색해보세요" />
        </Font>
        <RightNav>
          <MaxNavTap>
            <div>
              <Link to="/AllView">모두보기</Link>
            </div>
            <div>
              <Link to="/customercenter">고객센터</Link>
            </div>
          </MaxNavTap>
          {state.isLogin ? (
            <Test>
              <img
                alt="userImg"
                src={profile ? profile : defaultImg}
                className="defaultImg"
              />
              <ul>
                <li>
                  <Link to="/mysubllet">MySubllet</Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      logoutHandler();
                    }}
                  >
                    로그아웃
                  </Link>
                </li>
              </ul>
            </Test>
          ) : (
            <Test>
              <img alt="defaultImg" src={defaultImg} className="defaultImg" />
              <ul>
                <li>
                  <Link to="/userlogin">로그인</Link>
                </li>
                <li>
                  <Link to="/signup">회원가입</Link>
                </li>
              </ul>
            </Test>
          )}
        </RightNav>
      </NavHeader>
    </>
  );
};

export default Nav;
