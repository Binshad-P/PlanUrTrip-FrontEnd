import React, { useEffect, useState } from "react";

import img1 from "../../assets/images/sd.jpg";
import Weather from "../../components/Weather/Weather";
const HeroSingleDestination = () => {
  
  
  return (
    <div className="relative h-[450px]">
      <img
        src={img1}
        className="object-cover object-top  bg-top w-full h-[450px] brightness-90"
      />
      <div className="h-full w-full bg-black absolute top-0 opacity-30">

      </div>

      <div className="flex justify-between w-[80%] absolute bottom-[20%] left-[10%]">
        <div className="text-white ">
          <p className="text-5xl font-extrabold font-Marcellus">varanasi</p>
          <p>Sacred City</p>
        </div>
        <div>
          <Weather/>
        </div>
      </div>
    </div>
  );
};

export default HeroSingleDestination;
