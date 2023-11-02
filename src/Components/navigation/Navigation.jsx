import React from 'react'
import Logo from "./../../asset/images/spring.gif"
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../../data'

const Navigation = ({HandleShowNavLinks, showNavLinks, handleCloseSideBar}) => {
  
 
  return (
    <div className='grid grid-flow-col justify-between sm:py-5 max-h-28'>

      {/* Website Logo */}
      <Link to={"/"} className="block max-h-16 max-w-16 rounded-full overflow-clip mx-4 mt-5 sm:mt-0" onClick={handleCloseSideBar}>
        <img loading='lazy'	src={Logo} alt="webSiteLogo"/>
      </Link>

      <nav className=''>

        <ul className={`bg-zinc-50/10 list-none supports-[backdrop-filter]:backdrop-blur pt-8 pb-6 ${showNavLinks ? "translate-x-0 visible opacity-100" : "translate-x-full invisible opacity-0"} 
            sm:translate-x-0 sm:visible sm:opacity-100 sm:grid sm:grid-flow-col sm:px-6 sm:py-2.5 transition-all duration-300 ease-out`}>

          {navLinks.map((link) => {

            return (
              <li key={link.id} className='mx-3 font-round md:mx-2 lg:mx-3 my-5 mr-20 sm:mr-0 sm:my-0' onClick={handleCloseSideBar}>

                <NavLink to={link.link} className={({ isActive, isPending }) => isActive ? "text-pink-300" : isPending ? "text-purple-300 font-bold" : "text-white font-bold hover:text-pink-400"}>
                  <span aria-hidden="true" className="mx-3 sm:hidden md:inline md:mx-2 lg:mx-3">
                    {link.number}
                  </span>
                  {link.name}
                </NavLink>
              </li>
            )
          })}
        </ul>

        <button onClick={(HandleShowNavLinks)} className='text-white sm:hidden text-2xl mt-5 cursor-pointer absolute top-2 right-2 bg-pink-300 hover:text-pink-300 p-0.5 shadow-sm shadow-black'>
          {showNavLinks ? <FaTimes className='gird items-center'/> : <FaBars className='gird items-center'/>}
        </button>
      </nav>
    </div>
  )
}

export default Navigation
