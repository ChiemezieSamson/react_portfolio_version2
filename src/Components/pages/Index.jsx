import React, { useEffect, useState } from 'react'

const Index = () => {
  const [heroMessage, setHeroMessage] = useState(" ");
  const [count, setCount] = useState(0)
  const message = "i am a frontend developer";
  
	useEffect(() => {
    const delay = 300; // Adjust the delay between letters (in milliseconds)

    const interval = setInterval(() => {
      if (count < message.length) {
        setHeroMessage((prevText) => prevText + message[count]);
        setCount(() => count + 1);
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => {
      clearInterval(interval);
    };   

	}, [heroMessage, count]);

  return (
    <div className='p-4 mx-auto max-w-3xl text-center prose'>
      <h1 className="mb-2 text-4xl font-black text-white">Welcome</h1>

			<div className="uppercase font-black text-3xl text-white">{heroMessage}</div>

			<p className="mx-auto px-4 text-lg font-lg my-0 max-w-2xl pt-2 text-white">
				Am a front-end Developer who loves building user-friendly website and
				web app and currently living in Nanjing China.
			</p>

			<button className="bg-transparent text-white border border-white border-solid rounded-md py-3 px-4 mt-10 focus:border-white focus:outline-none outline-none shadow shadow-white">
				<span className='tracking-wide font-medium'>DOWNLOAD CV</span>
			</button>

			<div className="border-2 border-white border-solid mt-10 w-4 mx-auto grid items-center rounded">
				<div className="animate-bounce pt-2 font-black text-white">I</div>
			</div>
    </div>
  )
}

export default Index
