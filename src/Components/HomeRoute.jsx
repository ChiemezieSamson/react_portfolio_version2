import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import backgroudimage from "./../asset/images/Pc-image.jpg"
import Navigation from './navigation/Navigation'
import { useWindowSize } from '@uidotdev/usehooks'

const HomeRoute = () => {
  const [showNavLinks, setShowNavLinks] = useState(false)
  const size = useWindowSize();

  const HandleShowNavLinks = () => {
    setShowNavLinks((state) => !state)
  }

  const handleCloseSideBar = () => {
    setShowNavLinks(() => false)
  }

  useEffect(() => {
    if(size.width > 640) {
      handleCloseSideBar()
    }
  }, [size])

  return (
    <div className='w-full bg-slate-100 relative'>

      {/* Backgroug Image */}
      <div className="h-screen overflow-clip relative isolate after:absolute after:content-[''] after:bg-stone-900/50 after:inset-0 after:z-10">
        <img loading='lazy' src={backgroudimage} alt="backgroudImage"/>
      </div>

      {/* Navigation Links */}
      <header className='absolute top-0 w-full z-40'>
        <Navigation showNavLinks={showNavLinks} HandleShowNavLinks={HandleShowNavLinks} handleCloseSideBar={handleCloseSideBar}/>
      </header>

      {/* other pages */}
      <main className='absolute inset-0 z-20 max-w-7xl mx-auto' onClick={handleCloseSideBar}>
        <Outlet />
      </main>
    </div>
  )
}

export default HomeRoute
