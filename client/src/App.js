import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { useDispatch } from "react-redux";
import axios from "axios";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { NavSelectServiceDown } from "./components/MySubllet/Select";

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
import NotFound from "./pages/NotFound";
import { setServices } from "./actions";

const GlobalStyle = createGlobalStyle`
  body {
    font-family:'Geo', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #130D0A;
    box-sizing: border-box;
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    min-width: 370px;
  a {
    color: #ffffff;
    text-decoration: none;
  }
  //! Nav 고정
  header {
    position: fixed;
    z-index: 1000;
    @media only screen and (max-width: 800px) {
    position: relative;
  }

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
  @media only screen and (min-width: 800px) {
    padding-top: 5rem;
  }
`;

const SectionStyle = styled.section`
  padding-bottom: 70px;
  /* min-width: 540px; */
  div {
    &.mobileNav {
      max-width: 800px;
    }
  }
`;

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentUrl = location.pathname;

  useEffect(() => {
    axios
      .get("/service")
      .then((res) => dispatch(setServices(res.data.services)))
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <SectionStyle>
        {currentUrl === "/" ? null : (
          <>
            <Nav />
            <div className="mobileNav">
              <NavSelectServiceDown />
            </div>
          </>
        )}
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
            <Route path="/auth/kakao/signup" element={<KakaoAuthHandler />} />
            <Route path="/auth/naver/signup" element={<NaverAuthHandler />} />
            <Route path="/auth/google/signup" element={<GoogleAuthHandler />} />

            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </Pages>
        {currentUrl === "/" ? null : (
          <>
            <Footer />
          </>
        )}
      </SectionStyle>
    </>
  );
}

export default App;
