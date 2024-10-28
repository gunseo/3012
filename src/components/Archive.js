import React, { useState } from "react";
import Diary from "./Diary";
import DiaryPage from "./DiaryPage";
import "./Archive.css";

function Archive() {
  return (
    <main className="archive">
      <Diary></Diary>
      <DiaryPage></DiaryPage>
    </main>
  );
}

export default Archive;