import React from 'react'

import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const TripPlanner = () => {
  return (
    <>
    <div className='  bg-PlanUrTrip w-full h-[450px]  bg-center bg-cover sm-max:h-[350px] md-max:h-[400px]'>
        
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <p className='font-Marcellus text-5xl text-white mb-5'>Trip Planner</p>
            <Link to={'/Itinerary'}><button className='flex border gap-3 items-center border-white py-[10px] px-[20px] text-white'>Create Itinerary<FaArrowRight color='white'/></button></Link>
        </div>
    </div>
    <div className='w-full h-full flex flex-col justify-center items-center my-[5rem] sm-max:my-[5rem]'>
      <p className='font-Marcellus text-4xl mb-3 sm-max:text-center'>Curate Your Very Own India Adventure</p>
      <p className='text-center font-light text-xl px-[25rem] sm-max:px-[1rem] md-max:px-[2rem]'>Create a fully customized day-by-day itinerary and discover the hidden gems of India. Select your destinations, the date of your trip and the local attractions you want to discover. Planning your trip has never been so easy!</p>
    </div>
    </>
  )
}

export default TripPlanner