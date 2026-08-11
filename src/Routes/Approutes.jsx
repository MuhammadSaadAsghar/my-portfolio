import React from "react";
import Mainpage from "../mainpage/Mainpage";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

const Approutes = () => {
  return (
    <div>
      <Routes>
       
        <Route path="/" element={   <Mainpage />} >
        <Route index element={<Home/>} />
        <Route path="skill" element={<Skills/>} />
        <Route path="project" element={<Projects/>} />
        <Route path="resume" element={<Resume/>} />
        <Route path="Contact" element={<Contact/>} />
       
        </Route>
     
      </Routes>
    </div>
  );
};

export default Approutes;
