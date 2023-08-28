import React, { useState } from "react";
import "./Pages.css";
import Quiz from "../Components/Quiz";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Geography() {
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
          <IoMdArrowRoundBack className="arrowIcon"/>
        </Link>
      </span>
      <h1 className="history-header">Geography Quiz</h1>
      <Quiz
        number="1" question="Which is the biggest district of Nepal?" opt1="Kathmandu" opt2="Dolpa" opt3="Gorkha" opt4="Humla"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}
      />
      <Quiz
        number="2" question="Where is Mt.Everest located?" opt1="Solukhumbu" opt2="Jumla" opt3="Mugu" opt4="Rasuwa"
        correctAnswer="option1"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="3" question="Where is Bhaktapur Durbar square located?" opt1="Kathmandu" opt2="Lalitpur" opt3="Bhaktapur" opt4="Nuwakot"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="4" question="Where is Gosaikunda lake located?" opt1="Kapilvastu" opt2="Gorkha" opt3="Sindhupalchowk" opt4="Rasuwa"
        correctAnswer="option4"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="5" question="Which district is Phewa Tal from?" opt1="Pokhara" opt2="Lumbini" opt3="Kaski" opt4="Gorkha"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="6" question="Which province is Nuwakot in?" opt1="Gandaki" opt2="Bagmati" opt3="Lumbini" opt4="Sudurpaschim"
        correctAnswer="option2"
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
          <h3 className="score">SCORE ON GEOGRAPHY QUIZ: {score}/{totalQuestions}</h3>
        )
      }


      <br />
      <br />
      <br />
    </>
  );
}