import React, { useState, useEffect } from "react";
import Profile from "../../public/images/profile.png";
import Image from "next/image";

const StatusBg = {
  not_visited: "white",
  not_answered: "rgb(230, 93, 93)",
  answered: "rgb(73, 209, 73)",
};

export default function ProfileArea({ setVisibleQuestion, QuestionData }) {
  const [colorValue, setColorValue] = useState("");
  const numberHandler = (value) => {
    setVisibleQuestion(QuestionData[value]);
  };

  return (
    <div className="profile-fullpage">
      <div className="profile-top">
        <div>
          <Image src={Profile} alt="profile" className="profile-image" />
        </div>
        <div className="profile-detail">
          <div>Time Left:3hour</div>
          <div>
            <div>Name</div>
            <div>Ashish Kumar</div>
          </div>
        </div>
      </div>
      <div className="profile-middle">
        <div className="profile-middle-heading">
          <div>Question Palatte</div>
        </div>
        <div></div>
        <div className="profile-numbers-box">
          {QuestionData.map((value, i) => {
            return (
              <div key={i}>
                <div
                  className="profile-numbers"
                  style={{ backgroundColor: StatusBg[value.userStatus] }}
                  onClick={() => numberHandler(i)}
                >
                  <div>{value.Q}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="profile-bottom">
        <div className="profile-middle-heading">
          <div>Legend (Click to View) </div>
        </div>
        <div className="profile-legent-buttons">
          <div className="legent-button-answer">Answered</div>
          <div className="legent-button-notanswer">Not Answered</div>
          <div className="legent-button-notvisited">Not visited</div>
        </div>
        <div className="profile-middle-all">
          <div>{QuestionData.length} All Questions </div>
        </div>
        <div style={{ margin: "1rem auto" }}>
          <div className="profile-legent-buttons">
            <div className="submit-button">Profile</div>
            <div className="submit-button">Instr</div>
            <div className="submit-button">Questions</div>
            <div className="submit-button">Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
}
