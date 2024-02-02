import React from 'react'
import TripPlanner from '../../container/TripPplanner/TripPlanner'
import TrendingDestination from '../../components/TrendingDestination/TrendingDestination'
import Activities from '../../components/Activities/Activities'
import Map from '../../components/Map/Map'

const PlanUrTrip = () => {
  return (
    <div>
        <TripPlanner/>
        <TrendingDestination/>
       <Map/>
        <Activities/>
    </div>
  )
}

export default PlanUrTrip