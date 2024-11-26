import React from "react";
import "./scrollbar.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contactme";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/contactme" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
