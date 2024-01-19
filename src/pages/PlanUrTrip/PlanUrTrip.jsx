import React from 'react'
import TripPlanner from '../../container/TripPplanner/TripPlanner'
import TrendingDestination from '../../components/TrendingDestination/TrendingDestination'
import Activities from '../../components/Activities/Activities'

const PlanUrTrip = () => {
  return (
    <div>
        <TripPlanner/>
        <TrendingDestination/>
        <Activities/>
    </div>
  )
}

export default PlanUrTrip