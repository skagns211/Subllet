import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

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
import { setServices, setService } from "./actions";

// axios.defaults.baseURL = "https://localhost:4000";
// axios.defaults.withCredentials = true;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Geo", sans-serif;
    margin: 0;
    padding: 0;
    background-color: #130D0A;
    box-sizing: border-box;
    position: relative;
    min-width: 530px;
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
  }}
`;

const SectionStyle = styled.section`
  padding-bottom: 70px;
  /* min-width: 540px; */
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/service")
      .then((res) => dispatch(setServices(res.data.services)));
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <SectionStyle>
        <Nav />
        <SearchBar />
        <Routes>
          <Route exact path="/" element={<Main />} />
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
        </Routes>
        <Footer />
      </SectionStyle>
    </BrowserRouter>
  );
}

export default App;
