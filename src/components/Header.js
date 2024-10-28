import React from "react";
import "./Header.css";
import logo from "../assets/logo3.png";
import { useNavigate } from "react-router-dom";

function Header() {
  return (
    <div className="header">
        <img src={logo} alt="Logo" className="header-logo" />
    </div>
  );
}

export default Header;