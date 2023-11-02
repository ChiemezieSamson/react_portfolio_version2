import React from 'react'
import { FaRegChartBar } from 'react-icons/fa'

const Service = () => {
  return (
    <div className='mx-4 2xl:h-screen md:grid md:items-center'>
      <div className="text-center py-[63px] text-white">

        <h2 className="font-black text-3xl m-0 pt-6 font-lora tracking-wide">
          <span className="font-medium">My</span> Services
        </h2>

          <p className="text-lg my-0 py-2">
            Am a front-end Developer who loves building user-friendly website and web app and currently living in Nanjing China.
          </p>

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

          <h2 className="my-0 pb-3">I Am Available for Freelance</h2>

          <button className="rounded-md py-3 px-5 bg-pink-400 border-0 border-solid border-pink-400 text-white mb-10 hover:bg-pink-300 active:bg-pink-700 transition-colors duration-200 ease-linear
          shadow-md shadow-white/50">
            hire me
          </button>
      </div>
    </div>
  )
}

export default Service
