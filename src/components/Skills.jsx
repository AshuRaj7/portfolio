import React, { useState } from "react";

import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiGithubBadge,
  DiPython,
  DiSqllite,
  DiDjango,
} from "react-icons/di";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "Python", icon: <DiPython className="text-yellow-500" /> },
      { name: "Django", icon: <DiDjango className="text-green-400" /> },
      { name: "SQLite", icon: <DiSqllite className="text-green-600" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-green-600" /> },
    ],
  },
];

const certifications = [
  {name: "Python Certification", site :'https://drive.google.com/file/d/12udMOcSMRIIR3NCiwGzdHR1S8qoptxCL/view?usp=drive_link'},
  {name:"Django Certification",sit:'https://drive.google.com/file/d/1H8kl2tYefWeZqqls1P0C8fUKjKf1Kp9h/view?usp=drive_link'},
  {name:"CCNA Certification",sit:'https://drive.google.com/file/d/1Gx0VNTXVN_tpipaI0C1JxK0X6ofu0E3q/view?usp=drive_link'},
  {name:"Cybersecurity Certification",sit:'https://drive.google.com/file/d/1GxYzF1DQNMJUd2CDiEe8Na68oVWdc8al/view?usp=drive_link'},
  {name:"Ethical Hacking Certification",sit:'https://drive.google.com/file/d/1H09KFjSYUYsncOxVa1MMTQNX_J9HXYT_/view?usp=drive_link'},
  {name:'',sit:''},
  {name:'',sit:''},

  
  
  
  
];

const education = [
  {
  degree : "Btech : ",
  collegeName: " Vignan's Institute of Information Technology ",
  place : "Gajuwaka",
  period : '2021 - 2025',
},
{
  degree : "Diploma : ",
  collegeName: " Government Polytechnic Collage ",
  place:"Anakapalli",
  period : '2017 - 2020',
},
]
const Skills = () => {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <>
      <div className="flex flex-col justify-center items-center text-gray-300 my-3">
        <h3 className="text-4xl font-bold mb-5">
          About <span>Me</span>
        </h3>
        <p className="text-justify leading-7 w-11/12 mx-auto">
          I am a full-stack developer with a strong foundation in Python and
          JavaScript, specializing in creating efficient and user-friendly web
          applications. My expertise includes backend development with Django
          and frontend development with React, along with proficiency in
          working with databases like MySQL, SQLite, and PostgreSQL.
          <br />
          <br />I am passionate about building interactive and responsive
          applications and constantly strive to enhance my knowledge and skill
          set. With certifications in Python, Django, CCNA, Cybersecurity, and
          Ethical Hacking.
          <br />
          <br />I bring a solid technical background and a dedication to
          delivering high-quality solutions. As a quick learner and team
          player, I thrive in collaborative environments and am eager to
          contribute to innovative projects.
        </p>
      </div>

      <div className="max-w-[700px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 space-x-4">
            {["Skills", "Education", "Certificates"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg text-lg font-semibold ${
                  activeTab === tab
                    ? "bg-purple-900 text-gray-200"
                    : "bg-purple-700 text-gray-300"
                } hover:bg-purple-800 transition duration-300`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "Skills" && (
            <>
              <h2 className="text-4xl font-bold mb-4 text-center">Skills</h2>
       
              <div
                className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8"
              >
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2"
                  >
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {skill.technologies.map((tech, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="text-2xl">{tech.icon}</span>
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "Education" && (
            <div>
              <h2 className="text-4xl font-bold mb-4 text-center">Education</h2>
              <ul className="space-y-2">
            {education.map((college, index) => (
              <li key={index}>
                <p className="text-center text-white text-lg"><b>{college.degree} </b> &ensp; {college.collegeName}, &nbsp; {college.place}. &ensp; <b>{college.period}</b></p>

              </li>
            ))}
          </ul>
            
            </div>
          )}

          {activeTab === "Certificates" && (
            <div>
              <h2 className="text-4xl font-bold mb-4 text-center cursor pointer">Certificates</h2>
              <ul className="space-y-2">
            {certifications.map((cert, index) => (
              <li key={index}>
                <a
                  href={cert.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
            </div>
          )}
        </Reveal>
      </div>
    </>
  );
};

export default Skills;
