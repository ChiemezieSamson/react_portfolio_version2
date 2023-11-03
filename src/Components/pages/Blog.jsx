import React from 'react'
import { Blogs } from '../../data'
import { PageHead } from './sharedComponents/SharedComponent'


const Blog = () => {
  
  return (
    <div className="mx-4">
      <div className="text-center text-white pt-16 mb-12 lg:mb-5">

        <PageHead page={"Blog"}/>

        <ul className='grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mt-8'>
          {Blogs.map((blog) => {

            return (
              <li key={blog.id} className='text-left'>
                
                <div className='max-h-72 rounded overflow-clip shadow shadow-white/50 mb-7'>
                  <img src={blog.image} alt="blogImage" className='h-screen max-h-72 object-fill'/>
                </div>
                 
                <h3 className='text-lg font-lora tracking-wide'>{blog.title}</h3>

                <small className='text-sm font-josefin mb-5 inline-block'>
                  <time dateTime="2022-07-14">{blog.date}</time>
                  <span className="text-pink-300 ml-3 inline-block">{blog.author}</span>
                </small>

                <p>
                  {blog.text}
                </p>

                <button className="bg-pink-400 hover:bg-pink-300 rounded-md shadow shadow-white/50 cursor-pointer transition-colors duration-200 ease-linear mt-5 px-2">Read More...</button>              
              </li>
            )
          })}
        </ul>
      </div>      
    </div>
  )
}

export default Blog
