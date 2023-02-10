import React, { useState, useEffect } from "react";

export default function Questions({ visibleQuestion, selectedOptionValue }) {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setSelectedValue(visibleQuestion.userAns);
  }, [visibleQuestion]);

  const selectAnswerHandler = (e) => {
    setSelectedValue(e.target.value);
    selectedOptionValue(e.target.value, visibleQuestion.Q);
  };

  return (
    <div className="questions-fullpage">
      <div className="question-top">
        <div>Q.{visibleQuestion?.Q}</div>
        <div>View In</div>
      </div>
      <div className="question-view">
        <div className="question-area-box">
          <div className="question-title">QUESTION INSTRUCTION</div>
          <div className="question-area">{visibleQuestion?.instruction}</div>
        </div>
        <div className="question-area-box">
          <div className="question-title">QUESTION</div>
          <div className="question-area">{visibleQuestion?.question}</div>
          {visibleQuestion?.option?.map((value, i) => {
            return (
              <div
                key={i}
                style={{ display: "flex", flexDirection: "column" }}
                className="question-options"
              >
                <div>
                  {i + 1}.
                  <input
                    type="radio"
                    value={value}
                    checked={selectedValue === value}
                    id={value}
                    onChange={selectAnswerHandler}
                  />{" "}
                  <label htmlFor={value}>{value}</label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
