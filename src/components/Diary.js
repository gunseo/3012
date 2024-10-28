import React from "react";
import "./Diary.css";
import book from "../assets/Book.png";

function Diary() {
  
  return (
    <div className="diary-container">
        <img src={book} alt="Logo" className="diary-icon" /> 
        <div className="diary-container2">
            <p className="diary-date"> 2024.10.24 </p>
            <p className="diary-title">오늘은 코딩을 열심히 했다.</p>
        </div>
    </div>
      

  );
}

export default Diary;