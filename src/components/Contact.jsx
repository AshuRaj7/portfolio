import React from "react"
import { AiFillLinkedin, AiFillGithub,AiFillPhone, AiFillRedEnvelope, AiFillCopyrightCircle } from "react-icons/ai"

import Reveal from "./Reveal"
import { Link } from "react-scroll"


const Contact = () => {
  return (
    <>
    <div className="flex flex-row">

    <div className="px-6 max-w-[1000px] mx-auto md:my-12 text-white" id="contact">
    <h1 className="text-white text-4xl font-bold ">Contact Me :-</h1>
        <Reveal>
        <div className="text-center">
        <h5 className="text-xl font-bold mb-6 mt-16 underline">Get in Touch</h5>
        <p className="text-[#ADB7BE] mb-8 max-w-3xl mx-auto">
          Feel free to reach out if you have any questions or opportunities to discuss. I am always open to connect!
        </p>
      </div>

      <div className="flex flex justify-center gap-12 flex-wrap">
        {/* Phone Number */}
        <div className="flex items-center gap-3 mb-8">
          <AiFillPhone className="text-primary-500 text-3xl" />
          <p className="text-lg font-medium">+91 7036584341</p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 mb-8">
          <AiFillRedEnvelope className="text-primary-500 text-3xl" />
          <a
              href="mailto:shoky093@gmail.com"
              target="_blank"
              className="text-lg font-medium hover:underline"
            >
              shoky093@gmail.com
            </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-3 mb-8">
          <AiFillGithub className="text-primary-500 text-3xl" />
          <a href="https://github.com/AshuRaj7" target="_blank" className="text-lg font-medium hover:underline">
            github.com/AshuRaj7
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-3 mb-8">
          <AiFillLinkedin className="text-primary-500 text-3xl" />
          <a href="https://www.linkedin.com/in/ashok-kumar-bodhanki-24a44425a/" target="_blank" className="text-lg font-medium hover:underline">
            Bodhanki_Ashok_Kumar 
          </a>
        </div>
      </div>

      <div className="text-center">

      </div>
        
        </Reveal>
    </div>



    </div>
    <div className="flex items-center justify-end px-4 py-2 w-full">
      <AiFillCopyrightCircle className="text-primary-500 text-3xl text-white mr-2" />
      <p className="text-gray-400 text-sm sm:text-base">Copyrights Reserved</p>
    </div>

    </>
  )
}

export default Contact