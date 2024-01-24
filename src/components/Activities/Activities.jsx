import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import A_img1 from "../../assets/images/A_img1.png";
import A_img2 from "../../assets/images/L_img1.png";
import A_img3 from "../../assets/images/TD_img1.png";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

// import required modules
import { Navigation, Pagination, History } from "swiper/modules";
const Activities = () => {
  const swiperRef = useRef();
  return (
    <div className="my-20">
      <div className="mx-[5rem] flex justify-between mb-10">
        <p className="text-4xl font-Marcellus">Special Activities</p>
        <p className="max-w-[33.5rem] md-max:max-w-[20rem] text-end font-light">
          Going somewhere to celebrate this season? Whether you’re going home or
          somewhere to roam, tools to get you to your destination.
        </p>
      </div>
      <div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={10}
          slidesPerView={1.5}
          loop={true}
          centeredSlides={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <img
                className=" object-cover rounded-md w-full h-[550px] "
                src={A_img1}
              />
              <div className="absolute bottom-7 left-7 bg-white opacity-80 p-7 text-start">
                <p className="font-medium text-lg">The Red Sea Adventures</p>
                <p className="max-w-[18.5rem] text-sm font-light my-4">
                  Going somewhere to celebrate this season Whether you’re going
                  home or somewhere to roam, tools to get you to your
                  destination.
                </p>
                <button className="px-[30px] py-[10px] rounded-md bg-black text-white">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className=" object-cover rounded-md w-full h-[550px] "
                src={A_img2}
              />
              <div className="absolute bottom-7 left-7 bg-white opacity-80 p-7 text-start">
                <p className="font-medium text-lg">The Red Sea Adventures</p>
                <p className="max-w-[18.5rem] text-sm font-light my-4">
                  Going somewhere to celebrate this season Whether you’re going
                  home or somewhere to roam, tools to get you to your
                  destination.
                </p>
                <button className="px-[30px] py-[10px] rounded-md bg-black text-white">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className=" object-cover rounded-md w-full h-[550px] "
                src={A_img3}
              />
              <div className="absolute bottom-7 left-7 bg-white opacity-80 p-7 text-start">
                <p className="font-medium text-lg">The Red Sea Adventures</p>
                <p className="max-w-[18.5rem] text-sm font-light my-4">
                  Going somewhere to celebrate this season Whether you’re going
                  home or somewhere to roam, tools to get you to your
                  destination.
                </p>
                <button className="px-[30px] py-[10px] rounded-md bg-black text-white">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className=" object-cover rounded-md w-full h-[550px] "
                src={A_img2}
              />
              <div className="absolute bottom-7 left-7 bg-white opacity-80 p-7 text-start">
                <p className="font-medium text-lg">The Red Sea Adventures</p>
                <p className="max-w-[18.5rem] text-sm font-light my-4">
                  Going somewhere to celebrate this season Whether you’re going
                  home or somewhere to roam, tools to get you to your
                  destination.
                </p>
                <button className="px-[30px] py-[10px] rounded-md bg-black text-white">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="button1 bg-[#8DD3BB] w-[50px] h-[50px] rounded-full flex items-center justify-center mr-[20px]"
          type="submit"
          onClick={() => swiperRef.current.slidePrev()}
        >
          <BsArrowLeftShort color="black" size={25} />
        </button>
        <button
          className="button1 bg-[#8DD3BB] w-[50px] h-[50px] rounded-full flex items-center justify-center"
          type="submit"
          onClick={() => swiperRef.current.slideNext()}
        >
          <BsArrowRightShort color="black" size={25} />
        </button>
      </div>
    </div>
  );
};

export default Activities;
