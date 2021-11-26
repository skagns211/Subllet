import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
