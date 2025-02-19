import React from "react";
import Typical from "react-typical";
import { Fade, Zoom, Bounce, Flip } from "react-reveal";
import {
  FaLaptopCode,
  FaDatabase,
  FaMobileAlt,
  FaPalette,
  FaUsers,
  FaProjectDiagram,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaCogs
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="font-poppins h-auto bg-gradient-to-b from-gray-900 to-gray-900 text-gray-200 text-center p-5 md:px-12 pt-24 md:pt-32 md:pb-12">
      <Fade>
        <div className="relative mb-12">
          <div className="relative z-10">
            <Fade>
              <img
                src="/profimage.png"
                alt="Piyush Joshi"
                className="w-48 h-48 md:w-80 md:h-80 rounded-full border-[2px] border-teal-100 mx-auto shadow-xl transform -translate-y-8 transition-transform duration-500 hover:scale-105"
              />
            </Fade>
            <Bounce>
              <h1 className="text-2xl md:text-5xl mt-5 text-white font-extrabold tracking-wide">
                Piyush Joshi
              </h1>
            </Bounce>
            <p className="text-[16px] md:text-xl mt-3 sm:mt-5 text-gray-300">
              <Typical
                steps={[
                  "Full Stack Developer",
                  3000,
                  "Tech Enthusiast",
                  3000,
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </p>
          </div>
        </div>
      </Fade>

      <Fade bottom>
        <div className="max-w-3xl mx-auto text-sm sm:text-lg text-gray-200 leading-relaxed text-justify mb-12">
          <p>
            Welcome! I’m a Full Stack Developer from Hisar, Haryana,
            specializing in building responsive, scalable, and efficient web
            solutions. Currently pursuing a B.Tech in Computer Science at Netaji Subhas University Of Technology (NSUT), Dwarka,
            Delhi, I am passionate about crafting innovative applications that
            enhance user experiences.
          </p>
        </div>
      </Fade>

      <Flip bottom>
        <div className="mb-10">
          <a
            href="/contactme"
            className="inline-flex items-center px-5 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-teal-600 to-teal-800 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg transition-transform duration-300 hover:from-teal-500 hover:to-teal-700 hover:scale-105 hover:shadow-2xl"
          >
            <FiMail className="mr-2" />
            Contact Me
          </a>
        </div>
      </Flip>

      <Fade bottom>
        <div className="flex gap-6 justify-center text-xl sm:text-2xl mb-16">
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
              className="text-white hover:text-teal-400 transition-colors duration-300 transform hover:scale-110"
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </Fade>

      <Fade bottom>
        <div className="max-w-5xl md:mt-20 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            What I'm Doing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLaptopCode className="text-2xl sm:text-3xl mb-3 text-teal-400" />,
                title: "Frontend Development",
                description: "Crafting responsive and dynamic user interfaces.",
              },
              {
                icon: <FaDatabase className="text-2xl sm:text-3xl mb-3 text-teal-400" />,
                title: "Backend Development",
                description: "Building robust and secure backend systems.",
              },
              {
                icon: <FaProjectDiagram className="text-2xl sm:text-3xl mb-3 text-teal-400" />,
                title: "Building CampusBid",
                description: "Creating a platform to connect students and professionals.",
              },
              {
                icon: <FaMobileAlt className="text-2xl sm:text-3xl mb-3 text-teal-400" />,
                title: "Mobile App Development",
                description: "Developing seamless cross-platform mobile apps.",
              },
              {
                icon: <FaPalette className="text-2xl sm:text-3xl mb-3 text-teal-400" />,
                title: "UI/UX Design",
                description: "Designing intuitive and visually stunning interfaces.",
              },
              {
                icon: <FaUsers className="text-2xl sm:text-3xl mb-3 text-teal-400" />,
                title: "Collaborative Projects",
                description: "Collaborating on innovative solutions for diverse industries.",
              },
              {
                icon: <FaCogs className="text-2xl sm:text-3xl mb-3 text-teal-400" />,
                title: "DevOps",
                description: "Automating and optimizing development workflows",
              },
              {
                icon: <FaCode className="text-2xl sm:text-3xl mb-3 text-teal-400" />,
                title: "Data Structures (DSA)",
                description: "Solving problems with efficient algorithms and data structures.",
              },
            ]
              .map((item, index) => (
                <Zoom>
                  <div
                    key={index}
                    className="p-6 border-[2px]  border-teal-950 text-gray-400 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-[500ms] hover:scale-105"
                  >
                    {item.icon}
                    <h3 className="text-gray-100 text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>

                </Zoom>
              ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
