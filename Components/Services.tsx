import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Services = () => {
  return (
    <section id='services' className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
        <p className="heading">
            My <span className="text-purple-300">Services</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem]
        text-white">
            <div data-aos="fade-right">
                <div className="bg-violet-500 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                uppercase font-semibold text-center p-[2rem]"> 
                    <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8" />
                    <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                        Frontend
                    </h1>
                    <p className="text-[15px] text-white font-normal">
                        In my projects, I frequently utilize libraries/frameworks such as ReactJS and NextJS. And other technologies such as CSS, SCSS.
                    </p>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
                <div className="bg-purple-400 hover:scale-110 transform transition-all duration-300
                uppercase font-semibold text-center p-[2rem]"> 
                    <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8" />
                    <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                        Backend
                    </h1>
                    <p className="text-[15px] text-white font-normal">
                        On the backend, I primarily work with Node.js and Express.js. For database management, I frequently utilize MySQL and MongoDB.
                    </p>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="500" >
                <div className="bg-pink-300 hover:scale-110 transform transition-all duration-300 hover:rotate-6
                uppercase font-semibold text-center p-[2rem]"> 
                    <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8" />
                    <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                        Fullstack
                    </h1>
                    <p className="text-[15px] text-white font-normal">
                        In addition to standard projects, I have also worked on MERN stack projects utilizing MongoDB, ExpressJS, React, and NodeJS.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services