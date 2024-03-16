import React from "react"
import Navbar from "./Components/Navbar"
import Body from "./Components/Body"
import Contact from "./Pages/Contact"
import General from "./Pages/General"
import History from "./Pages/History"
import Geography from "./Pages/Geography"
import Music from "./Pages/Music"
import {Routes, Route} from "react-router-dom";
import "./index.css"

export default function App(){
  return (
  <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/music" element={<Music />} />
        <Route path="/general" element={<General />} />
      </Routes>
    

  </>
  )
}