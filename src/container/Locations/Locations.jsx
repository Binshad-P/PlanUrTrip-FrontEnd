import React from 'react'
import L_img1 from '../../assets/images/L_img1.png'
import L_img2 from '../../assets/images/L_img2.png'
import L_img3 from '../../assets/images/L_img3.png'
import L_img4 from '../../assets/images/L_img4.png'
import L_img5 from '../../assets/images/L_img1.png'

import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
const Locations = () => {
  return (
    <div className='bg-[#F0F2F2] mt-[5.5rem] '>
        <div className='mx-[5rem] pt-[75px]'>
        <div className='flex flex-col items-center'>
            <h1 className='text-[32px] mb-4 font-Marcellus'>Top Locations to Explore</h1>
            <p className='max-w-[33rem] text-center font-light mb-10'>Going somewhere to celebrate this season? Whether you’re going home or
 somewhere to roam, tool to get you to your destination.</p>
        </div>
        <div className='flex flex-wrap gap-[28px] lg:gap-[47px] md-max:gap-[35px]'>
            <div className='relative  w-[27.11rem] lg:w-[25rem] md-max:w-[19rem] h-[26.25rem]'>
                <img  className='w-[27.11rem] lg:w-[25rem] md-max:w-[19rem] h-[26.25rem] object-cover rounded-md' src={L_img1}/>
                <div className='absolute bottom-7 left-10 flex gap-[11.375rem] md-max:gap-[4.375rem]'>
                    <div >
                    <h1 className='text-white text-2xl font-medium'>Melbourne</h1>
                    <p className='text-white text-sm font-light'>An amazing journey</p>
                    </div>
                    <div>
                        <button className='w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white opacity-25'><BsArrowRightShort  size={25} /></button>
                    </div>
                    
                </div>
            </div>
            <div className='relative w-[27.11rem] lg:w-[25rem] md-max:w-[19rem] h-[26.25rem]'>
                <img  className='w-[27.11rem] lg:w-[25rem] md-max:w-[19rem] h-[26.25rem] object-cover rounded-md' src={L_img2}/>
                <div className='absolute bottom-7 left-10 flex gap-[11.375rem] md-max:gap-[4.375rem]'>
                    <div >
                    <h1 className='text-white text-2xl font-medium'>Paris</h1>
                    <p className='text-white text-sm font-light'>A Paris Adventure</p>
                    </div>
                    <div>
                        <button className='w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white opacity-25'><BsArrowRightShort  size={25} /></button>
                    </div>
                    
                </div>
            </div>
            <div className='relative w-[27.11rem] lg:w-[25rem] md-max:w-[19rem] h-[26.25rem]'>
                <img  className='w-[27.11rem] lg:w-[25rem] md-max:w-[19rem] h-[26.25rem] object-cover rounded-md' src={L_img3}/>
                <div className='absolute bottom-7 left-10 flex gap-[11.375rem] md-max:gap-[4.375rem]'>
                    <div >
                    <h1 className='text-white text-2xl font-medium'>Melbourne</h1>
                    <p className='text-white text-sm font-light'>An amazing journey</p>
                    </div>
                    <div>
                        <button className='w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white opacity-25'><BsArrowRightShort  size={25} /></button>
                    </div>
                    
                </div>
            </div>
            <div className='relative w-[27.11rem] lg:w-[25rem] md-max:w-[19rem] h-[26.25rem]'>
                <img  className='w-[27.11rem] lg:w-[25rem] md-max:w-[19rem] h-[26.25rem] object-cover rounded-md' src={L_img4}/>
                <div className='absolute bottom-7 left-10 flex gap-[11.375rem] md-max:gap-[4.375rem]'>
                    <div >
                    <h1 className='text-white text-2xl font-medium'>Columbia</h1>
                    <p className='text-white text-sm font-light'>An amazing journey</p>
                    </div>
                    <div>
                        <button className='w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white opacity-25'><BsArrowRightShort  size={25} /></button>
                    </div>
                    
                </div>
            </div>
            <div className='relative w-[27.11rem] lg:w-[25rem] md-max:w-[19rem] h-[26.25rem]'>
                <img  className='w-[27.11rem] lg:w-[25rem] md-max:w-[19rem] h-[26.25rem] object-cover rounded-md' src={L_img5}/>
                <div className='absolute bottom-7 left-10 flex gap-[11.375rem] md-max:gap-[4.375rem]'>
                    <div >
                    <h1 className='text-white text-2xl font-medium'>Melbourne</h1>
                    <p className='text-white text-sm font-light'>An amazing journey</p>
                    </div>
                    <div>
                        <button className='w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white opacity-25'><BsArrowRightShort  size={25} /></button>
                    </div>
                    
                </div>
            </div>
            <div className='relative w-[27.11rem] lg:w-[25rem] md-max:w-[19rem] h-[26.25rem]'>
                <img  className='w-[27.11rem] lg:w-[25rem] md-max:w-[19rem] h-[26.25rem] object-cover rounded-md' src={L_img1}/>
                <div className='absolute bottom-7 left-10 flex gap-[11.375rem] md-max:gap-[4.375rem]'>
                    <div >
                    <h1 className='text-white text-2xl font-medium'>Melbourne</h1>
                    <p className='text-white text-sm font-light'>An amazing journey</p>
                    </div>
                    <div>
                        <button className='w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white opacity-25'><BsArrowRightShort  size={25} /></button>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Locations