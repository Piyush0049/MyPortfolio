import React from "react";
import Typical from "react-typical";
import { Fade } from "react-reveal";
import {
  FaLaptopCode,
  FaDatabase,
  FaMobileAlt,
  FaPalette,
  FaUsers,
  FaProjectDiagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import "./Styles/Home.css";

const Home = () => {
  return (
    <div className="font-poppins h-auto bg-gradient-to-r from-blue-900 to-indigo-800 text-gray-200 text-center p-6 md:px-12 md:pt-40 md:pb-12">
      {/* Header Section */}
      <Fade top>
        <div className="relative mb-12">
          <div className="relative z-10">
            <img
              src="/profimage.png"
              alt="Piyush Joshi"
              className="w-40 h-40 md:w-80 md:h-80 rounded-full border-[3px] border-gray-100 mx-auto shadow-xl transform -translate-y-8"
            />
            <h1 className="text-3xl md:text-5xl text-white font-extrabold tracking-wide">
              Piyush Joshi
            </h1>
            <p className="text-xl md:text-2xl mt-5 text-gray-300">
              <Typical
                steps={[
                  "Full Stack Developer",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </p>
          </div>
        </div>
      </Fade>

      {/* Introduction Section */}
      <Fade bottom>
        <div className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed text-justify mb-12">
          <p>
          Welcome! I’m a Full Stack Developer from Hisar, Haryana, specializing in building responsive, scalable, and efficient web solutions. 
          Currently pursuing a B.Tech in Computer Science at NSUT, Delhi, I am passionate about crafting innovative applications that enhance user experiences.
          </p>
        </div>
      </Fade>

      {/* Call to Action */}
      <Fade bottom>
        <div className="mb-10">
          <a
            href="/contactme"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white text-lg font-semibold rounded-full shadow-lg transition-transform duration-200 hover:from-indigo-500 hover:to-indigo-700 hover:scale-105"
          >
            <FiMail className="mr-2" />
            Contact Me
          </a>
        </div>
      </Fade>

      {/* Social Media Links */}
      <Fade bottom>
        <div className="flex gap-6 justify-center text-2xl mb-16">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/piyush-joshi-324778254/",
              label: "LinkedIn",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/Piyush0049",
              label: "GitHub",
            },
            {
              icon: <FaXTwitter />,
              link: "https://x.com/PiyushJ17146399",
              label: "Twitter",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition-colors duration-300"
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </Fade>

      {/* What I'm Doing Section */}
      <Fade bottom>
        <div className="max-w-5xl md:mt-20 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            What I'm Doing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLaptopCode className="text-3xl mb-3 text-indigo-400" />,
                title: "Frontend Development",
                description: "Crafting responsive and dynamic user interfaces.",
              },
              {
                icon: <FaDatabase className="text-3xl mb-3 text-indigo-400" />,
                title: "Backend Development",
                description: "Building robust and secure backend systems.",
              },
              {
                icon: (
                  <FaProjectDiagram className="text-3xl mb-3 text-indigo-400" />
                ),
                title: "Building CampusBid",
                description:
                  "Creating a platform to connect students and professionals.",
              },
              {
                icon: <FaMobileAlt className="text-3xl mb-3 text-indigo-400" />,
                title: "Mobile App Development",
                description:
                  "Developing seamless cross-platform mobile apps.",
              },
              {
                icon: <FaPalette className="text-3xl mb-3 text-indigo-400" />,
                title: "UI/UX Design",
                description:
                  "Designing intuitive and visually stunning interfaces.",
              },
              {
                icon: <FaUsers className="text-3xl mb-3 text-indigo-400" />,
                title: "Collaborative Projects",
                description:
                  "Collaborating on innovative solutions for diverse industries.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-t border-b-[1px] border-gray-500 from-indigo-800 to-blue-900 text-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-103"
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
