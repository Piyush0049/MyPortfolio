import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons for the hamburger menu
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-900 to-blue-900 shadow-xl fixed w-full z-50 border-b-[3px] border-teal-800">
            <div className="mx-auto py-3 flex items-center justify-between md:px-32">
                {/* Logo */}
                <div onClick={()=>navigate("/")} className="relative flex flex-col justify-start text-white text-3xl font-bold tracking-wider">
                    <span className="hover:text-indigo-100 transition-all duration-300 transform hover:scale-102 cursor-pointer">Overview</span>
                    <div className=" bottom-[-10px] h-1 w-16 mt-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                </div>


                {/* Desktop Navigation Menu */}
                <div className="hidden md:flex space-x-10 text-lg font-semibold">
                    <a
                        href="/resume"
                        className="text-white hover:text-indigo-300 transition-all duration-300 transform hover:scale-105"
                    >
                        Resume
                    </a>
                    <a
                        href="/projects"
                        className="text-white hover:text-indigo-300 transition-all duration-300 transform hover:scale-105"
                    >
                        My Projects
                    </a>
                    <a
                        href="/contactme"
                        className="text-white hover:text-indigo-300 transition-all duration-300 transform hover:scale-105"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white hover:text-indigo-300 text-2xl focus:outline-none"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-r from-blue-900 to-indigo-800 flex flex-col items-center py-6 space-y-4">
                    <a
                        href="#resume"
                        className="text-white hover:text-indigo-300 font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        Resume
                    </a>
                    <a
                        href="#about"
                        className="text-white hover:text-indigo-300 font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        About
                    </a>
                    <a
                        href="#portfolio"
                        className="text-white hover:text-indigo-300 font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        Portfolio
                    </a>
                    <a
                        href="#contact"
                        className="text-white hover:text-indigo-300 font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        Contact Me
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
