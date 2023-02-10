import React, { useState, useEffect } from "react";
import Questions from "./questions";
import QuestionData from "./questionsApi";
import ProfileArea from "./profilearea";

export default function QuestionArea() {
  const [questionArrayData, setQuestionArrayData] = useState(QuestionData);
  const [visibleQuestion, setVisibleQuestion] = useState(questionArrayData[0]);

  const [selectedId, setSelectedId] = useState();
  const [selectAnswer, setSelectAnswer] = useState("");
  const selectedOptionValue = (value, id) => {
    setSelectAnswer(value);
    setSelectedId(id);
    setQuestionArrayData(questionArrayData);
  };
  console.log(questionArrayData, "newData");

  const nextQuestionHandler = () => {
    if (visibleQuestion.Q >= questionArrayData.length) {
      return;
    }
    let index = questionArrayData.findIndex((item) => item.Q === visibleQuestion.Q);
    if (index > -1) {
      setVisibleQuestion(questionArrayData[index + 1]);
    }
    if (selectAnswer.length > 0) {
      let userAnswer = questionArrayData.find((i) => i.Q === selectedId);
      userAnswer.userStatus = "answered";
    }
  };

  const prevQuestionHandler = () => {
    if (visibleQuestion.Q <= 1) {
      return;
    }
    let index = questionArrayData.findIndex((item) => item.Q === visibleQuestion.Q);
    if (index > -1) {
      setVisibleQuestion(questionArrayData[index - 1]);
    }
  };

  return (
    <div className="main-container-data-box">
      <div className="question-full-page">
        <div className="question-button-box">
          <button className="question-button-true">ALL SECTIONS</button>
          <button className="question-buttons">PHYSICS</button>
          <button className="question-buttons">CHEMISTRY</button>
          <button className="question-buttons">MATHS</button>
        </div>
        <div className="breakline"></div>
        <div>
          <Questions visibleQuestion={visibleQuestion} selectedOptionValue={selectedOptionValue} />
        </div>
        <div className="question-button-box">
          <button className="question-buttons">CLEAR RESPONSE</button>
          <button className="question-buttons">REVIEW</button>
          <button className="question-buttons">DUMP</button>
          <button
            className={visibleQuestion.Q > 1 ? "question-buttons" : "question-buttons1"}
            onClick={prevQuestionHandler}
          >
            PREVIOUS
          </button>
          <button
            className={
              visibleQuestion.Q < questionArrayData.length
                ? "question-buttons"
                : "question-buttons1"
            }
            onClick={nextQuestionHandler}
          >
            NEXT
          </button>
        </div>
      </div>
      <ProfileArea setVisibleQuestion={setVisibleQuestion} questionArrayData={questionArrayData} />
    </div>
  );
}
