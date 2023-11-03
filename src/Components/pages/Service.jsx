import React from 'react'
import { FaRegChartBar } from 'react-icons/fa'
import { Button, PageHead } from './sharedComponents/SharedComponent'

const Service = () => {
  return (
    <div className='mx-4 md:grid md:items-center'>
      <div className="text-center pt-16 text-white">

        <PageHead page={"Services"}/>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2.5 py-10">
          {[...Array(6)].map((_, index) => {
            return (
            <li key={index} className="border border-solid border-white rounded-md shadow-lg shadow-white/30">
              <FaRegChartBar className="inline-block text-4xl text-pink-400 my-4" />

              <h2 className="my-0 pb-3 text-2xl font-lora tracking-wide relative after:absolute after:top-full after:max-w-[150px] after:border-b-4 after:border-solid
              after:inset-x-0 after:border-pink-400 after:content-[''] after:mx-auto">Graphic Design</h2>

              <p className="mx-4 px-1.5 my-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
            )
            })}
        </ul>

        <h2 className="my-0 pb-3 text-lg">I Am Available for Freelance</h2>

        <Button text={"hire me"}/>
      </div>
    </div>
  )
}

export default Service
