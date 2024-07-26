import React from 'react'

interface Props {
    title: string;
    year: string;
}

const SkillsItem = ({title, year} : Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
    <span className='px-[2rem] text-[#e7a8c7] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#e7a8c7]'>
        {year}
    </span>
    <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
        {title}
    </h1>
    <p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique, felis molestie blandit facilisis, magna turpis egestas massa, in gravida augue augue id libero. 
    </p>
  </div>
  );
};

export default SkillsItem