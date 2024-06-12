import React, { useState, useEffect } from "react";
import "../Pages/Pages.css";
import Quiz from "./Quiz";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import jsonData1 from "../Pages/datas/general/levelone.json";
import jsonData2 from "../Pages/datas/general/leveltwo.json";
import jsonData3 from "../Pages/datas/general/levelthree.json";
import jsonData4 from "../Pages/datas/general/levelfour.json";

export default function Generalques(props) {
  const totalQuestions = 5;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [randoms, setRandoms] = useState([]);

  useEffect(() => {
    const chosenLevelData = getChosenLevelData();  // Call this function inside useEffect to use the latest prop value
    const randoms = randomNumGenerator(chosenLevelData.length);
    setRandoms(randoms);
  }, [props.choselevel]); // Dependency on choselevel to update when it changes

  const handleSubmit = () => {
    setIsSubmitted(true);
    if(score===totalQuestions && props.choselevel==="1"){
      var passedLevelOne = true;
    }else if(score===totalQuestions && props.choselevel==="2"){
      var passedLevelTwo = true;
    }else if(score===totalQuestions && props.choselevel==="3"){
      var passedLevelThree = true;
    }else if(score===totalQuestions && props.choselevel==="4"){
      var passedLevelFour = true;
    }

    props.levelonestatus(passedLevelOne);
    props.leveltwostatus(passedLevelTwo);
    props.levelthreestatus(passedLevelThree);
    props.levelfourstatus(passedLevelFour);
  };

  const randomNumGenerator = (dataLength) => {
    const numbers = new Set();
    while (numbers.size < totalQuestions) {
      const randomNum = Math.floor(Math.random() * dataLength);
      numbers.add(randomNum);
    }
    return Array.from(numbers);
  };

  const getChosenLevelData = () => {
    switch (props.choselevel) {
      case 1:
        return jsonData1;
      case 2:
        return jsonData2;
      case 3:
        return jsonData3;
      case 4:
        return jsonData4;
      default:
        return [];
    }
  };


  return (
    <>
      <span className="iconPage">
        <Link to="/">
          <IoMdArrowRoundBack className="arrowIcon"/>
        </Link>
      </span>
      <h1 className="history-header">General Quiz (Level-{props.choselevel})</h1>

      {randoms.map((randomNum, index) => {
        const questionData = getChosenLevelData()[randomNum];
        return (
          <Quiz
            key={index}
            number={index + 1}
            question={questionData.question}
            opt1={questionData.option1}
            opt2={questionData.option2}
            opt3={questionData.option3}
            opt4={questionData.option4}
            correctAnswer={questionData.correctAns}
            isSubmitted={isSubmitted}
            currentScore={score}
            effectScore={setScore}
          />
        );
      })}

      {!isSubmitted && (
        <div className="buttonSub">
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}

      {isSubmitted && (
        <h3 className="score">SCORE ON HISTORY QUIZ: {score}/{totalQuestions}</h3>
      )}

      <br />
      <br />
      <br />
    </>
  );
}
