import React from "react"
import Navbar from "./Components/Navbar"
import Body from "./Components/Body"
import Contact from "./Pages/Contact"
import Combine from "./Pages/Combine"
import History from "./Pages/History"
import Geography from "./Pages/Geography"
import Internet from "./Pages/Internet"
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
        <Route path="/internet" element={<Internet />} />
        <Route path="/music" element={<Music />} />
        <Route path="/combine" element={<Combine />} />
      </Routes>
    

  </>
  )
}