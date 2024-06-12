import React, { useState } from "react";
import Generalques from "../Components/Generalques";
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack, IoMdLock } from "react-icons/io";
import "./Pages.css"

export default function General() {
  const [level, setLevel] = useState(null); // Initialize as null
  const [chosenLevel, setChosenLevel] = useState(null);

  const selectLevel = (level) => {
    setLevel(level);
    setChosenLevel(level);
  }

  const goBack = () => {
    setLevel(null); // Reset level when going back
  }

  const passedLevelOne = (levelone)=>{
    localStorage.setItem("levelone", "true");
  }

  const passedLevelTwo = (leveltwo)=>{
    localStorage.setItem("leveltwo", "true");
  }

  const passedLevelThree = (levelthree)=>{
    localStorage.setItem("levelthree", "true");
  }

  const passedLevelFour = (levelfour)=>{
    localStorage.setItem("levelfour", "true");
  }

  return (
    <>
      {level ? (
        <Generalques choselevel={chosenLevel} levelonestatus={passedLevelOne} leveltwostatus={passedLevelTwo} levelthreestatus={passedLevelThree} levelfourstatus={passedLevelFour}/>
      ) : (
        <div>
          <span className="icon" id="icon">
            <NavLink to="/" onClick={goBack}><IoMdArrowRoundBack className="arrowIcon" /></NavLink>
          </span>
          <h1 className="category-title">Choose difficulty: </h1>
          <div className="button">
            <button onClick={() => selectLevel(1)}>Level 1</button>

            {!localStorage.getItem("levelone") ? 
            <div className="locked-button"><button className="not-allowed" onClick={() => selectLevel(2)}>Level 2 <IoMdLock className="lock-icon"/></button></div> :
            <div><button onClick={() => selectLevel(2)}>Level 2</button></div>  
            }

            {!localStorage.getItem("leveltwo") ? 
            <div className="locked-button"><button className="not-allowed" onClick={() => selectLevel(3)}>Level 3 <IoMdLock className="lock-icon"/></button></div> :
            <div><button onClick={() => selectLevel(3)}>Level 3</button></div>  
            }
            
           {!localStorage.getItem("levelthree") ? 
            <div className="locked-button"><button className="not-allowed" onClick={() => selectLevel(4)}>Final Level <IoMdLock className="lock-icon"/></button></div> :
            <div><button onClick={() => selectLevel(4)}>Level 4</button></div>  
            }
          </div>
        </div>
      )}
    </>
  );
}
