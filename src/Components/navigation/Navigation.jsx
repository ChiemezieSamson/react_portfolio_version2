import React from 'react'
import Logo from "./../../asset/images/spring.gif"
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../../data'

const Navigation = ({HandleShowNavLinks, showNavLinks, handleCloseSideBar}) => {
  
 
  return (
    <nav className='relative sm:py-5 max-h-24'>

      {/* Website Logo */}
      <Link to={"/"} className="block max-h-16 max-w-16 rounded-full overflow-clip mx-4 mt-5 sm:mt-0" onClick={handleCloseSideBar}>
        <img loading='lazy'	src={Logo} alt="webSiteLogo" className='h-16 w-16 rounded-full'/>
      </Link>

      <ul className={`bg-zinc-50/10 list-none supports-[backdrop-filter]:backdrop-blur py-2 ${showNavLinks ? "translate-x-0 visible opacity-100" : "translate-x-full invisible opacity-0"} 
          sm:translate-x-0 sm:visible sm:opacity-100 sm:grid sm:grid-flow-col items-center sm:px-6 transition-all duration-300 ease-out sm:max-h-20 absolute right-0 sm:top-8 top-0`}>

        {navLinks.map((link) => {

          return (
            <li key={link.id} className='mx-3 font-round md:mx-2 lg:mx-3 my-5 mr-20 sm:mr-0 sm:my-0' onClick={handleCloseSideBar}>

              <NavLink to={link.link} className={({ isActive, isPending }) => isActive ? "text-pink-300" : isPending ? "text-purple-300 font-bold" : "text-white font-bold hover:text-pink-400"}>
                <span className="mx-3 sm:hidden md:inline md:mx-2 lg:mx-3">
                  {link.number}
                </span>
                {link.name}
              </NavLink>
            </li>
          )
        })}
      </ul>

      <button onClick={HandleShowNavLinks} className='text-white sm:hidden text-2xl mt-5 cursor-pointer absolute top-0 right-2 bg-pink-300 hover:text-pink-300 p-0.5 shadow-sm shadow-black'>
        {showNavLinks ? <FaTimes className='gird items-center'/> : <FaBars className='gird items-center'/>}
      </button>
    </nav>
  )
}

export default Navigation
