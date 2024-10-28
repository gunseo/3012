import React from "react";
import "./Header.css";
import logo from "../assets/logo3.png";

function Header() {
  return (
    <header className="header">
        <img src={logo} alt="Logo" className="header-logo" />
    </header>
  );
}

export default Header;