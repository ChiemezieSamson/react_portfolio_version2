import React from 'react'
import AboutImage from "./../../asset/images/about.jpg"
import { socialIcons } from '../../data'

const About = () => {
  return (
    <div className="md:h-screen md:grid md:items-center">
       
      <div className='md:grid md:grid-cols-2 md:gap-x-6 md:mx-4 md:mt-12'>

        <img loading='lazy' src={AboutImage} alt="aboutImageSection" className='object-fill'/>

        <div className="mt-8 md:mt-3 prose mx-4 md:mx-0">

          <h2 className="font-black text-3xl mb-1.5 text-white font-lora tracking-wide">
            About <span className="font-medium">Me</span>
          </h2>

          <h5 className="font-medium text-2xl text-white mb-5 font-lora tracking-wide">
            HELLO! <span className="text-pink-400">I'm Samson Nebeolisa</span>
          </h5>

          <p className="mt-0 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>

          <p className="mt-0 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <p className="mt-0 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <ul className='list-none m-0 p-0'>
            {socialIcons.map((icon) => {

              return (
                <li key={icon.id} className='inline-block mx-0.5'>

                  <button className="px-2 py-2 rounded-full bg-white group border border-solid hover:bg-pink-400 active:bg-pink-700 transition-colors duration-200 ease-linear">
                    <icon.icon className="text-lg grid items-center group-hover:text-white transition-colors duration-200 ease-linear" />
                  </button>
                </li>
              )
            })}

          </ul>
        </div>
      </div>
		</div>
  )
}

export default About
