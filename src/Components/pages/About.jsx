import React from 'react'
import AboutImage from "./../../asset/images/about.jpg"
import { SocialMediaIcons } from './sharedComponents/SharedComponent'

const About = () => {
  return (
    <div className="md:grid md:items-center md:h-screen">
       
      <div className='md:grid md:grid-cols-2 md:gap-x-6 md:mx-4'>

        <img loading='lazy' src={AboutImage} alt="aboutImageSection" className='object-fill'/>

        <div className="my-8 md:mt-3 mx-4 md:mx-0">

          <h2 className="font-black text-3xl mb-1.5 text-white font-lora tracking-wide">
            About <span className="font-medium">Me</span>
          </h2>

          <h5 className="font-medium text-2xl text-white mb-5 font-lora tracking-wide">
            HELLO! <span className="text-pink-400">I'm Samson Nebeolisa</span>
          </h5>

          <div className='px-1 max-w-xl mb-7 text-lg'>

            <p className="mt-2.5 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>

            <p className="mt-2.5 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>

            <p className="mt-2.5 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>

          <SocialMediaIcons />
        </div>
      </div>
		</div>
  )
}

export default About
