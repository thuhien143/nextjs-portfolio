import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <section id='about' className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] item-center'>
            <div>
                <h1 className='text-[20px] font-bold uppercase text-[#e7a8c7] mb-[1rem]'>
                    ABOUT ME
                </h1>
                <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize 
                mb-[3rem] font-bold text-white'>
                    Transforming <span className='text-purple-300'>Visions</span>
                </h2>
                <div className='mb-[3rem] flex items-center md:space-x-10'>
                    <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                    <p className='text-[19px] text-slate-300 w-[80%]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique, felis molestie blandit facilisis, magna turpis egestas massa, in gravida augue augue id libero. 
                    </p>
                </div>
                <a href="/file/cv.pdf" download="CV - Nguyen Thi Thu Hien.pdf" className='inline-flex px-[2rem] hover:bg-purple-300 transition-all duration-200 py-[1rem] text-[18px]
                    font-bold uppercase bg-[#e7a8c7] text-black items-center space-x-2'>
                    <p>Download CV</p>
                    <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black ' />
              </a>
            </div>
            <div
                data-aos="fade-left" 
                className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'
            >
                <Image 
                    src="/images/about.png" 
                    alt='user'
                    layout='fill' 
                    objectFit='contain' 
                    className='relative z-[11] w-[100%] h-[100%] object-contain' />
                <div className='absolute w-[100%] h-[100%] z-[10] bg-[#e7a8c7] top-[-2rem] right-[-2rem]'></div>
            </div>
        </div>
    </section>
  );
}

export default About