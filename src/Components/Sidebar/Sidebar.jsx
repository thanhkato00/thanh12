import React from "react";
import Price from "./Price/Price";
import Color from "./Color/Color";
import "./Sidebar.css";
import { FaCartArrowDown } from "react-icons/fa";
function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <FaCartArrowDown />
          </h1>
        </div>
        <Price />
        <Color />
      </section>
    </>
  );
}

export default Sidebar;
