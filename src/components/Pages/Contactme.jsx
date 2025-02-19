import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Fade, Zoom } from "react-reveal";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-900 text-white font-poppins p-5 sm:p-8 md:p-36 pt-24 md:pt-28">
      <Fade top>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">Contact Me</h1>
      </Fade>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Fade>
          <div className="text-sm">
            <h2 className="text-2xl md:text-3xl text-gray-100 font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Feel free to reach out via email, phone, or connect with me on social media.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaEnvelope className="text-teal-500 md:text-xl mr-4" />
                <a
                  href="mailto:piyushjoshi81204@gmail.com"
                  className="md:text-lg hover:text-teal-400 transition-transform duration-300 hover:scale-105"
                >
                  piyushjoshi81204@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-teal-500 md:text-xl mr-4" />
                <span className="md:text-lg hover:scale-105 transition-transform">
                  +91 9485793073
                </span>
              </li>
              <li className="flex items-center">
                <FaXTwitter className="text-teal-500 md:text-xl mr-4" />
                <a
                  href="https://x.com/PiyushJ17146399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:text-lg hover:text-teal-400 transition-transform duration-300 hover:scale-105"
                >
                  PiyushJ17146399
                </a>
              </li>
              <li className="flex items-center">
                <FaLinkedin className="text-teal-500 md:text-xl mr-4" />
                <a
                  href="https://www.linkedin.com/in/piyush-joshi-324778254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:text-lg hover:text-teal-400 transition-transform duration-300 hover:scale-105"
                >
                  piyush-joshi-324778254
                </a>
              </li>
              <li className="flex items-center">
                <FaGithub className="text-teal-500 md:text-xl mr-4" />
                <a
                  href="https://github.com/Piyush0049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:text-lg hover:text-teal-400 transition-transform duration-300 hover:scale-105"
                >
                  Piyush0049
                </a>
              </li>
            </ul>
          </div>
        </Fade>

        <Zoom>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <div className="relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.7254467726134!2d77.04685321455502!3d28.586013582431098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a4542170b3%3A0xb2f54aa45149543f!2sAzad%20Hind%20Fauj%20Marg%2C%20Dwarka%20Sector-3%2C%20Dwarka%2C%20Delhi%2C%20110078!5e0!3m2!1sen!2sin!4v1698261223408!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location of Azad Hind Fauj Marg, Dwarka, Delhi"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Contact;
