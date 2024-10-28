import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Archive from "./components/Archive";
import FirstPage from "./components/FirstPage";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/maincontent" element={<MainContent />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/login" element={<FirstPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;