import React, { useState } from "react";
import Generalques from "../Components/Generalques";
import {NavLink} from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Combine() {
  const [level, setLevel] = useState(false);
  const [select, setSelect] = useState(0);

  const selectLevelOne =()=>{
    setLevel(true);
    setSelect(1);
  }

  const selectLevelTwo =()=>{
    setLevel(true);
    setSelect(2);
  }

  const selectLevelThree =()=>{
    setLevel(true);
    setSelect(3);
  }

  const selectLevelFour =()=>{
    setLevel(true);
    setSelect(4);
  }
  return (
    <>
      {level ? (
        <Generalques choseLevel={select}/>
      ) : (
        <div>
          <span className="icon" id="icon">
            <NavLink to="/"><IoMdArrowRoundBack className="arrowIcon" /></NavLink>
          </span>
          <h1 className="category-title">Choose difficulty: </h1>
          <div className="button">
            <button onClick={selectLevelOne}>Level 1</button>
            <button onClick={selectLevelTwo}>Level 2</button>
            <button onClick={selectLevelThree}>Level 3</button>
            <button onClick={selectLevelFour}>Final Level</button>
          </div>
        </div>
      )}
    </>
  );
}
