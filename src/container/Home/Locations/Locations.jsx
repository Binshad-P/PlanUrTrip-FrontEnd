import React from "react";

import L_img1 from "../../../assets/images/L_img1.png";
import L_img2 from "../../../assets/images/L_img2.png";
import L_img3 from "../../../assets/images/L_img3.png";
import L_img4 from "../../../assets/images/L_img4.png";
import L_img5 from "../../../assets/images/L_img1.png";

import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
const Locations = () => {
  return (
    <div className="bg-[#F0F2F2] mt-[5.5rem] sm-max:mt-[2rem] md-max:mt-[3rem]">
      <div className="mx-[5rem] pt-[75px] sm-max:mx-[1rem] md-max:mx-[3rem] md-max:pt-[50px]">
        <div className="flex flex-col items-center">
          <h1 className="text-[32px] mb-4 font-Marcellus sm-max:text-center">
            Top Locations to Explore
          </h1>
          <p className="max-w-[33rem] text-center font-light mb-10">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, tool to get you to your destination.
          </p>
        </div>
        <div className="flex flex-wrap gap-[28px] lg:gap-[47px] md-max:gap-[35px] ">
          <div className="relative  w-[27.11rem] h-[26.25rem] lg:w-[26.33rem] md-max:w-[19.88rem] sm-max:w-[24rem]">
            <img
              className="w-[27.11rem] lg:w-[26.33rem] md-max:w-[19.88rem] h-[26.25rem] object-cover rounded-md sm-max:w-[24rem]"
              src={L_img1}
            />
            <div className="absolute bottom-7 w-[100%] px-[25px] flex justify-between">
              <div>
                <h1 className="text-white text-2xl font-medium">Melbourne</h1>
                <p className="text-white text-sm font-light">
                  An amazing journey
                </p>
              </div>
              <div>
                <Link to={"/SingleLocation"}>
                  {" "}
                  <button className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white opacity-25 hover:opacity-100 hover:-rotate-45 ease-in duration-300 ">
                    <BsArrowRightShort size={25} className="" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-[27.11rem] lg:w-[26.33rem] md-max:w-[19.88rem] h-[26.25rem] sm-max:w-[24rem]">
            <img
              className="w-[27.11rem] lg:w-[26.33rem] md-max:w-[19.88rem] h-[26.25rem] object-cover rounded-md sm-max:w-[24rem]"
              src={L_img2}
            />
            <div className="absolute bottom-7 w-[100%] px-[25px] flex justify-between">
              <div>
                <h1 className="text-white text-2xl font-medium">Paris</h1>
                <p className="text-white text-sm font-light">
                  A Paris Adventure
                </p>
              </div>
              <div>
                <Link to={"/SingleLocation"}>
                  {" "}
                  <button className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white opacity-25 hover:opacity-100 hover:-rotate-45 ease-in duration-300 ">
                    <BsArrowRightShort size={25} className="" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-[27.11rem] lg:w-[26.33rem] md-max:w-[19.88rem] h-[26.25rem] sm-max:w-[24rem]">
            <img
              className="w-[27.11rem] lg:w-[26.33rem] md-max:w-[19.88rem] h-[26.25rem] object-cover rounded-md sm-max:w-[24rem]"
              src={L_img3}
            />
            <div className="absolute bottom-7 w-[100%] px-[25px] flex justify-between">
              <div>
                <h1 className="text-white text-2xl font-medium">Melbourne</h1>
                <p className="text-white text-sm font-light">
                  An amazing journey
                </p>
              </div>
              <div>
                <Link to={"/SingleLocation"}>
                  {" "}
                  <button className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white opacity-25 hover:opacity-100 hover:-rotate-45 ease-in duration-300 ">
                    <BsArrowRightShort size={25} className="" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-[27.11rem] lg:w-[26.33rem] md-max:w-[19.88rem] h-[26.25rem] sm-max:w-[24rem]">
            <img
              className="w-[27.11rem] lg:w-[26.33rem] md-max:w-[19.88rem] h-[26.25rem] object-cover rounded-md sm-max:w-[24rem]"
              src={L_img4}
            />
            <div className="absolute bottom-7 w-[100%] px-[25px] flex justify-between">
              <div>
                <h1 className="text-white text-2xl font-medium">Columbia</h1>
                <p className="text-white text-sm font-light">
                  An amazing journey
                </p>
              </div>
              <div>
                <Link to={"/SingleLocation"}>
                  {" "}
                  <button className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white opacity-25 hover:opacity-100 hover:-rotate-45 ease-in duration-300 ">
                    <BsArrowRightShort size={25} className="" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-[27.11rem] lg:w-[26.33rem] md-max:w-[19.88rem] h-[26.25rem] sm-max:w-[24rem]">
            <img
              className="w-[27.11rem] lg:w-[26.33rem] md-max:w-[19.88rem] h-[26.25rem] object-cover rounded-md sm-max:w-[24rem]"
              src={L_img5}
            />
            <div className="absolute bottom-7 w-[100%] px-[25px] flex justify-between">
              <div>
                <h1 className="text-white text-2xl font-medium">Melbourne</h1>
                <p className="text-white text-sm font-light">
                  An amazing journey
                </p>
              </div>
              <div>
                <Link to={"/SingleLocation"}>
                  {" "}
                  <button className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white opacity-25 hover:opacity-100 hover:-rotate-45 ease-in duration-300 ">
                    <BsArrowRightShort size={25} className="" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-[27.11rem] lg:w-[26.33rem] md-max:w-[19.88rem] h-[26.25rem] sm-max:w-[24rem]">
            <img
              className="w-[27.11rem] lg:w-[26.33rem] md-max:w-[19.88rem] h-[26.25rem] object-cover rounded-md sm-max:w-[24rem]"
              src={L_img1}
            />
            <div className="absolute bottom-7 w-[100%] px-[25px] flex justify-between">
              <div>
                <h1 className="text-white text-2xl font-medium">Melbourne</h1>
                <p className="text-white text-sm font-light">
                  An amazing journey
                </p>
              </div>
              <div>
                <Link to={"/SingleLocation"}>
                  {" "}
                  <button className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white opacity-25 hover:opacity-100 hover:-rotate-45 ease-in duration-300 ">
                    <BsArrowRightShort size={25} className="" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
