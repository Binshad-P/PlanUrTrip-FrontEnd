import React from "react";
import TD_img1 from "../../assets/images/TD_img1.png";
import TD_img2 from "../../assets/images/TD_img2.png";
import TD_img3 from "../../assets/images/TD_img3.png";

import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules

const TrendingDestination = () => {
  const swiperRef = useRef();
  return (
    <div className="flex flex-col gap-10 my-[5rem] sm-max:my-[2rem] md-max:my-[3rem]">
      <div className="sm-max:mx-1 mx-[5rem] md-max:mx-[3rem] flex justify-between">
        <div>
          <h1 className="text-3xl mb-[20px] font-Marcellus sm-max:text-center">Trending Destinations</h1>
          <p className=" text-[#6b7474] max-w-[32.5rem] sm-max:text-center sm-max:px-2 ">
            Going somewhere to celebrate this season? Whether you’re going home
            or
            
            somewhere to roam, tools to get you to your destination.
          </p>
        </div>
        <div className="flex align-center sm-max:hidden">
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

      <div className="ml-[5rem] sm-max:ml-[1rem] md-max:ml-[3rem]">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={3.5}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300:{
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView:2.5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView:3.5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="rounded-lg w-full h-full object-cover relative sm-max:h-[150px] " src={TD_img1} />
            <p className="absolute bottom-[15px] text-white left-[20px] text-2xl sm-max:text-xl">Bali, Ireland</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg w-full h-full object-cover relative sm-max:h-[150px]" src={TD_img2} />
            <p className="absolute bottom-[15px] text-white left-[20px] text-2xl sm-max:text-xl">Bali, Ireland</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg w-full h-full object-cover relative sm-max:h-[150px]" src={TD_img3} />
            <p className="absolute bottom-[15px] text-white left-[20px] text-2xl sm-max:text-xl">Bali, Ireland</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg w-full h-full object-cover relative sm-max:h-[150px]" src={TD_img1} />
            <p className="absolute bottom-[15px] text-white left-[20px] text-2xl sm-max:text-xl">Bali, Ireland</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg w-full h-full object-cover relative sm-max:h-[150px]" src={TD_img2} />
            <p className="absolute bottom-[15px] text-white left-[20px] text-2xl sm-max:text-xl">Bali, Ireland</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg w-full h-full object-cover relative sm-max:h-[150px]" src={TD_img3} />
            <p className="absolute bottom-[15px] text-white left-[20px] text-2xl sm-max:text-xl">Bali, Ireland</p> 
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="sm-max:flex sm-max:align-center sm-max:justify-center md-max:hidden lg:hidden sm-max:block">
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

export default TrendingDestination;
