import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
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
    <div className="home w-full relative bg-stone-900/50 overflow-clip font-round">

      {/* Navigation Links */}
      <header className='w-full fixed top-0 z-50'>
        <Navigation showNavLinks={showNavLinks} HandleShowNavLinks={HandleShowNavLinks} handleCloseSideBar={handleCloseSideBar}/>
      </header>

      {/* other pages */}
      <main className='w-full max-w-[1500px] mx-auto ' onClick={handleCloseSideBar}>
        <Outlet />
      </main>
    </div>
  )
}

export default HomeRoute
