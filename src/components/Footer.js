import React from "react";
import "./Footer.css";
import { FaMicrophone, FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleRightClick = (e) => {
    const footerWidth = e.currentTarget.offsetWidth;
    const clickX = e.nativeEvent.offsetX;

    if (clickX > footerWidth / 2) {
      navigate("/diary");
    }
    else{
      navigate("/maincontent");
    }
  };

  return (
    <footer className="footer" onClick={handleRightClick}>
      <FaMicrophone className="icon" />
      <FaBook className="icon" />
    </footer>
  );
}

export default Footer;