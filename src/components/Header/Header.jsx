import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="header_Section w-full   top-0 fixed z-40">
      <div className="sm-max:mx-1 mx-[5rem]  flex h-[90px] items-center justify-between	text-white">
        <div className="logo">
          <h3>Demo.</h3>
        </div>
        <ul className="gap-10 hidden lg:flex">
         <Link to={'/'}><li>Home</li></Link> 
          <li>About Us</li>
          <Link to={'/PlanYourTrip'}><li>Plan Your Trip</li></Link>
          <li>Destination</li>
        </ul>
        <div className="flex items-center gap-6">
          <button>Login</button>
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
        <li>Home</li>
        <li>About Us</li>
        <li>Plan Your Trip</li>
        <li>Destination</li>
      </ul>
    </div>
  );
};

export default Header;
