import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../pages/Home/Home'
import PlanUrTrip from '../pages/PlanUrTrip/PlanUrTrip'
import MultiStepForm from '../container/Itinerary/Itinerary'
const LayoutRoutes = () => {
  return (
    <div>
        <Router>
            <Header/>
            <Routes>
                <Route path='/'element={<Home/>}/>
                <Route path='/PlanYourTrip' element={<PlanUrTrip/>}/>
                <Route path='/Itinerary' element={<MultiStepForm/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default LayoutRoutes