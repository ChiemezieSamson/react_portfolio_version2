import React, { useEffect, useState } from 'react'
import { Project_image, button } from '../../data'
import { PageHead } from './sharedComponents/SharedComponent';

const Projects = () => {
  const [projects, setProjects] = useState([])


  let handleBtn = (e) => {
    const Text = e.target.textContent

    if (Text === "All") {

      return setProjects(() => Project_image);
    } else if (Text === "Seo") {

      const SeoProjects = Project_image.filter((project) => project.seo)

      return setProjects(() => SeoProjects);
    } else {

      const category =  Project_image.filter((project) => project.category === Text)

      setProjects(() => category);
    }
  };


  useEffect(() => {
    setProjects(() => Project_image)
  }, [])

  return (
    <div className="mx-4">
     	<div className="pt-16 mb-12 text-center text-white">

        <PageHead page={"Work"}/>

        <ul className='grid grid-flow-col max-w-xs mx-auto gap-x-2 text-center mt-5'>
          {button.map((section) => {
            return (
              <li key={section.id} className='bg-pink-400 hover:bg-pink-300 rounded-md shadow shadow-white/50 cursor-pointer transition-colors duration-200 ease-linear' onClick={(e) => handleBtn(e)}>
                {section.name}
              </li>
            );
          })}
        </ul>

        <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8">

          {projects.map((project) => {
            return (
              <li key={project.id} className="relative z-0 isolate group overflow-clip rounded-md">
                
                <img src={project.image}	alt="Project"	loading="lazy" className='h-72 rounded-md object-fill'/>
            
                <div className="absolute text-center inset-x-0  -top-16 invisible opacity-0 grid items-center after:absolute after:content-[''] after:inset-0 after:bg-black/40 group-hover:top-0 group-hover:bottom-0
                  transition-all duration-200 ease-linear group-hover:opacity-100 group-hover:visible">
                  <span className='absolute z-10 inset-0 grid items-center'>

                    <span className="font-medium">
                      category
                      <div className="text-2xl font-semibold mt-1">{project.name}</div>
                    </span>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
		  </div> 
    </div>
  )
}

export default Projects
