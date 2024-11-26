import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-800 text-white font-poppins p-8 md:p-36 md:pt-28">
      <h1 className="text-5xl font-bold text-center mb-10">Contact Me</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Feel free to reach out via email, phone, or connect with me on social media.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaEnvelope className="text-blue-500 text-xl mr-4" />
              <a
                href="mailto:piyushjoshi81204@gmail.com"
                className="text-lg hover:text-blue-400 transition"
              >
                piyushjoshi81204@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <FaPhone className="text-blue-500 text-xl mr-4" />
              <span className="text-lg">+91 9485793073</span>
            </li>
            <li className="flex items-center">
              <FaXTwitter className="text-blue-500 text-xl mr-4" />
              <a
                href="https://x.com/PiyushJ17146399"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue-400 transition"
              >
                PiyushJ17146399
              </a>
            </li>
            <li className="flex items-center">
              <FaLinkedin className="text-blue-500 text-xl mr-4" />
              <a
                href="https://www.linkedin.com/in/piyush-joshi-324778254/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue-400 transition"
              >
                piyush-joshi-324778254
              </a>
            </li>
            <li className="flex items-center">
              <FaGithub className="text-blue-500 text-xl mr-4" />
              <a
                href="https://github.com/Piyush0049"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue-400 transition"
              >
                Piyush0049
              </a>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.7254467726134!2d77.04685321455502!3d28.586013582431098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a4542170b3%3A0xb2f54aa45149543f!2sAzad%20Hind%20Fauj%20Marg%2C%20Dwarka%20Sector-3%2C%20Dwarka%2C%20Delhi%2C%20110078!5e0!3m2!1sen!2sin!4v1698261223408!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
