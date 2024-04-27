import React, { useState } from "react";
import Generalques from "../Components/Generalques";
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

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

  return (
    <>
      {level ? (
        <Generalques choselevel={chosenLevel} />
      ) : (
        <div>
          <span className="icon" id="icon">
            <NavLink to="/" onClick={goBack}><IoMdArrowRoundBack className="arrowIcon" /></NavLink>
          </span>
          <h1 className="category-title">Choose difficulty: </h1>
          <div className="button">
            <button onClick={() => selectLevel(1)}>Level 1</button>
            <button onClick={() => selectLevel(2)}>Level 2</button>
            <button onClick={() => selectLevel(3)}>Level 3</button>
            <button onClick={() => selectLevel(4)}>Final Level</button>
          </div>
        </div>
      )}
    </>
  );
}
