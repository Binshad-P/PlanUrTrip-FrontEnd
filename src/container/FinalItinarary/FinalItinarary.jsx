import React from 'react'
import img1 from '../../assets/images/Fi_img1.png'
import img2 from '../../assets/images/Fi_img2.png'
import img3 from '../../assets/images/Fi_img3.png'
import img4 from '../../assets/images/Fi_img4.png'
import img5 from '../../assets/images/bg-img-1.png'
import DetailedTrip from './DetailedTrip'

const FinalItinarary = () => {
  return (
    <div className='px-[5rem] py-[5rem] sm-max:px-[1rem] md-max:px-[3rem]'>
        <p className='font-bold text-3xl mb-5 font-Marcellus flex sm-max:text-center'>Ready To Explore Munnar</p>
        <div className='flex gap-6 w-full sm-max:gap-2'>
            <div className='w-[60%] h-[280px]  '>
                <img src={img1} className='rounded-lg h-[280px] w-[800px] sm-max:h-[260px]'/>
            </div>
            <div className='flex flex-col w-[40%] gap-7 sm-max:gap-2'>
                <div className='flex gap-7 sm-max:gap-2'>
                    <div className='w-[48%] h-[125px] '>
                        <img src={img2} className='rounded-lg h-[125px] w-[400px]'/>
                    </div>
                    <div className='w-[48%] h-[125px] '>
                        <img src={img3} className='rounded-lg h-[125px] w-[400px]'/>
                    </div>
                </div>
                <div className='flex gap-7 sm-max:gap-2'>
                    <div className='w-[48%] h-[125px] '>
                    <img src={img4} className='rounded-lg h-[125px] w-[400px]'/>
                    </div>
                    <div className='w-[48%] h-[125px] '>
                    <img src={img5} className='rounded-lg h-[125px] w-[400px] '/>
                    </div>
                </div>
            </div>
        </div>
        <p className='text-2xl font-semibold mt-4'>Overview</p>
        <p className='font-light sm-max:text-justify'>Crossing the Empty Quarter starts from its northeastern part in the Shabita area near the Shaibah field and extends to the crater in the Umm Al-Hadid area. Umm Al-Hadid, also known as "Bayda’ Allahy," is a sulfur well surrounded by palm trees, plants, and grass. Bayda’ Allahy is one of the most famous areas in the Empty Quarter, serving as a crossroads to the east, leading to AlQaad area, and to the west, reaching Um Quroon and Tawil Al-Khatam. This 6-day journey takes you to the heart of the Empty Quarter, passing through the most important wells, oases, and sand dunes. It is an enjoyable and exciting journey with its enchanting days and nights.</p>
        <DetailedTrip/>
    </div>
  )
}

export default FinalItinarary