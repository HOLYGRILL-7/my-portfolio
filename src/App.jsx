import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import GetInTouch from "./Components/GetInTouch";
import Toggle from "./Components/Toggle";
import Projects from "./Components/Projects";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gray-100 w-[85rem] h-[38rem] m-10 mx-20 rounded-lg shadow-lg pt-5">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GetInTouch" element={<GetInTouch />} />
        <Route path="/Toggle" element={<Toggle />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
