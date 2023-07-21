import React, { useState } from "react";
import "./Pages.css";
import Quiz from "../Components/Quiz";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Combine() {
  const totalQuestions = 24;
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
      <h1 className="history-header">Combine Quiz</h1>
      <Quiz
        number="1"
        question="Who was the first king of Nepal?"
        opt1="Birendra Shah"
        opt2="Andrew Tate"
        opt3="Prithivi Narayan Shah"
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
        question="Which is the biggest district of Nepal?" opt1="Kathmandu" opt2="Dolpa" opt3="Gorkha" opt4="Humla"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

    <Quiz
        number="8"
        question="Where is Mt.Everest located?" opt1="Solukhumbu" opt2="Jumla" opt3="Mugu" opt4="Rasuwa"
        correctAnswer="option1"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

    <Quiz
        number="9"
        question="Where is Bhaktapur Durbar square located?" opt1="Kathmandu" opt2="Lalitpur" opt3="Bhaktapur" opt4="Nuwakot"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

    <Quiz
        number="10"
        question="Where is Gosaikunda lake located?" opt1="Kapilvastu" opt2="Gorkha" opt3="Sindhupalchowk" opt4="Rasuwa"
        correctAnswer="option4"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

    <Quiz
        number = "11"
        question="Which district is Phewa Tal from?" opt1="Pokhara" opt2="Kaski" opt3="Lumbini" opt4="Gorkha"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

    <Quiz
        number="12"
        question="Which province is Nuwakot in?" opt1="Gandaki" opt2="Bagmati" opt3="Lumbini" opt4="Sudurpaschim"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />


    <Quiz
        number="13"
        question="Who is known as 'Swor Samrat'?" opt1="Nabin K bhattarai" opt2="Anju Panta" opt3="Narayan Gopal" opt4="Sugam Pokharel"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />


    <Quiz
        number="14"
        question="Who is the singer of 'Lakhau Hajarau'?" opt1="Yabesh Thapa" opt2="Samir Shrestha" opt3="Shashwot Khadka" opt4="bekcha"
        correctAnswer="option1"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />


    <Quiz
        number="15"
        question="Which Nepali band sang 'Bagaicha'?" opt1="1974 AD" opt2="Nepathya" opt3="Kta haru" opt4="Phosphenes"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />


    <Quiz
        number="16"
        question="Which song is this from: 'Kalo lamo pareli kesha'?" opt1="Malai nasodha" opt2="Gajalu ti thula thula aakha" opt3="Tutnu Thiyo Tutyo Mutu" opt4="Kehi Mitho Baat Gara"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />


    <Quiz
        number="17"
        question="Who is the first rapper of Nepal?" opt1="Uniq Poet" opt2="Yama Buddha" opt3="Girish Khatiwada" opt4="Laure"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

    <Quiz
        number="18"
        question="Who is the singer for 'Aaudai Jadai'?" opt1="The Uglyz" opt2="Kush" opt3="1974 AD" opt4="Ulto Pulto"
        correctAnswer="option1"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

      <Quiz
        number="19"
        question="What is the most installed app of Nepal in playstore?" opt1="Esewa" opt2="Khalti" opt3="Hamro Patro" opt4="Daraz"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

      <Quiz
        number="20"
        question="Which is the biggest ISP of Nepal?" opt1="Worldlink" opt2="Vianet" opt3="Subishu" opt4="CG net"
        correctAnswer="option1"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

      <Quiz
        number="21"
        question="Which is the most expensive mobile phone of Nepal?" opt1="iPhone 14 pro max" opt2="iVertu" opt3="Galaxy Z fold pro" opt4="Galaxy S23 ULTRA"
        correctAnswer="option2"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

      <Quiz
        number="22"
        question="Which is the largest discord server of Nepal?" opt1="Anime Nepal" opt2="Anime Talks/Horrible Talks" opt3="Jay Nepal" opt4="Nepal"
        correctAnswer="option3"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

      <Quiz
        number="23"
        question="Among the below mentioned people, who has the most followers on instagram?" opt1="Namrata Shrestha" opt2="Swastima Khadka" opt3="Aanchal Sharma" opt4="Priyanka Karki"
        correctAnswer="option4"
        isSubmitted={isSubmitted}
        currentScore={score}
        effectScore={setScore}

      />

      <Quiz
        number="24"
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