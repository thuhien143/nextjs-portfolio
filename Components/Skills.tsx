import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='heading'>
            Education & <span className='text-purple-300'>Skill</span>
        </h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]
        items-center'>
            <div>
                <SkillsItem 
                    title="React Developer" 
                    year="2024 - 2024" 
                    desc="I have completed an online course on React, where I acquired and applied skills to real-world projects." 
                />
                <SkillsItem 
                    title="MERN Stack Developer" 
                    year="2024 - 2024" 
                    desc="I have applied the skills from this MERN stack course to real-world projects, such as the Blog project linked below." 
                />
                <SkillsLanguage 
                    skill1="html" 
                    skill2="css" 
                    skill3="javascript" 
                    level1="w-[91%]" 
                    level2="w-[88%]" 
                    level3="w-[80%]" 
                />
            </div>
            <div>
                <SkillsItem 
                    title="Next JS Developer" 
                    year="2024 - 2024" 
                    desc="I have independently explored and learned Next.js to apply it to real-world projects, such as this portfolio site."
                />
                <SkillsItem 
                    title="Node JS Developer" 
                    year="2024 - 2024"
                    desc="I have independently studied Node.js through online courses, and Node.js is utilized in the majority of my projects."
                />
                <SkillsLanguage 
                    skill1="React JS" 
                    skill2="Next JS" 
                    skill3="Typescript" 
                    level1="w-[91%]" 
                    level2="w-[88%]" 
                    level3="w-[50%]" />
            </div>
        </div>
    </div>
  )
}

export default Skills