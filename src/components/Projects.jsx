import React from 'react';
import project1 from "../assets/proj1.jpg"
import project2 from "../assets/proj2.jpg"
import project3 from "../assets/proj3.jpg"
import project4 from "../assets/proj4.jpg"

import { AiFillGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Project #1",
      description: "A platform designed to simplify property hunting by providing a user-friendly interface to browse, search, and contact property listings. Built using Python and Django, with MySQL as the database.",
      links: {
        site: "#",
        github: "https://github.com/AshuRaj7/HomelySpace",
      },
    },
    {
      img: project2,
      title: "Project #2",
      description: "A job search portal developed to help users discover and apply for jobs easily. The project integrates Python, Django, and a relational database to provide a seamless job-search experience.",
      links: {
        site: "#",
        github: "https://github.com/AshuRaj7/JobFinder",
      },
    },
    {
      img: project3,
      title: "Project #3",
      description: "A responsive ReactJS application for exploring and searching movies. It fetches real-time data from the OMDb API and showcases movie details using React Router, hooks, and TailwindCSS for styling.",
      links: {
        site: "#",
        github: "https://github.com/AshuRaj7/MovieApp",
      },
    },
    {
      img: project4,
      title: "Project #4",
      description: "A personal portfolio website built using ReactJS to showcase projects, skills, and achievements. The site is fully responsive, styled with TailwindCSS, and features dynamic routing and React hooks for smooth navigation and interactivity.",
      links: {
        site: "#",
        github: "#",
      },
    },
 
  ]

const Projects = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="Proj">
        <h2 className='text-3xl font-bold text-gray-200 mb-8 underline'>Projects :-</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-full rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiFillGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Projects