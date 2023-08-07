import React, { useState, useEffect } from "react";

export default function Quiz(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
 

  useEffect(() => {
    setIsCorrect(selectedOption === props.correctAnswer);
    props.effectScore(selectedOption === props.correctAnswer ? props.currentScore + 1 : props.currentScore)
   
  }, [selectedOption, props.correctAnswer]);

  
  

  return (
    <>
      <div className="quiz-temp">
        <h1 className="question">{props.number}. {props.question}</h1>
        <br />
        <div className="option">
          <button
            className="options"
            id="option1"
            style={{
              backgroundColor: selectedOption === "option1" ? "green" : "rgb(211, 207, 207)",
            }}
            disabled={props.isSubmitted}
            onClick={() => setSelectedOption("option1")}
          >
            {props.opt1}
          </button>
           
          <button
            className="options"
            id="option2"
            style={{
              backgroundColor: selectedOption === "option2" ? "green" : "rgb(211, 207, 207)",
            }}
            onClick={() => setSelectedOption("option2")}
            disabled={props.isSubmitted}
          >
            {props.opt2}
          </button>
          <br />
          <button
            className="options"
            id="option3"
            style={{
              backgroundColor: selectedOption === "option3" ? "green" : "rgb(211, 207, 207)",
            }}
            onClick={() => setSelectedOption("option3")}
            disabled={props.isSubmitted}
          >
            {props.opt3}
          </button>
          <button
            className="options"
            id="option4"
            style={{
              backgroundColor: selectedOption === "option4" ? "green" : "rgb(211, 207, 207)",
            }}
            onClick={() => setSelectedOption("option4")}
            disabled={props.isSubmitted}
          >
            {props.opt4}
          </button>
        </div>
        {props.isSubmitted && (
          <p>{isCorrect ? "You're correct!" : "You're wrong."}</p>  
        )}
      </div>
    </>
  );
}
