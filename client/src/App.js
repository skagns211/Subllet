import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setLoginUserInfo, setIsLogin, setAccessToken } from "./actions";
import axios from "axios";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

import Main from "./pages/Main";
import AllView from "./pages/AllView";
import ChangeInfo from "./pages/ChangeInfo";
import CustomerCenter from "./pages/CustomerCenter";
import Delete from "./pages/Delete";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import MySubllet from "./pages/MySubllet";
import SignUp from "./pages/SignUp";
import KakaoAuthHandler from "./components/Signup/KakaoAuthHandler";
import NaverAuthHandler from "./components/Signup/NaverAuthHandler";
import GoogleAuthHandler from "./components/Signup/GoogleAuthHandler";
import Landing from "./pages/Landing";
import { setServices, setService } from "./actions";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Geo", sans-serif;
    margin: 0;
    padding: 0;
    background-color: #130D0A;
    box-sizing: border-box;
    position: relative;
    /* min-width: 530px; */
    min-height: 100vh;
    /* display: flex; */
    /* overflow: hidden; */
    /* height: 100%; */
    @media only screen and (max-width: 800px) {
    min-width: 370px;
  }
  a {
    color: #ffffff;
    text-decoration: none;
  }
  //! Nav 고정
  header {
    position: fixed;
    z-index: 1000;
  }
  .sc-pVTFL.fQyZWE {
    position: fixed;
    width: 100%;
    z-index: 999;
    padding-top: 5rem;
  }
  }
`;

//! Nav 고정 간격
const Pages = styled.div`
  /* @media only screen and (min-width: 800px) { */
  padding-top: 5rem;
  /* } */
`;

const SectionStyle = styled.section`
  padding-bottom: 70px;
  /* min-width: 540px; */
`;

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const location = useLocation();
  const currentUrl = location.pathname;
  const [token, setToken] = useState();
  console.log(currentUrl);

  const logoutHandler = () => {
    axios
      .post("/auth/logout", null)
      .then((res) => {
        const loginUserInfo = {
          email: "",
          nickname: "",
          profile: "",
        };
        dispatch(setLoginUserInfo(loginUserInfo));
        dispatch(setIsLogin(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const refreshToken = async () => {
  //   await axios
  //     .post("/auth/refresh", null)
  //     .then((res) => {
  //       return true;
  //     })
  //     .catch((err) => {
  //       return false;
  //     });
  // };

  // useEffect(() => {
  //   if (state.isLogin) {
  //     setInterval(() => {
  //       if (!refreshToken()) {
  //         logoutHandler();
  //       }
  //     }, 3000);
  //   }
  // }, []);

  useEffect(() => {
    axios
      .get("/service")
      .then((res) => dispatch(setServices(res.data.services)));
  }, []);

  return (
    <>
      <GlobalStyle />
      {/* <Routes> */}
      {/* </Routes> */}
      <SectionStyle>
        {currentUrl === "/" ? null : (
          <>
            <Nav />
          </>
        )}
        <SearchBar />
        <Pages>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/main" element={<Main />} />
            <Route path="/allview" element={<AllView />} />
            <Route path="/changeinfo" element={<ChangeInfo />} />
            <Route path="/customercenter" element={<CustomerCenter />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/userlogin" element={<Login />} />
            <Route path="/mysubllet" element={<MySubllet />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auth/kakao/callback" element={<KakaoAuthHandler />} />
            <Route path="/auth/naver/signup" element={<NaverAuthHandler />} />
            <Route path="/auth/google/signup" element={<GoogleAuthHandler />} />
          </Routes>
        </Pages>
        <Footer />
      </SectionStyle>
    </>
  );
}

export default App;
