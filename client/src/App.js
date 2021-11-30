import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

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

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Geo", sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #130D0A;
    box-sizing: border-box;
    min-height: 100vh;  
    position: relative;
    /* overflow: hidden; */
    /* height: 100%; */
  }
  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

const SectionStyle = styled.section`
  padding-bottom: 70px;
`;

function App() {
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
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mysubllet" element={<MySubllet />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </SectionStyle>
    </BrowserRouter>
  );
}

export default App;
