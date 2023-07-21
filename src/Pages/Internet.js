import React, { useState } from "react";
import "./Pages.css";
import Quiz from "../Components/Quiz";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Internet() {
  const totalQuestions = 6;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };


  return (
    <>
      <span className="iconPage">
        <Link to="/">
          <IoMdArrowRoundBack />
        </Link>
      </span>
      <h1 className="history-header">Internet/Tech Quiz</h1>
      <Quiz
        number="1" question="Most subscribed YouTube channel of Nepal?" opt1="The Cartoonz Crew" opt2="Kantipur TV HD" opt3="OSR Digital" opt4="Music Nepal"
        correctAnswer="option4"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}
      />
      <Quiz
        number="2" question="Among the below mentioned people, who has the most followers on instagram?" opt1="Namrata Shrestha" opt2="Swastima Khadka" opt3="Aanchal Sharma" opt4="Priyanka Karki"
        correctAnswer="option4"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="3" question="Which is the largest discord server of Nepal?" opt1="Anime Nepal" opt2="Anime Talks/Horrible Talks" opt3="Jay Nepal" opt4="Nepal"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="4" question="Which is the most expensive mobile phone of Nepal?" opt1="iPhone 14 pro max" opt2="iVertu" opt3="Galaxy Z fold pro" opt4="Galaxy S23 ULTRA"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="5" question="Which is the biggest ISP of Nepal?" opt1="Worldlink" opt2="Vianet" opt3="Subishu" opt4="CG net"
        correctAnswer="option1"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="6" question="What is the most installed app of Nepal in playstore?" opt1="Esewa" opt2="Khalti" opt3="Hamro Patro" opt4="Daraz"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      {!isSubmitted && (
        <>
        <div className="buttonSub">
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        </>
      )}

      {
        isSubmitted && (
          <h3 className="score">SCORE ON INTERNET QUIZ: {score}/{totalQuestions}</h3>
        )
      }


      <br />
      <br />
      <br />
    </>
  );
}

