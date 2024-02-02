import React from "react";
import img1 from "../../assets/images/cover_img.png";
const Banner = () => {
  return (
    <div className="mx-[5rem] relative sm-max:mx-[1rem] md-max:mx-[3rem]">
      <div>
        <img className="w-full md-max:h-[200px]" src={img1} />
      </div>
      <div className=" absolute flex top-[30%] md-max:top-[15%] mx-14 md-max:mx-7  justify-between w-[92%] items-center sm-max:flex-col sm-max:w-[85%] ">
        <div>
          <p className="md-max:max-w-[20rem] md-max:text-3xl text-5xl max-w-[28rem] font-Marcellus mb-7 md-max:mb-1 sm-max:text-2xl sm-max:text-center" >Plan your trip with travel expert</p>
          <p className="font-light max-w-[32rem] md-max:max-w-[25rem] sm-max:hidden">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, tools to get you to your destination.
          </p>
        </div>
        <button className="w-[170px] h-[50px] bg-black text-white rounded-md">Create Itinerary</button>
      </div>
    </div>
  );
};

export default Banner;
