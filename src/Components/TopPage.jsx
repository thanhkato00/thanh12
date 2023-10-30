import React from "react";
import NavbarsTop from "./Navbar/NavbarHome";
import Uncontroll from "./Curesl";
import DarkVariantExample from "./Curesl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function TopPage() {
  const btnstyle = {
    fontSize: "30px",
    padding: "10px 20px",
    margin: "5px",
  };
  return (
    <div>
      <NavbarsTop />
      <DarkVariantExample />
      <div className="text-center">
        <Button variant="info" style={btnstyle} as={Link} to="/">ALL</Button>{" "}
        <Button variant="primary" style={btnstyle}>
          Adidas
        </Button>{" "}
        <Button variant="secondary" style={btnstyle}>
          Nike
        </Button>{" "}
        <Button variant="success" style={btnstyle}>
          Jordan
        </Button>{" "}
        <Button variant="warning" style={btnstyle}>
          Sneaker
        </Button>{" "}
      </div>
    </div>
  );
}

export default TopPage;
