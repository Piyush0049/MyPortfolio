import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "E-Commerce Website",
    category: "Web Apps",
    image: "https://via.placeholder.com/400x300.png?text=E-Commerce+Website",
    link: "https://example.com/ecommerce",
  },
  {
    id: 2,
    name: "Portfolio Website",
    category: "React Js",
    image: "https://via.placeholder.com/400x300.png?text=Portfolio+Website",
    link: "https://example.com/portfolio",
  },
  {
    id: 3,
    name: "Task Manager",
    category: "JavaScript",
    image: "https://via.placeholder.com/400x300.png?text=Task+Manager",
    link: "https://example.com/taskmanager",
  },
  {
    id: 4,
    name: "Blog App",
    category: "In Progress",
    image: "https://via.placeholder.com/400x300.png?text=Blog+App",
    link: "https://example.com/blogapp",
  },
];

const MyProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const categories = ["All", "Web Apps", "React Js", "JavaScript", "In Progress"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-800 text-white font-poppins p-8 md:p-36 md:pt-28">
      <h1 className="text-5xl font-bold text-center mb-10">My Projects</h1>
      
      {/* Categories */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : " hover:bg-blue-400 text-white"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            {/* Image with overlay */}
            <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
              />
              {/* Overlay with Eye Icon */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FaEye className="text-white text-3xl" />
              </div>
            </div>
            {/* Project Info */}
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-400">{project.category}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
