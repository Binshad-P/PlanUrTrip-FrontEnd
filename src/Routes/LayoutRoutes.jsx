import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import PlanUrTrip from "../pages/PlanUrTrip/PlanUrTrip";
import MultiStepForm from "../container/CreateItinerary/Itinerary";

import Login from "../pages/Login/Login";
import OTP from "../container/OTP/OTP";
import SingleLocation from "../pages/SingleLocation/SingleLocation";
import SignUp from "../pages/SignUp/SignUp";
import Footer from "../components/Footer/Footer";
import About from "../pages/About/About";
import RecomendedDestination from "../container/CreateItinerary/RecomendedDestination";
import SpecialActivities from "../container/CreateItinerary/SpecialActivities";
import FinalItinarary from "../container/FinalItinarary/FinalItinarary";

const LayoutRoutes = () => {
  const pathname = window.location.pathname
  const routes = ['/SignUp','/Login','/Itinerary','/RecomendedDestination','/SpecialActivities']
  return (
    <div>
      <Router>
      {!routes.includes(pathname) && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/PlanYourTrip" element={<PlanUrTrip />} />
          <Route path="/Itinerary" element={<MultiStepForm />} />
          <Route path="/SingleLocation" element={<SingleLocation />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/RecomendedDestination" element={<RecomendedDestination/>}/>
          <Route path="/SpecialActivities" element={<SpecialActivities/>}/>
          <Route path="/ReadyToExplore" element={<FinalItinarary/>}/>
        </Routes>
        {!routes.includes(pathname) && <Footer />}
      </Router>
    </div>
  );
};

export default LayoutRoutes;
