import React, { useState, useEffect } from "react";
import "./Pages.css";
import Quiz from "../Components/Quiz";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import jsonData from "./datas/history.json"

export default function History() {
  const totalQuestions = 5;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [randoms, setRandoms] = useState([]);

  useEffect(() => {
    const randoms = randomNumGenerator();
    setRandoms(randoms);
  }, []);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  // Function to generate random numbers between 0 and 10 for json file and generate random questions
  const randomNumGenerator = () => {
    const numbers = [];
    while (numbers.length < totalQuestions) {
      const randomNum = Math.floor(Math.random() * jsonData.length);
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
  }

  return (
    <>
      <span className="iconPage">
        <Link to="/">
          <IoMdArrowRoundBack className="arrowIcon"/>
        </Link>
      </span>
      <h1 className="history-header">History Quiz</h1>

      {/* Render quiz questions */}
      {randoms.map((randomNum, index) => (
        <Quiz
          key={index}
          number={index + 1}
          question={jsonData[randomNum].question}
          opt1={jsonData[randomNum].option1}
          opt2={jsonData[randomNum].option2}
          opt3={jsonData[randomNum].option3}
          opt4={jsonData[randomNum].option4}
          correctAnswer={jsonData[randomNum].correctAns}
          isSubmitted={isSubmitted}
          currentScore={score}
          effectScore={setScore}
        />
      ))}

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
