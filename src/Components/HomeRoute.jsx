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
    <div className="w-full bg-stone-900/50 overflow-clip h-screen">

      {/* Navigation Links */}
      <header className='w-full'>
        <Navigation showNavLinks={showNavLinks} HandleShowNavLinks={HandleShowNavLinks} handleCloseSideBar={handleCloseSideBar}/>
      </header>

      {/* other pages */}
      <main className='w-full h-screen grid items-center' onClick={handleCloseSideBar}>
        <Outlet />
      </main>
    </div>
  )
}

export default HomeRoute
