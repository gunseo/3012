import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginButton from "./components/LoginButton";
import "./App.css";



function Login() {
    return (
        <div className="app-container">
            <Header/>
            <LoginButton/>
        </div>
    );
  }
  
  export default Login;