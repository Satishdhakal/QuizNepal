import React, { useState } from "react";
import "./Pages.css";
import Quiz from "../Components/Quiz";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Combine() {
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
      <h1 className="history-header">Combine Quiz</h1>
      
     
      <Quiz
        number="1"
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
        number="2"
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
        number="3"
        question="Which is the biggest district of Nepal?" opt1="Kathmandu" opt2="Dolpa" opt3="Gorkha" opt4="Humla"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

    

    <Quiz
        number = "4"
        question="Which district is Phewa Tal from?" opt1="Pokhara" opt2="Kaski" opt3="Lumbini" opt4="Gorkha"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

  

    <Quiz
        number="5"
        question="Who is known as 'Swor Samrat'?" opt1="Nabin K bhattarai" opt2="Anju Panta" opt3="Narayan Gopal" opt4="Sugam Pokharel"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />




    <Quiz
        number="6"
        question="Which Nepali band sang 'Bagaicha'?" opt1="1974 AD" opt2="Nepathya" opt3="Kta haru" opt4="Phosphenes"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />




    <Quiz
        number="7"
        question="Who is the first rapper of Nepal?" opt1="Uniq Poet" opt2="Yama Buddha" opt3="Girish Khatiwada" opt4="Laure"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

  

      <Quiz
        number="8"
        question="What is the most installed app of Nepal in playstore?" opt1="Esewa" opt2="Khalti" opt3="Hamro Patro" opt4="Daraz"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

  

      <Quiz
        number="9"
        question="Which is the most expensive mobile phone of Nepal?" opt1="iPhone 14 pro max" opt2="iVertu" opt3="Galaxy Z fold pro" opt4="Galaxy S23 ULTRA"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />


   

      <Quiz
        number="10"
        question="Most subscribed YouTube channel of Nepal?" opt1="The Cartoonz Crew" opt2="Kantipur TV HD" opt3="OSR Digital" opt4="Music Nepal"
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
          <h3 className="score">SCORE ON QUIZ: {score}/{totalQuestions}</h3>
        )
      }


      <br />
      <br />
      <br />
    </>
  );
}