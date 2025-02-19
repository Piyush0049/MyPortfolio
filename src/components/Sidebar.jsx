import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Fade } from "react-reveal";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                isOpen
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative block md:hidden">
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={toggleMenu}
            ></div>
            {!isOpen && <div className="fixed top-4 left-4 z-50 shadow-2xl">
                <button
                    onClick={toggleMenu}
                    className="bg-gradient-to-r from-teal-600 to-teal-600 text-white hover:bg-gradient-to-l hover:from-teal-600 hover:to-teal-700 text-2xl p-3 rounded-full transition-all duration-300 focus:outline-none"
                >
                    {!isOpen && <FaBars />}
                </button>
            </div>}

            <div
                ref={sidebarRef}
                className={`fixed inset-y-0 left-0 z-40 bg-gradient-to-r from-gray-900 to-gray-800 w-72 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } shadow-xl rounded-r-md pt-10`}
            >
                <div className="flex flex-col items-center py-8 space-y-8">

                    {[
                        { href: "/", label: "Overview" },
                        { href: "/resume", label: "Resume" },
                        { href: "/projects", label: "My Projects" },
                        { href: "/contactme", label: "Contact Me" },
                    ].map((link, index) => (
                        <Fade key={index}>
                            <a
                                href={link.href}
                                onClick={handleLinkClick}
                                className="text-white hover:text-teal-300 font-medium text-lg transition-all duration-300 transform hover:scale-105 px-6 py-3 rounded-lg w-full text-center"
                            >
                                {link.label}
                            </a>
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
