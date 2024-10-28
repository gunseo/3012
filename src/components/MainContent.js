import React, { useState } from "react";
import "./MainContent.css";

function MainContent() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={isClicked ? "main-content2" : "main-content"}
      onClick={handleClick}
      >
        <p className="tap-to-start">{isClicked ? "Tap to Stop":"Tap to Speak"}</p>
    </div>
  );
}

export default MainContent;