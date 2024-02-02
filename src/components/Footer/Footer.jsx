import React from "react";

import {
  FaFacebook,
  FaSquareXTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="bg-[#022A3A] px-[5rem] py-[5rem] flex justify-between text-[#D5D9DB] mt-[8rem] md-max:mt-[4rem]  sm-max:px-[1rem] md-max:flex-col md-max:gap-6 md-max:px-[3rem] ">
      <div>
        <p className="text-xl mb-5 font-bold sm-max:mb-1">Demo..</p>
        <hr className="lg:hidden md-max:block sm-max:block opacity-15"/>
        <p className="max-w-[20rem] mb-3">
          Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec
          interdum habitant Porttitor augue enim.{" "}
        </p>
        <div className="flex gap-3">
          <FaFacebook size={25} />
          <FaInstagram size={25} />
          <FaLinkedin size={25} />
          <FaSquareXTwitter size={25} />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-xl mb-5 font-medium sm-max:mb-1">Pages</p>
        <hr className="lg:hidden md-max:block sm-max:block opacity-15"/>
        <div className="flex flex-col gap-3">
        <p>Home</p>
        <p>About Us</p>
        <p>Plan Your Trip</p>
        <p>Destinations</p>
        </div>
        
      </div>
      <div>
        <p className="text-xl mb-5 font-medium sm-max:mb-1">Support</p>
        <hr className="lg:hidden md-max:block sm-max:block opacity-15"/>
        <div className="flex flex-col gap-3">
        <p>Help Center</p>
        <p>Server Status</p>
        <p>Report A bug</p>
        <p>Chat Support</p>
        </div>
      </div>
      <div>
        <p className="text-xl mb-5 font-medium sm-max:mb-1">Contact Us</p>
        <hr className="lg:hidden md-max:block sm-max:block opacity-15"/>
        <div className="flex flex-col gap-3">
        <p className="flex items-center gap-2">
          <CiMail />
          support@demo.com
        </p>
        <p className="flex items-center gap-2">
          <FiPhone />
          +91 987654321
        </p>
        <p className="flex items-center gap-2">
          <IoLocationOutline />
          794 Mcallister St San Francisco, 94102
        </p>
        </div>
      </div>
      <div>
        <p className="text-xl mb-5 font-medium sm-max:mb-1">Craft Your Journey</p>
        <hr className="lg:hidden md-max:block sm-max:block opacity-15"/>
        <div className="flex flex-col gap-3">
        <p className="max-w-[20rem]">
          Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec
          interdum.
        </p>
        <button className="px-[30px] py-[10px] rounded-md bg-black text-[#D5D9DB] font-semibold">
          Create Itinerary
        </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
