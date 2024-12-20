import React from 'react';
import { FaDownload, FaBook, FaSchool, FaCertificate } from 'react-icons/fa';
import { Fade, Zoom } from 'react-reveal';
import { FaCode } from "react-icons/fa";

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/PiyushJoshiResume.pdf';
        link.download = 'PiyushJoshiResume.pdf';
        link.click();
    };

    return (
        <div className="gridGradient bg-gradient-to-r from-blue-900 to-indigo-800 text-white min-h-screen font-poppins p-6 sm:p-8 md:p-36 pt-24 md:pt-28">
            <section>
                <Fade top>
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">Resume</h1>
                </Fade>
                <Fade top>
                    <div className="flex justify-between items-center mb-7">
                        <h2 className="text-2xl md:text-3xl text-gray-100 font-semibold flex items-center">
                            <FaBook className="mr-2" /> Experience
                        </h2>
                        <div className="group bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:bg-yellow-600 text-gray-100 font-semibold px-3 py-2 sm:px-6 sm:py-3 rounded-lg items-center shadow-2xl transition-all duration-300">
                            <button
                                onClick={handleDownload}
                                className="w-full group-hover:text-gray-300 flex items-center justify-center transition-colors duration-300"
                            >
                                <FaDownload className="sm:mr-2" /><span className='hidden sm:block'>Resume</span>
                            </button>
                        </div>
                    </div>
                </Fade>

                <div className="relative border-l-[3px] border-blue-400 pl-6 space-y-10 text-gray-300">
                    <Fade bottom cascade>
                        <div className="relative">
                            <span className="absolute -left-9 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                                <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                            </span>
                            <h3 className="text-xl text-gray-300 font-bold">Full Stack Developer</h3>
                            <p className="text-sm text-gray-400">CampusBid | Nov 2024 — Present</p>
                            <p className="mt-2 text-sm leading-relaxed text-justify">
                                • Designed, developed, and maintained a robust full-stack platform, ensuring scalability and future-readiness for user growth. <br />
                                • Strengthened site security by implementing robust authentication mechanisms, significantly reducing potential vulnerabilities.
                            </p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-9 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                                <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                            </span>
                            <h3 className="text-xl text-gray-300 font-bold">Full Stack Developer</h3>
                            <p className="text-sm text-gray-400">WorkVed Spaces Private Limited | Aug 2024 — Oct 2024</p>
                            <p className="mt-2 text-sm leading-relaxed text-justify">
                                • Spearheaded the development and deployment of a high-quality UI/UX, resulting in a 30% increase in user engagement on the company's website. <br />
                                • Built and scaled web applications using the MERN stack, reducing page load times by 35%. <br />
                                • Optimized application performance using Next.js and Tailwind CSS, achieving a 50% improvement in site speed.
                            </p>
                            <a href="https://drive.google.com/file/d/1CQ1rqdM_y9S_Ezx84bCU_0Iu8TOxzcqH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center text-indigo-400">
                                <FaCertificate className="text-lg mr-2" />
                                View Certificate
                            </a>
                        </div>

                    </Fade>
                </div>
            </section>

            <section className="mt-12">
                <Fade left>
                    <h2 className="text-2xl font-semibold flex items-center mb-6">
                        <FaSchool className="mr-2" /> Education
                    </h2>
                </Fade>
                <Zoom>
                    <div className="relative border-l-[3px] border-blue-400 pl-6 space-y-10 text-gray-300">
                        <div className="relative">
                            <span className="absolute -left-9 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                                <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                            </span>
                            <h3 className="text-lg font-bold">Netaji Subhas University of Technology</h3>
                            <p className="text-sm text-gray-400">Oct 2022 — Aug 2026 (Expected)</p>
                            <p className="mt-2 text-sm leading-relaxed text-justify">
                                I am currently pursuing a B.Tech in Computer Science and Engineering (CSE), gaining in-depth knowledge in programming, data structures, algorithms, software engineering, and computer networks.
                            </p>
                        </div>
                    </div>
                </Zoom>
            </section>

            <section className="mt-12">
                <Fade top>
                    <h2 className="text-2xl font-semibold flex items-center mb-6">
                        <FaCode className="mr-2" /> Languages and Tools
                    </h2>
                </Fade>
                <Fade bottom cascade>
                    <div className="text-center flex flex-col justify-start items-start gap-10">
                        <div className="flex flex-col justify-start items-start">
                            <h3 className="text-base mb-4 text-gray-200">Programming Languages</h3>
                            <p className="flex gap-3">
                                <a rel="noreferrer" href="https://www.typescriptlang.org/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://www.python.org" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://www.java.com/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://www.php.net/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="PHP" width="40" height="40" />
                                </a>
                            </p>
                        </div>

                        <div className="flex flex-col justify-start items-start">
                            <h3 className="text-base mb-4 text-gray-200">Frontend Development</h3>
                            <p className="flex gap-3">
                                <a rel="noreferrer" href="https://reactjs.org/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://redux.js.org/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://reactnative.dev/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React Native" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://nextjs.org/" target="_blank">
                                    <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="Next.js" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://getbootstrap.com/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://tailwindcss.com/" target="_blank">
                                    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://sass-lang.com/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="Sass" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML" width="40" height="40" />
                                </a>
                            </p>
                        </div>

                        <div className="flex flex-col justify-start items-start">
                            <h3 className="text-base mb-4 text-gray-200">Backend & Databases</h3>
                            <p className="flex gap-3">
                                <a rel="noreferrer" href="https://nodejs.org" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://expressjs.com" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://www.mysql.com/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://redis.io/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg" alt="Redis" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://www.mongodb.com/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://www.postgresql.org/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="40" height="40" />
                                </a>
                            </p>
                        </div>

                        <div className="flex flex-col justify-start items-start">
                            <h3 className="text-base mb-4 text-gray-200">Machine Learning Tools</h3>
                            <p className="flex gap-3">
                                <a rel="noreferrer" href="https://scikit-learn.org/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/scikit-learn/scikit-learn/main/doc/logos/scikit-learn-logo.png" alt="Scikit-learn" width="40" height="40" />
                                </a>
                            </p>
                        </div>

                        <div className="flex flex-col justify-start items-start">
                            <h3 className="text-base mb-4 text-gray-200">Tools & Others</h3>
                            <p className="flex gap-3">
                                <a rel="noreferrer" href="https://git-scm.com/" target="_blank">
                                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://postman.com" target="_blank">
                                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://www.linux.org/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://graphql.org/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg" alt="GraphQL" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://www.docker.com/" target="_blank">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="Docker" width="40" height="40" />
                                </a>
                                <a rel="noreferrer" href="https://aws.amazon.com/" target="_blank">
                                    <img
                                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                                        alt="AWS"
                                        width="40"
                                        height="40"
                                    />
                                </a>

                            </p>
                        </div>
                    </div>

                </Fade>
            </section>
        </div>
    );
};

export default Resume;
