import React from "react"
import "./Components.css"
import logo from "./qz.png"
import {Link} from "react-router-dom";
export default function Navbar(){
    return(
    
       <div className="nav">
            <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
       </div>

    )
}