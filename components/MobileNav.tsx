import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({nav, closeNav}:Props) => {

    const navAnimation = nav?"translate-x-0" : "translate-x-[-100%]";
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          closeNav(); 
        }
    };
  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}>
        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
            <div className='nav-link-mobile' onClick={() => scrollToSection('home')}>HOME</div>
            <div className='nav-link-mobile' onClick={() => scrollToSection('services')}>SERVICES</div>
            <div className='nav-link-mobile' onClick={() => scrollToSection('about')}>ABOUT</div>
            <div className='nav-link-mobile' onClick={() => scrollToSection('projects')}>PROJECTS</div>
            <div className='nav-link-mobile' onClick={() => scrollToSection('blog')}>BLOG</div>
            <div className='nav-link-mobile' onClick={() => scrollToSection('footer')}>CONTACT</div>
        </div>
        <div onClick={closeNav} className="absolute x-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-purple-300">
            <XMarkIcon />
        </div>
    </div>
  )
}

export default MobileNav