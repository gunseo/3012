import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import "../App.css";



function FirstPage() {
    return (
        <div className="app-container">
            <Login/>
        </div>
    );
  }
  
  export default FirstPage;