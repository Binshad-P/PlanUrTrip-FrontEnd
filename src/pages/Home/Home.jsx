import React from 'react'

import TrendingDestination from '../../components/TrendingDestination/TrendingDestination'

import Activities from '../../components/Activities/Activities'
import Banner from '../../components/Banner/Banner'

import Hero from '../../container/Home/Hero/Hero'
import Locations from '../../container/Home/Locations/Locations'



const Home = () => {
  return (
    <div >
     
        <Hero/>
    
        <TrendingDestination/>
        
        <Locations/>
        <Activities/>
        <Banner/>

    </div>
  )
}

export default Home