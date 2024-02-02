import React from "react";

import { FaArrowRight } from "react-icons/fa6";
const HeroAbout = () => {
  return (
    <>
      <div className="relative h-[450px] bg-About bg-cover sm-max:h-[350px] md-max:h-[400px]">
        <div className="h-full w-full bg-black absolute top-0 opacity-30"></div>

        <div className="absolute text-white h-[450px] w-full flex flex-col justify-center items-center sm-max:h-[350px] md-max:h-[400px]">
          <p className="font-Marcellus text-5xl text-white mb-5">About Us</p>
          <p className="max-w-[25rem] text-center">
            Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec
            interdum habitant.
          </p>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center my-[5rem] sm-max:my-[2rem] md-max:my-[3rem]">
        <p className="font-Marcellus text-4xl mb-3 sm-max:text-center">
          Discover the world with us
        </p>
        <p className="text-center font-light text-xl px-[25rem] sm-max:px-[1rem] md-max:px-[2rem] sm-max:text-center">
          
          Would you explore nature paradise in the world, let’s find the best
          destination in world with us, Would you explore nature paradise in the
          world, let’s find the best destination in world with us. Would you
          explore nature paradise in the world, let’s find the best destination
          in world with us, Would you explore nature paradise in the world,
          let’s find the best destination in world with us.
        </p>
      </div>
      <div className="pt-[5rem] px-[5rem] sm-max:px-[1rem] sm-max:pt-[1rem] md-max:pt-[3rem] md-max:px-[3rem]">
        <div className="w-full flex justify-between items-center sm-max:flex-col md-max:flex-col">
          <div className="bg-Aboutus bg-cover h-[500px] w-[600px] rounded-xl sm-max:w-[360px] sm-max:bg-contain sm-max:bg-no-repeat sm-max:h-[240px] md-max:w-[675px]"></div>
          <div className=" flex flex-col justify-center sm-max:items-center md-max:items-center">
            <p className="text-2xl font-medium mb-5 sm-max:text-center mt-5">
              Lorem ipsum dolor sit, amet consectetur
            </p>
            <p className="max-w-[40rem] mb-5 font-light sm-max:text-justify sm-max:mb-1 md-max:max-w-[42rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus, inventore illum amet facilis, voluptas fuga porro
              deleniti ad sequi praesentium eligendi laudantium dicta illo
              deserunt eius! Quod facere nulla ex! world with us.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit assumenda eius sapiente animi dolores, laudantium
              numquam. Quos, deserunt tempora nemo ad, nesciunt porro quia,
              architecto quibusdam alias reprehenderit possimus. Nesciunt?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit assumenda eius sapiente animi dolores, laudantium
              numquam. Quos, deserunt tempora nemo ad, nesciunt porro quia,
              architecto quibusdam alias reprehenderit possimus. Nesciunt?
            </p>
            <button className="w-[170px] h-[50px] font-bold bg-[#022A3A] text-white rounded-md">
              Create Itinerary
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[5rem] sm-max:mt-[3rem] md-max:gap-10">
          <p className="font-bold text-4xl font-Marcellus mb-[5rem] sm-max:text-center sm-max:mb-[1rem] md-max:mb-[2rem]">
            Read Before You Travel
          </p>
          <div className="flex justify-around gap-[3rem] sm-max:flex-col sm-max:gap-[1rem] ">
            <div className="bg-img1 bg-cover h-[250px] w-[251px] flex rounded-3xl sm-max:w-[360px] md-max:w-[450px]"></div>
            <div className="flex flex-col justify-center sm-max:items-center  ">
              <p className="font-bold text-2xl sm-max:text-center">NUSA PENIDA ISLAND GUIDE</p>
              <p className="max-w-[55rem] mb-5 font-light sm-max:text-justify sm-max:mb-1">
              
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                optio odio ad voluptatibus. Quas, ex. Dolorem beatae a sit!
                Omnis delectus reiciendis aperiam excepturi dolorem odio ipsum
                sapiente sequi quidem.The beautiful, exotic Nusa Penida island
                lies just 25 kilometers from Bali, the most famous tourist
                destination in Indonesia.
              </p>
              <button className="flex border gap-3 items-center justify-center border-black w-[150px] h-[40px] text-black ">
                Read More
                <FaArrowRight color="" />
              </button>
            </div>
          </div>
          <div className="flex justify-around gap-[3rem] sm-max:flex-col-reverse sm-max:gap-[1rem]">
            <div className="flex flex-col justify-center sm-max:items-center">
              <p className="font-bold text-2xl sm-max:text-center">
                17 BEST WATERFALLS IN INDONESIA
              </p>
              <p className="max-w-[55rem] mb-5 font-light sm-max:text-justify">
               
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                optio odio ad voluptatibus. Quas, ex. Dolorem beatae a sit!
                Omnis delectus reiciendis aperiam excepturi dolorem odio ipsum
                sapiente sequi quidem.The beautiful, exotic Nusa Penida island
                lies just 25 kilometers from Bali, the most famous tourist
                destination in Indonesia.
              </p>
              <button className="flex border gap-3 items-center justify-center border-black w-[150px] h-[40px] text-black">
                Read More
                <FaArrowRight color="" />
              </button>
            </div>
            <div className="bg-img2 bg-cover h-[250px] w-[251px] rounded-3xl sm-max:w-[360px] mt-[1rem] md-max:w-[450px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAbout;
