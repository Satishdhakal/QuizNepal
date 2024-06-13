import React from "react"
import "./Components.css"
import {NavLink} from "react-router-dom";
import {IoMdArrowRoundBack} from "react-icons/io";


export default function Body(){

    
    
    const [content, setContent] = React.useState(false);
    return(
    <div>
        {!content && <div>
        <h1 className="title">How much do you <br></br> know about Nepal?</h1>
        <div className="button-div">
        <button className="take-quiz-button" onClick={()=>setContent(!content)}>Take the quiz!</button>
        </div>
        </div>
        }
        {content && 
        <div>
              <span class="icon" id="icon" onClick={()=>setContent(!content)}><IoMdArrowRoundBack className="arrowIcon"/></span>
            <h1 className="category-title">Select a category: </h1>
            <div className="button">
            <NavLink to="/general"><button className="all-cat">General</button></NavLink>
            <NavLink to="/history" exact activeClassName="history"><button className="history">History</button></NavLink>
            <NavLink to="/geography"><button className="geography">Geography</button></NavLink>
            <NavLink to="/music"><button className="music">Music</button></NavLink>
            <h3 className="note-levels">Note: Only general has levels</h3>

        </div>
        </div>
        }

    </div>
    
    )
}
