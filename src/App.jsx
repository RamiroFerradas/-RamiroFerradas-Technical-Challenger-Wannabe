import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./Components/Detail/Detail";
// import "./App.css";

import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
