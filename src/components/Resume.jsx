import React from 'react';
import { FaDownload, FaBook, FaSchool } from 'react-icons/fa';

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/PiyushJoshiResume.pdf';
        link.download = 'PiyushJoshiResume.pdf';
        link.click();
    };

    return (
        <div className="gridGradient bg-gradient-to-r from-blue-900 to-indigo-800 text-white min-h-screen font-poppins p-8 md:p-36 md:pt-28">
            <section>
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl font-semibold flex items-center">
                        <FaBook className="mr-2" /> Experience
                    </h2>
                    <button
                        onClick={handleDownload}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:bg-yellow-600 text-gray-100 font-semibold px-6 py-3 rounded-lg flex items-center shadow-2xl"
                    >
                        <FaDownload className="mr-2" /> Download Resume
                    </button>
                </div>

                <div className="relative border-l-[3px] border-blue-400 pl-6 space-y-10 text-gray-300">
                    <div className="relative">
                        <span className="absolute -left-9 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                        </span>
                        <h3 className="text-2xl font-bold">Full Stack Developer</h3>
                        <p className="text-sm text-gray-400">CampusBid | Nov 2024 — Present</p>
                        <p className="mt-2 leading-relaxed text-justify">
                            • Designed, developed, and maintained a robust full-stack platform, ensuring scalability and future-readiness for user growth. <br />
                            • Strengthened site security by implementing robust authentication mechanisms, significantly reducing potential vulnerabilities.
                        </p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-9 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                        </span>
                        <h3 className="text-xl font-bold">Full Stack Developer</h3>
                        <p className="text-sm text-gray-400">603TheCoworkingSpace | Aug 2024 — Oct 2024</p>
                        <p className="mt-2 leading-relaxed text-justify">
                            • Spearheaded the development and deployment of a high-quality UI/UX, resulting in a 30% increase in user engagement on the company's website. <br />
                            • Built and scaled web applications using the MERN stack, reducing page load times by 35%. <br />
                            • Optimized application performance using Next.js and Tailwind CSS, achieving a 50% improvement in site speed.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-12">
                <div className="relative text-gray-300">
                    <h2 className="text-2xl font-semibold flex items-center mb-6">
                        <FaSchool className="mr-2" /> Education
                    </h2>
                    <div className="relative border-l-[3px] border-blue-400 pl-6 space-y-10 text-gray-300">
                    <div className="relative">
                        <span className="absolute -left-9 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                        </span>
                        <h3 className="text-lg font-bold">Netaji Subhas University of Technology</h3>
                        <p className="text-sm text-gray-400">Oct 2022 — Aug 2026 (Expected)</p>
                        <p className="mt-2 leading-relaxed">
                            I am currently pursuing a B.Tech in Computer Science and Engineering (CSE), gaining in-depth knowledge in programming, data structures, algorithms, software engineering, and computer networks.
                        </p>
                    </div>
                    </div>
                </div>
            </section>

            <section className="mt-12">
                <h2 className="text-2xl font-semibold flex items-center mb-6">
                    Languages and Tools
                </h2>
                <div className="text-center flex flex-col justify-start items-start gap-10">
                    {/* Programming Languages */}
                    <div className="flex flex-col justify-start items-start">
                        <h3 className="text-base mb-4 text-gray-200">Programming Languages</h3>
                        <p className="flex gap-3">
                            <a href="https://www.typescriptlang.org/" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                                    alt="TypeScript"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                                    alt="JavaScript"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://www.python.org" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                                    alt="Python"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://www.java.com/" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                                    alt="Java"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://www.php.net/" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                                    alt="PHP"
                                    width="40"
                                    height="40"
                                />
                            </a>
                        </p>
                    </div>

                    {/* Frontend Tools */}
                    <div className="flex flex-col justify-start items-start">
                        <h3 className="text-base mb-4 text-gray-200">Frontend Development</h3>
                        <p className="flex gap-3">
                            <a href="https://reactjs.org/" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                                    alt="React"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://redux.js.org/" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                                    alt="Redux"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://reactnative.dev/" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                                    alt="React Native"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://nextjs.org/" target="_blank">
                                <img
                                    src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                                    alt="Next.js"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://getbootstrap.com/" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
                                    alt="Bootstrap"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://tailwindcss.com/" target="_blank">
                                <img
                                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                                    alt="Tailwind CSS"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://sass-lang.com/" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                                    alt="Sass"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                                    alt="HTML"
                                    width="40"
                                    height="40"
                                />
                            </a>
                        </p>
                    </div>

                    {/* Backend and Databases */}
                    <div className="flex flex-col justify-start items-start">
                        <h3 className="text-base mb-4 text-gray-200">Backend & Databases</h3>
                        <p className="flex gap-3">
                            <a href="https://nodejs.org" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                                    alt="Node.js"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://expressjs.com" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                                    alt="Express"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://www.mysql.com/" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                                    alt="MySQL"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://redis.io/" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg"
                                    alt="Redis"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://www.mongodb.com/" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                                    alt="MongoDB"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://www.postgresql.org/" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
                                    alt="PostgreSQL"
                                    width="40"
                                    height="40"
                                />
                            </a>
                        </p>
                    </div>

                    {/* Machine Learning Tools */}
                    <div className="flex flex-col justify-start items-start">
                        <h3 className="text-base mb-4 text-gray-200">Machine Learning Tools</h3>
                        <p className="flex gap-3">
                            <a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://raw.githubusercontent.com/scikit-learn/scikit-learn/main/doc/logos/scikit-learn-logo.png"
                                    alt="Scikit-learn"
                                    width="40"
                                    height="40"
                                />
                            </a>
                        </p>
                    </div>


                    {/* Tools */}
                    <div className="flex flex-col justify-start items-start">
                        <h3 className="text-base mb-4 text-gray-200">Tools & Others</h3>
                        <p className="flex gap-3">
                            <a href="https://git-scm.com/" target="_blank">
                                <img
                                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                                    alt="Git"
                                    width="40"
                                    height="40"
                                />
                            </a>
                            <a href="https://postman.com" target="_blank">
                                <img
                                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                                    alt="Postman"
                                    width="40"
                                    height="40"
                                />
                            </a>
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Resume;


