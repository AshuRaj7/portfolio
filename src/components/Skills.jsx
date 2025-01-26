import React from "react"
import {
  AiOutlineGithub,
} from "react-icons/ai";
import { motion } from "framer-motion";
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
} from "react-icons/di"
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
       
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
      ],
    },
    {
      category: 'Fullstack',
      technologies: [
        { name: 'Python', icon: <DiPython className='text-yellow-500' /> },
        { name: 'Django', icon: <DiDjango className='text-geen-400' /> },
        { name: 'sqlLite', icon: <DiSqllite className='text-green-600' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
        { name: 'GitHub', icon: <DiGithubBadge className='text-geen-600' /> },
      ],
    },
  ]

const Skills = () => {
  return (
    <>
                <div className="flex flex-col  justify-center items-center text-gray-300 my-3">
                    <h3 className="text-4xl font-bold mb-5">About <span>Me</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    I am a full-stack developer with a strong foundation in Python and JavaScript, specializing in creating efficient and user-friendly web applications.
                    My expertise includes backend development with Django and frontend development with React, along with proficiency in working with databases like MySQL, SQLite, and PostgreSQL.
                    <br/><br/>I am passionate about building interactive and responsive applications and constantly strive to enhance my knowledge and skill set.
                    With certifications in Python, Django, CCNA, Cybersecurity, and Ethical Hacking.<br/><br/> I bring a solid technical background and a dedication to delivering high-quality solutions.
                    As a quick learner and team player, I thrive in collaborative environments and am eager to contribute to innovative projects.
                    </p>
                </div>

                

    <div className="max-w-[700px] mx-auto  flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        
        <Reveal>
        <h2 className="text-4xl font-bold mb-4 text-center">Skills</h2>
        <p className="flex flex-row text-center mb-8">
            I worked on various frontend and fullstack projects.<u>Check here-{'>'}</u>   
                        <motion.a className='text-4xl' whileHover={{ scale: 1.2 }} href="#">
                            <AiOutlineGithub/>
                        </motion.a>
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2">
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
        </Reveal>
    </div>
    </>
  )
}

export default Skills
