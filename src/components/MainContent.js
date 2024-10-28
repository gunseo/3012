import React, { useState } from "react";
import "./MainContent.css";

function MainContent() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <main className={isClicked ? "main-content2" : "main-content"}
      onClick={handleClick}
      >
        <p className="tap-to-start">{isClicked ? "Tap to Start":"Tap to Stop"}</p>
    </main>
  );
}

export default MainContent;