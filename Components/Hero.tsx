import React from 'react';
import Particle from "./Particle";
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const Hero = () => {
  const handleWatchCvClick = () => {
    window.open("https://www.topcv.vn/xem-cv/U1JaAlUGUgUKVlEHB1sBAlcFAg5aClUHBAMDVg502d?ta_source=EditCVInAfterSaveCV", "_blank"); 
  };
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
        <Particle />
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
          <div>
            <h1 className="text-[35px] md:text-[50px] text-white font-bold">
              HI, I&apos;M <span className="text-purple-300">THU HIEN!</span>
            </h1>
            <TextEffect />
            <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
              Hello, I&apos;m Nguyen Thi Thu Hien, a web developer from Vietnam. I&apos;m glad you&apos;re visiting this website. You can view my CV below or download it to your device. Have a great day!
            </p>
            <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
              <a href="/file/cv.pdf" download="CV - Nguyen Thi Thu Hien.pdf" className='px-[2rem] hover:bg-purple-300 transition-all duration-200 py-[1rem] text-[18px]
                font-bold uppercase bg-[#e7a8c7] text-black flex items-center space-x-2'>
                  <p>Download CV</p>
                  <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black ' />
              </a>
              <button onClick={handleWatchCvClick} className='flex items-center space-x-2'>
                <PlayCircleIcon className='w-[4rem] h[4rem] hover:text-purple-300 transition-all duration-200 
                text-[#e7a8c7]'/>
                <p className='text-[20px] font-semibold text-white'>Watch CV Online</p>
              </button>
            </div>
          </div>
          <div className='w-[500px] hidden bg-[#e7a8c7] relative lg:flex items-center rounded-full h-[500px]'>
            <Image src="/images/u1.png" alt='user' layout='fill' className='object-cover rounded-full' />
          </div>
        </div>
    </div>
  )
}

export default Hero
