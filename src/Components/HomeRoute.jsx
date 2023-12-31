import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './navigation/Navigation'
import { useWindowSize } from '@uidotdev/usehooks'
import BackgroudImage from "./../asset/images/Pc-image.jpg"

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
    <div className="w-full relative overflow-clip font-round">
      
      {/* background Image */}
      <div className='fixed -z-20 inset-0 h-screen'>
        <div className='relative isolate after:absolute after:z-10 after:inset-0 after:bg-black/50 after:content-[""]'>
          <img loading='lazy' src={BackgroudImage} alt="BackgroudImage" className='h-screen'/>
        </div>
      </div>

      {/* Navigation Links */}
      <header className='w-full fixed top-0 z-50'>
        <Navigation showNavLinks={showNavLinks} HandleShowNavLinks={HandleShowNavLinks} handleCloseSideBar={handleCloseSideBar}/>
      </header>

      {/* other pages */}
      <main className='w-full max-w-[1500px] mx-auto ' onClick={handleCloseSideBar}>
        <Outlet />
      </main>

      <footer className='text-white text-center fixed bottom-0 inset-x-0 bg-pink-400'>
        <small> Copyright 2022 &copy; Nebe.Samson</small>
      </footer>
    </div>
  )
}

export default HomeRoute
