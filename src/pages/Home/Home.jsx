import React from 'react'
import Hero from '../../container/Hero/Hero'
import TrendingDestination from '../../components/TrendingDestination/TrendingDestination'
import Locations from '../../container/Locations/Locations'
import Activities from '../../components/Activities/Activities'
import Banner from '../../components/Banner/Banner'
const Home = () => {
  return (
    <div>
        <Hero/>
        <TrendingDestination/>
        <Locations/>
        <Activities/>
        <Banner/>
    </div>
  )
}

export default Home