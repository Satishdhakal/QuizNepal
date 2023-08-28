import React, { useState } from "react";
import "./Pages.css";
import Quiz from "../Components/Quiz";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Music() {
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
      <h1 className="history-header">Music Quiz</h1>
      <Quiz
        number="1" question="Who is known as 'Swor Samrat'?" opt1="Nabin K bhattarai" opt2="Anju Panta" opt3="Narayan Gopal" opt4="Sugam Pokharel"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}
      />
      <Quiz
        number="2" question="Who is the singer of 'Lakhau Hajarau'?" opt1="Yabesh Thapa" opt2="Samir Shrestha" opt3="Shashwot Khadka" opt4="bekcha"
        correctAnswer="option1"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="3" question="Which Nepali band sang 'Bagaicha'?" opt1="1974 AD" opt2="Nepathya" opt3="Kta haru" opt4="Phosphenes"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="4" question="Which song is this from: 'Kalo lamo pareli kesha'?" opt1="Malai nasodha" opt2="Gajalu ti thula thula aakha" opt3="Tutnu Thiyo Tutyo Mutu" opt4="Kehi Mitho Baat Gara"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="5" question="Who is the first rapper of Nepal?" opt1="Uniq Poet" opt2="Yama Buddha" opt3="Girish Khatiwada" opt4="Laure"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />
      <Quiz
        number="6" question="Who is the singer for 'Aaudai Jadai'?" opt1="The Uglyz" opt2="Kush" opt3="1974 AD" opt4="Ulto Pulto"
        correctAnswer="option1"
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
          <h3 className="score">SCORE ON MUSIC QUIZ: {score}/{totalQuestions}</h3>
        )
      }


      <br />
      <br />
      <br />
    </>
  );
}