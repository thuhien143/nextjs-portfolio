import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <section id='blog' className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]'>
        <h1 className='heading'>
            MY
            <span className='text-purple-300'> BLOG</span>
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto'>
            <div>
                <div className='w-[100%] relative h-[400px]'>
                    <Image
                        src="/images/blog3.jpg" 
                        alt='blog'
                        layout='fill'
                        className='object-cover'
                    />
                </div>
                <div className='w-[93%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#e7a8c7] relative mt-[-3rem] text-black font-semibold
                    text-[17px] mx-auto'>
                        December 15, 2023
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#e7a8c7]' />
                            <p className='text-white'>By Shiho</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#e7a8c7]' />
                            <p className='text-white'>Comments(2)</p>
                        </div>
                    </div>
                    <p className='mt-[1rem] text-white text-[18px] font-semibold'>Next js Fullstack Developer</p>
                </div>
            </div>
            <div>
                <div className='w-[100%] relative h-[400px]'>
                    <Image
                        src="/images/blog2.jpg" 
                        alt='blog'
                        layout='fill'
                        className='object-cover'
                    />
                </div>
                <div className='w-[93%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#e7a8c7] relative mt-[-3rem] text-black font-semibold
                    text-[17px] mx-auto'>
                        December 20, 2023
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#e7a8c7]' />
                            <p className='text-white'>By Shiho</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#e7a8c7]' />
                            <p className='text-white'>Comments(6)</p>
                        </div>
                    </div>
                    <p className='mt-[1rem] text-white text-[18px] font-semibold'>React New Features</p>
                </div>
            </div>
            <div>
                <div className='w-[100%] relative h-[400px]'>
                    <Image
                        src="/images/blog1.jpg" 
                        alt='blog'
                        layout='fill'
                        className='object-cover'
                    />
                </div>
                <div className='w-[93%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#e7a8c7] relative mt-[-3rem] text-black font-semibold
                    text-[17px] mx-auto'>
                        December 25, 2023
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#e7a8c7]' />
                            <p className='text-white'>By Shiho</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#e7a8c7]' />
                            <p className='text-white'>Comments(9)</p>
                        </div>
                    </div>
                    <p className='mt-[1rem] text-white text-[18px] font-semibold'>Next JS New Features</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog