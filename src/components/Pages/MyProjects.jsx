import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Fade, Zoom, Bounce } from "react-reveal";
import { projects } from "../../Data/AllProjects";

const MyProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const categories = ["All", "Web Apps", "React Js", "JavaScript", "In Progress"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-800 text-white font-poppins p-5 sm:p-8 md:p-36 pt-24 md:pt-28">
      <Fade top>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          <span className="relative inline-block">
            My Projects
            <span className="absolute inset-x-0 bottom-0 h-[5px] bg-blue-600 rounded-full transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
          </span>
        </h1>
      </Fade>

      <Zoom>
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 text-sm md:text-none rounded-full font-medium transition-all duration-300 transform ${
                activeCategory === category
                  ? "bg-blue-600 text-white scale-105 shadow-lg"
                  : "hover:bg-blue-400 hover:scale-105 text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </Zoom>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Bounce key={project.id}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transform transition-all duration-300 hover:scale-105 hover:translate-y-1"
            >
              <div className="overflow-hidden rounded-lg shadow-lg relative">
                <Zoom>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Zoom>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <FaEye className="text-white text-4xl animate-bounce" />
                </div>
              </div>
              <div className="text-center mt-4 group-hover:translate-y-1 transition-transform duration-300">
                <Fade bottom>
                  <h3 className="text-lg text-gray-200 font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-400">{project.category}</p>
                </Fade>
              </div>
            </a>
          </Bounce>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
