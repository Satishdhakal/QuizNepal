import React, { useState, useEffect } from "react";
import Generalques from "../Components/Generalques";
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack, IoMdLock } from "react-icons/io";
import "./Pages.css";

export default function General() {
  const [level, setLevel] = useState(null); // Initialize as null
  const [chosenLevel, setChosenLevel] = useState(null);

  // Initialize levels from localStorage, or default to 0
  useEffect(() => {
    if (!localStorage.getItem("level1")) {
      localStorage.setItem("level1", 0);
    }
    if (!localStorage.getItem("level2")) {
      localStorage.setItem("level2", 0);
    }
    if (!localStorage.getItem("level3")) {
      localStorage.setItem("level3", 0);
    }
  }, []);

  const selectLevel = (level) => {
    setLevel(level);
    setChosenLevel(level);
  };

  const goBack = () => {
    setLevel(null); // Reset level when going back
  };

  const finalPassedLevel = (data) => {
    if (data === 1) {
      localStorage.setItem("level1", data);
    } else if (data === 2) {
      localStorage.setItem("level2", data);
    } else if (data === 3) {
      localStorage.setItem("level3", data);
    }
  };

  return (
    <>
      {level ? (
        <Generalques choselevel={chosenLevel} level={level} levelstatus={finalPassedLevel} />
      ) : (
        <div>
          <span className="icon" id="icon">
            <NavLink to="/" onClick={goBack}><IoMdArrowRoundBack className="arrowIcon" /></NavLink>
          </span>
          <h1 className="category-title">Choose difficulty: </h1>
          <div className="button">
            <button onClick={() => selectLevel(1)}>Level 1</button>

            {localStorage.getItem("level1") === '1' ? (
              <div><button onClick={() => selectLevel(2)}>Level 2</button></div>
            ) : (
              <div className="locked-button"><button className="not-allowed" disabled>Level 2 <IoMdLock className="lock-icon" /></button></div>
            )}

            {localStorage.getItem("level2") === '2' ? (
              <div><button onClick={() => selectLevel(3)}>Level 3</button></div>
            ) : (
              <div className="locked-button"><button className="not-allowed" disabled>Level 3 <IoMdLock className="lock-icon" /></button></div>
            )}
            
            {localStorage.getItem("level3") === '3' ? (
              <div><button onClick={() => selectLevel(4)}>Final Level</button></div>
            ) : (
              <div className="locked-button"><button className="not-allowed" disabled>Final Level <IoMdLock className="lock-icon" /></button></div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
