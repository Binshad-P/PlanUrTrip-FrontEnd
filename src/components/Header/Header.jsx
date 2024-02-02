import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const Header = () => {
  const [click, setClick] = useState(false);
  const location = useLocation()
  return (
    <div className="header_Section w-full   top-0 fixed z-40">
      <div className={location.pathname=="/ReadyToExplore"?"text-black sm-max:mx-2 mx-[5rem]  flex h-[90px] items-center justify-between md-max:mx-[3rem]":"sm-max:mx-[1rem] mx-[5rem]  flex h-[90px] items-center justify-between	text-white md-max:mx-[3rem]"}>
        <div className="logo">
          <h3>Demo.</h3>
        </div>
        <ul className="gap-10 hidden lg:flex">
         <Link to={'/'}><li>Home</li></Link> 
          <Link  to={'/About'}><li>About Us</li></Link>
          <Link to={'/PlanYourTrip'}><li>Plan Your Trip</li></Link>
          <Link to={'/SingleLocation'}><li>Destination</li></Link>
        </ul>
        <div className="flex items-center gap-6">
         <Link to={'/Login'}><button>Login</button></Link> 
          {click ? (
            <IoClose className="lg:hidden" onClick={() => setClick(!click)} />
          ) : (
            <IoMenu className="lg:hidden" onClick={() => setClick(!click)} />
          )}
        </div>
      </div>
      <ul
        className={`bg-white fixed z-50 right-0 top-0 duration-500 ${
          click ? "translate-x-0" : "translate-x-full "
        }`}
      >
        <Link to={'/'}><li>Home</li></Link>
       <Link to={'/About'}><li>About Us</li></Link> 
        <Link to={'/PlanYourTrip'}><li>Plan Your Trip</li></Link>
        <Link to={'/SingleLocation'}><li>Destination</li></Link>
      </ul>
    </div>
  );
};

export default Header;
