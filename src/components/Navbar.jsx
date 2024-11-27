import React from "react";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="bg-gradient-to-r from-blue-900 to-blue-900 shadow-xl fixed w-full z-50 border-b-[3px] border-teal-800 hidden md:block">
            <div className="mx-auto py-3 flex items-center justify-between md:px-32">
                <Fade>
                    <div onClick={() => navigate("/")} className="relative flex flex-col justify-start text-white text-2xl font-bold tracking-wider">
                        <span className="hover:text-indigo-100 transition-all duration-300 transform hover:scale-102 cursor-pointer">Overview</span>
                        <div className="bottom-[-10px] h-1 w-16 mt-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                    </div>
                </Fade>

                <div className="hidden md:flex space-x-10 text-base font-semibold">
                    <Fade>
                        <a
                            href="/resume"
                            className="text-white hover:text-indigo-300 transition-all duration-300 transform hover:scale-105"
                        >
                            Resume
                        </a>
                    </Fade>
                    <Fade>
                        <a
                            href="/projects"
                            className="text-white hover:text-indigo-300 transition-all duration-300 transform hover:scale-105"
                        >
                            My Projects
                        </a>
                    </Fade>
                    <Fade>
                        <a
                            href="/contactme"
                            className="text-white hover:text-indigo-300 transition-all duration-300 transform hover:scale-105"
                        >
                            Contact Me
                        </a>
                    </Fade>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
