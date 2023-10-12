import React from "react";
import Login from "../Login/Login";
import Resigter from "../Resigter/Resigter";
import { Route, Router, Routes } from "react-router-dom";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Resigter" element={<Resigter />}></Route>
      </Routes>
    </div>
  );
}

export default Router;
