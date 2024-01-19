import React, { useRef } from "react";
import "./Hero.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { TbWorldPin } from "react-icons/tb";
const Hero = () => {
  const slideRef = useRef(null);

  const handleNextClick = () => {
    const items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0].cloneNode(true));
    slideRef.current.removeChild(items[0]);
  };

  const handlePrevClick = () => {
    const items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1].cloneNode(true));
    slideRef.current.removeChild(items[items.length - 1]);
  };
  return (
    <>
     
        <div className="container">
          <div ref={slideRef} className="slide">
            <div className="item bg-img1 bg-center bg-cover rounded-xl brightness-75 ">
              <div className="content">
                <div className="name ">BMW M4 1</div>
                <div className="desc">
                  The 2024 BMW M4 Coupe delivers signature pulse-pounding BMW M
                  performance and aesthetics to match.
                </div>
                <button className="bg-[#8DD3BB] gap-2 flex text-black">
                
                <TbWorldPin size={25} />Create Itinerary
                </button>
              </div>
            </div>
            <div class="item bg-img2 bg-center bg-cover rounded-xl brightness-75">
              <div class="content">
                <div class="name ">Lake Tahoe 2</div>
                <div class="desc">
                  Engineered around Porsche’s iconic 911 engine with unique
                  hybrid technologies and delivering unsurpassed Porsche and
                  hybrid performance,
                </div>
                <button className="bg-[#8DD3BB] gap-2 flex text-black">
                <TbWorldPin size={25} /> Create Itinerary
                </button>
              </div>
            </div>
            <div className="item bg-img3 bg-center bg-cover rounded-xl brightness-75">
              <div className="content">
                <div className="name ">BMW M4 3</div>
                <div className="desc">
                  The 2024 BMW M4 Coupe delivers signature pulse-pounding BMW M
                  performance and aesthetics to match.
                </div>
                <button className="bg-[#8DD3BB] flex gap-2 text-black">
                <TbWorldPin size={25} /> Create Itinerary
                </button>
              </div>
            </div>
            <div className="item bg-img4 bg-center bg-cover rounded-xl brightness-75">
              <div className="content">
                <div className="name ">BMW M4 4</div>
                <div className="desc">
                  The 2024 BMW M4 Coupe delivers signature pulse-pounding BMW M
                  performance and aesthetics to match.
                </div>
                <button className="bg-[#8DD3BB] flex  gap-2 text-black">
                <TbWorldPin size={25} /> Create Itinerary
                </button>
              </div>
            </div>
            <div className="item bg-img5 bg-center bg-cover rounded-xl brightness-75">
              <div className="content">
                <div className="name ">BMW M4 5</div>
                <div className="name">BMW M4 5</div>
                <div className="desc">
                  The 2024 BMW M4 Coupe delivers signature pulse-pounding BMW M
                  performance and aesthetics to match.
                </div>
                <button className="bg-[#8DD3BB]  flex gap-2 text-black">
                <TbWorldPin size={25} />  Create Itinerary
                </button>
              </div>
            </div>

            {/* Repeat the same pattern for other items */}
          </div>
          <div className="button ">
            <button
              className="prev bg-white w-[50px] h-[50px] rounded-full  relative  mr-[20px] opacity-20"
              title="Previous"
              onClick={handlePrevClick}
            >
              <FaArrowLeft className="absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%]" />
            </button>

            <button
              className="next bg-white w-[50px] h-[50px] rounded-full relative opacity-20 "
              title="Next"
              onClick={handleNextClick}
            >
              <FaArrowRight className="absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%]" />
            </button>
          </div>
        </div>
    
    </>
  );
};

export default Hero;
