import React, { useState, useEffect } from "react";
import Questions from "./questions";
import QuestionData from "./questionsApi";
import ProfileArea from "./profilearea";

export default function QuestionArea() {
  const [questionArrayData, setQuestionArrayData] = useState([]);
  const [visibleQuestion, setVisibleQuestion] = useState([]);
  const [questionNumberValue, setQuestionNumberValue] = useState(0);
  const [allSectionToggle, setAllSectionToggle] = useState(true);
  const [physicsToggle, setPhysicsToggle] = useState(false);
  const [chemistryToggle, setChemistryToggle] = useState(false);
  const [mathToggle, setMathToggle] = useState(false);
  const [physicsQuestionData, setPhysicsQuestionData] = useState([]);
  const [chemistryQuestionData, setChemistryQuestionData] = useState([]);
  const [mathQuestionData, setMathQuestionData] = useState([]);
  useEffect(() => {
    setQuestionArrayData(QuestionData);
    let physicsCount = QuestionData.filter((value) => value.type === "physics");
    let chemistryCount = QuestionData.filter((value) => value.type === "chemistry");
    let mathCount = QuestionData.filter((value) => value.type === "math");

    setPhysicsQuestionData(physicsCount);
    setChemistryQuestionData(chemistryCount);
    setMathQuestionData(mathCount);
  }, [QuestionData]);

  useEffect(() => {
    setVisibleQuestion(questionArrayData[questionNumberValue]);
  }, [questionNumberValue, questionArrayData]);

  const nextQuestionHandler = () => {
    if (questionNumberValue < questionArrayData.length - 1) {
      setQuestionNumberValue(questionNumberValue + 1);
    }
  };
  const prevQuestionHandler = () => {
    if (questionNumberValue > 0) {
      setQuestionNumberValue(questionNumberValue - 1);
    }
  };
  const allSectionHandler = () => {
    setQuestionNumberValue(0);
    setAllSectionToggle(true);
    setPhysicsToggle(false);
    setMathToggle(false);
    setChemistryToggle(false);
    setQuestionArrayData(QuestionData);
  };
  const physicsHandler = () => {
    setQuestionNumberValue(0);
    setAllSectionToggle(false);
    setPhysicsToggle(true);
    setMathToggle(false);
    setChemistryToggle(false);

    setQuestionArrayData(physicsQuestionData);
  };
  const chemistryHandler = () => {
    setQuestionNumberValue(0);
    setAllSectionToggle(false);
    setPhysicsToggle(false);
    setMathToggle(false);
    setChemistryToggle(true);
    setQuestionArrayData(chemistryQuestionData);
  };
  const mathsHandler = () => {
    setQuestionNumberValue(0);
    setAllSectionToggle(false);
    setPhysicsToggle(false);
    setMathToggle(true);
    setChemistryToggle(false);
    setQuestionArrayData(mathQuestionData);
  };

  return (
    <div className="main-container-data-box">
      <div className="question-full-page">
        <div className="question-button-box">
          <button
            className={allSectionToggle ? "question-button-true" : "question-buttons"}
            onClick={allSectionHandler}
          >
            ALL SECTIONS
          </button>
          <button
            className={physicsToggle ? "question-button-true" : "question-buttons"}
            onClick={physicsHandler}
          >
            PHYSICS
          </button>
          <button
            className={chemistryToggle ? "question-button-true" : "question-buttons"}
            onClick={chemistryHandler}
          >
            CHEMISTRY
          </button>
          <button
            className={mathToggle ? "question-button-true" : "question-buttons"}
            onClick={mathsHandler}
          >
            MATHS
          </button>
        </div>
        <div className="breakline"></div>
        <div>
          <Questions visibleQuestion={visibleQuestion} />
        </div>
        <div className="question-button-box">
          <button className="question-buttons">CLEAR RESPONSE</button>
          <button className="question-buttons">REVIEW</button>
          <button className="question-buttons">DUMP</button>
          <button
            className={questionNumberValue > 0 ? "question-buttons" : "question-buttons1"}
            onClick={prevQuestionHandler}
          >
            PREVIOUS
          </button>
          <button
            className={
              questionNumberValue < questionArrayData.length - 1
                ? "question-buttons"
                : "question-buttons1"
            }
            onClick={nextQuestionHandler}
          >
            NEXT
          </button>
        </div>
      </div>
      <ProfileArea
        setQuestionNumberValue={setQuestionNumberValue}
        questionArrayData={questionArrayData}
        setQuestionArrayData={setQuestionArrayData}
        QuestionData={QuestionData}
        setAllSectionToggle={setAllSectionToggle}
        setChemistryToggle={setChemistryToggle}
        setPhysicsToggle={setPhysicsToggle}
        setMathToggle={setMathToggle}
      />
    </div>
  );
}
