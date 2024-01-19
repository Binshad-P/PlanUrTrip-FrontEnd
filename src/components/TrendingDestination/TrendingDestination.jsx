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
import { Navigation } from "swiper/modules";
const TrendingDestination = () => {
  const swiperRef = useRef();
  return (
    <div className="flex flex-col gap-10 my-[5rem] ">
      <div className="sm-max:mx-1 mx-[5rem]  flex justify-between">
        <div>
          <h1 className="text-3xl mb-[20px] font-Marcellus">Trending Destinations</h1>
          <p className=" text-[#6b7474] max-w-[32.5rem]">
            Going somewhere to celebrate this season? Whether you’re going home
            or
            
            somewhere to roam, tools to get you to your destination.
          </p>
        </div>
        <div className="flex align-center">
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

      <div className="ml-[5rem]">
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
            640: {
              slidesPerView: 2,
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
            <img className="rounded-lg w-full h-full object-cover relative" src={TD_img1} />
            <p className="absolute bottom-[15px] text-white left-[20px] text-2xl ">Bali, Ireland</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg w-full h-full object-cover relative" src={TD_img2} />
            <p className="absolute bottom-[15px] text-white left-[20px] text-2xl ">Bali, Ireland</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg w-full h-full object-cover relative" src={TD_img3} />
            <p className="absolute bottom-[15px] text-white left-[20px] text-2xl">Bali, Ireland</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg w-full h-full object-cover relative" src={TD_img1} />
            <p className="absolute bottom-[15px] text-white left-[20px] text-2xl">Bali, Ireland</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg w-full h-full object-cover relative" src={TD_img2} />
            <p className="absolute bottom-[15px] text-white left-[20px] text-2xl">Bali, Ireland</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg w-full h-full object-cover relative" src={TD_img3} />
            <p className="absolute bottom-[15px] text-white left-[20px] text-2xl">Bali, Ireland</p> 
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingDestination;
