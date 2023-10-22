import React, { useState } from "react";
import "./Pages.css";
import Quiz from "../Components/Quiz";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function History() {
  const totalQuestions = 10;
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
      <h1 className="history-header">History Quiz</h1>
      <Quiz
        number="1"
        question="Who is the first authentic king of Nepal?"
        opt1="Birendra Shah"
        opt2="Prithivi Narayan Shah"
        opt3="Mandev"
        opt4="Junga Bahadur Rana"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}
      />
      <Quiz
        number="2"
        question="Who was the first scientist of Nepal?"
        opt1="Rameshwor Shumsher"
        opt2="Gehendra Shumsher"
        opt3="Padma Shumsher"
        opt4="Gopindra Shah"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="3"
        question="Who banned sati pratha in Nepal?"
        opt1="Junga Bahadur Rana"
        opt2="Chandra Shumsher"
        opt3="Gehendra Shumsher"
        opt4="Padma Shumsher"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="4"
        question="When did Anglo Nepal War start?"
        opt1="1914"
        opt2="1814"
        opt3="1834"
        opt4="1864"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="5"
        question="When was slavery outlawed in Nepal?"
        opt1="1901"
        opt2="1925"
        opt3="1962"
        opt4="1973"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="6"
        question="Who was the last king of Nepal?"
        opt1="Birendra Shah"
        opt2="Gyanendra Shah"
        opt3="Mahendra Shah"
        opt4="Dipendra Shah"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

    <Quiz
        number="7"
        question="Which is the first college of Nepal?"
        opt1="Trichandra College"
        opt2="Pulchowk College"
        opt3="ASCOL College"
        opt4="St.Xavier's College"
        correctAnswer="option1"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />


      <Quiz
        number="8"
        question="Where is the head of Bhimsen Thapa located?"
        opt1="Museum of Kathmandu"
        opt2="Museum of London"
        opt3="Museum of Delhi"
        opt4="No Museum"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

      <Quiz
        number="9"
        question="How many dharara was there originally?"
        opt1="One"
        opt2="Two"
        opt3="Three"
        opt4="Four"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />


      <Quiz
        number="10"
        question="Who built the Rani Mahal in Palpa?"
        opt1="Bhimsen Thapa"
        opt2="Dipendra Shah"
        opt3="Tribhuvan Bikram Shah"
        opt4="Khadak Shamser"
        correctAnswer="option4"
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
          <h3 className="score">SCORE ON HISTORY QUIZ: {score}/{totalQuestions}</h3>
          
        )

      }


      <br />
      <br />
      <br />
    </>
  );
}