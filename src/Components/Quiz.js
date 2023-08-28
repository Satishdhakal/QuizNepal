import React, { useState, useEffect } from "react";


export default function Quiz(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
 

  useEffect(() => {
    if (selectedOption !== null) {
      setIsCorrect(selectedOption === props.correctAnswer);
      props.effectScore(selectedOption === props.correctAnswer ? props.currentScore + 1 : props.currentScore);
    }
  }, [selectedOption, props.correctAnswer]);

  
  

  return (
    <>
      <div className="quiz-temp">
        <h1 className='question '>{props.number}. {props.question}</h1>
        <br />
        <div className="option">
          <button
            className={`options ${props.isSubmitted && "option1"===props.correctAnswer ? 'go-green': ''} ${props.isSubmitted && selectedOption==="option1" && selectedOption !== props.correctAnswer ? "go-red": ""}`}
        
            id="option1"
            style={{
              backgroundColor: selectedOption === "option1" ? "#646060" : "rgb(211, 207, 207)" ,
            }}
            disabled={props.isSubmitted}
            onClick={() => setSelectedOption("option1")}
          >
            {props.opt1}
          </button>
           
          <button
            className={`options ${props.isSubmitted  && "option2"===props.correctAnswer ? 'go-green': ''} ${props.isSubmitted && selectedOption==="option2" && selectedOption !== props.correctAnswer ? "go-red": ""}`}
            id="option2"
            style={{
              backgroundColor: selectedOption === "option2" ? "#646060" : "rgb(211, 207, 207)",
            }}
            onClick={() => setSelectedOption("option2")}
            disabled={props.isSubmitted}
          >
            {props.opt2}
          </button>
          <br />
          <button
              className={`options ${props.isSubmitted && "option3"===props.correctAnswer ? 'go-green': ''} ${props.isSubmitted && selectedOption==="option3" && selectedOption !== props.correctAnswer ? "go-red": ""}`}
            id="option3"
            style={{
              backgroundColor: selectedOption === "option3" ? "#646060" : "rgb(211, 207, 207)",
            }}
            onClick={() => setSelectedOption("option3")}
            disabled={props.isSubmitted}
          >
            {props.opt3}
          </button>
          <button
              className={`options ${props.isSubmitted  && "option4"===props.correctAnswer ? 'go-green': ''} ${props.isSubmitted && selectedOption==="option4" && selectedOption !== props.correctAnswer ? "go-red": ""}`}
            id="option4"
            style={{
              backgroundColor: selectedOption === "option4" ? "#646060" : "rgb(211, 207, 207)",
            }}
            onClick={() => setSelectedOption("option4")}
            disabled={props.isSubmitted}
          >
            {props.opt4}
          </button>
        </div>
        

       
      
      </div>
    </>
  );
}
