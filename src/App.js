import React from "react";
import "./scrollbar.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Navbar from "./components/Navbar";
import Resume from "./components/Pages/Resume";
import MyProjects from "./components/Pages/MyProjects";
import Contact from "./components/Pages/Contactme";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    
    <div className="App bg-gradient-to-r from-blue-900 to-indigo-800">
    <Router>
        {/* Pass className for showing/hiding Navbar and Sidebar based on screen size */}
        <Navbar className="hidden md:block" />
        <Sidebar className="block md:hidden" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/contactme" element={<Contact />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
