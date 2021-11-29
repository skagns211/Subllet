import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

// import MainCard from "./components/Main/MainCard";
// import Video from "./components/Main/Video";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Geo", sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #130D0A;
    box-sizing: border-box; // ;
    min-height: 100vh; // ;
    position: relative;
    overflow: hidden;
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
        {/* <MainCard /> */}
        {/* <Video /> */}
      </SectionStyle>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
