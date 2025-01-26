import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
            stiffness: 20,
            damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
            stiffness: 20,
            damping: 15
            }
        }
    }

  return (
    <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>
        <div className='w-screen mx-auto  flex justify-between text-gray-200
        text-xl items-center px-12 h-20'>
            <h3>Bodhanki Ashok Kumar</h3>
            {/* <a href="#">Welcome</a> */}

            <ul className='hidden md:flex gap-12 z-10 cursor-pointer '>
                <li  ><Link to="skills" smooth={true} offset={-400} duration={500}>About</Link></li>
                <li  ><Link to="Proj" smooth={true} offset={-60} duration={500}>Projects</Link></li>
                <li  ><Link to="contact" smooth={true} offset={-80} duration={500}>Contact</Link></li>
            </ul>

            <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <motion.div
            initial={false}
            animate={nav ? 'open' : 'closed'}
            variants={menuVariants}
            className='fixed left-0 top-0 w-3/5 min-h-screen bg-gray-900 z-40'
            >
                <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
                    <li><Link to="skills" onClick={closeNav} smooth={true} offset={-750} duration={500}>About</Link></li>
                    <li><Link to="Proj" onClick={closeNav} smooth={true} offset={-50} duration={500}>Projects</Link></li>
                    <li><Link to="contact" onClick={closeNav} smooth={true} offset={-80} duration={500}>Contact</Link></li>
                </ul>

                {/* <div className="flex mt-40 gap-6 flex-row  justify-center items-center  text-4xl md:text-6xl text-purple-400 z-20">
                                        <motion.a whileHover={{ scale: 1.2 }} href="#">
                                            <AiOutlineGithub/>
                                        </motion.a>
                
                                        <motion.a whileHover={{ scale: 1.2 }} href="#">
                                            <AiOutlineLinkedin/>
                                        </motion.a>
                
                
                                    </div> */}
            </motion.div>



        </div>
    </div>
  )
}

export default Navbar