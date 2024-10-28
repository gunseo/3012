import React from "react";
import "./Diary.css";
import logo from "../assets/logo3.png";

function Diary() {
  
  return (
    <div className="diary-container">
        <img src={logo} alt="Logo" className="diary-icon" /> 
        <div className="diary-container2">
            <p className=""></p>
            <p className=""></p>
        </div>
    </div>
      

  );
}

export default Diary;