import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../pages/Home/Home'
import PlanUrTrip from '../pages/PlanUrTrip/PlanUrTrip'
import MultiStepForm from '../container/Itinerary/Itinerary'

import Login from '../pages/Login/Login'
import OTP from '../container/OTP/OTP'
import SingleLocation from '../pages/SingleLocation/SingleLocation'
import SignUp from '../pages/SignUp/SignUp'
const LayoutRoutes = () => {
  return (
    <div>
        <Router>
            <Header/>
            <Routes>
                <Route path='/'element={<Home/>}/>
                <Route path='/SignUp' element={<SignUp/>}/>
                <Route path='/otp' element={<OTP/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/PlanYourTrip' element={<PlanUrTrip/>}/>
                <Route path='/Itinerary' element={<MultiStepForm/>}/>
                <Route path='/SingleLocation' element={<SingleLocation/>}/>
               
            </Routes>

        </Router>
    </div>
  )
}

export default LayoutRoutes