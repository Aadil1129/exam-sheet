import React from "react";
import QuestionArea from "../questionarea";

export default function MainContainer() {
  return (
    <div>
      <div className="main-container-top">
        <div className="main-container-top-text">DEMO ONLINE TEST</div>
      </div>
      <div className="main-container-data-box">
        <div className="main-container-data-box-question">
          <QuestionArea />
        </div>
      </div>
      <div className="main-container-bottom">
        <div className="main-container-bottom-text">Addmen</div>
      </div>
    </div>
  );
}
