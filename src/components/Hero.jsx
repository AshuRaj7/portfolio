import React from "react";
import profilepic from "../assets/pro.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="mt-24 max-w-screen mx-auto relative">
             <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1000} />
        </div>
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "Frontend Dev..",
                        1000,
                        "Programer;",
                        1000,
                        "Python Dev..",
                        1000,
                        "Django Dev..",
                        1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                />
                    
                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    HEY, I AM <br/>
                    <span className="text-purple-400 font-bold drop-shadow-[0_0_10px_rgba(128,0,128,0.8)]">
                        Ashok Kumar
                    </span>

                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    I am also Intrested Cyber Security And Ethical Hacking  .
                </motion.p>
                    
       
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl"     
                    >
                      <a href='https://drive.google.com/file/d/1JmpEwDGYcELL9gTftGDjowgT8E8Yi_J3/view?usp=drive_link' target="blank">View Resume</a>  
                    </motion.button>

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/AshuRaj7" target="blank">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/ashok-kumar-bodhanki-24a44425a/" target="blank">
                            <AiOutlineLinkedin/>
                        </motion.a>


                    </div>
                </motion.div>
            </motion.div>


            <motion.img 
    src={profilepic}
    className="w-[300px] md:w-[450px] rounded-full shadow-[0_0_30px_rgba(255,0,255,0.6)]"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
/>

        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            

        </motion.div>

        
    </div>
  )
}

export default Hero