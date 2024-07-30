import React from 'react'

interface Props {
    title: string;
    year: string;
    desc: string;
}

const SkillsItem = ({title, year, desc} : Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
    <span className='px-[2rem] text-[#e7a8c7] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#e7a8c7]'>
        {year}
    </span>
    <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
        {title}
    </h1>
    <p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'>
        {desc}
    </p>
  </div>
  );
};

export default SkillsItem