import React from "react";

import { FaMapMarkerAlt } from "react-icons/fa";
import "./RecomendedDestiantion.css";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/images/bg-img2.png";
import img2 from "../../assets/images/bg-img3.png";
import img3 from "../../assets/images/bg-img4.png";
import img4 from "../../assets/images/bg-img5.png";
import { Link } from "react-router-dom";
const RecomendedDestination = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-12  bg-[#e6e4e442] sm-max:h-full ">
      <p className="font-Marcellus text-3xl sm-max:mt-[2rem]">Recomended Destinations</p>
      <div>
        <div class="flex gap-5 sm-max:flex-col md-max:flex-wrap md-max:px-[1rem] md-max:gap-[2rem]">
          <div>
            <label for="radio-card-1" class="radio-card relative rounded-xl">
              <input
                type="radio"
                name="radio-card"
                id="radio-card-1"
                className="radio_Button"
              />
              <div class="card-content-wrapper">
                <span class="check-icon"></span>
                <div class="card-content ">
                  <div className="relative">
                    <img
                      src={img2}
                      className="rounded-xl object-cover h-[200px] sm-max:w-[350px] "
                    />
                    <p className="flex items-center gap-2 absolute bottom-4 left-2 text-white">
                      <FaMapMarkerAlt />
                      Kerala
                    </p>
                  </div>
                </div>
              </div>
            </label>
          </div>

          <div>
            <label for="radio-card-2" class="radio-card relative rounded-xl">
              <input
                type="radio"
                name="radio-card"
                id="radio-card-2"
                className="radio_Button"
              />
              <div class="card-content-wrapper">
                <span class="check-icon"></span>
                <div class="card-content ">
                  <div className="relative">
                    <img
                      src={img3}
                      className="rounded-xl object-cover h-[200px]"
                    />
                    <p className="flex items-center gap-2 absolute bottom-4 left-2 text-white">
                      <FaMapMarkerAlt />
                      Varanasi
                    </p>
                  </div>
                </div>
              </div>
            </label>
          </div>
          <div>
            <label for="radio-card-3" class="radio-card relative rounded-xl">
              <input
                type="radio"
                name="radio-card"
                id="radio-card-3"
                className="radio_Button"
              />
              <div class="card-content-wrapper">
                <span class="check-icon"></span>
                <div class="card-content ">
                  <div className="relative">
                    <img
                      src={img4}
                      className="rounded-xl object-cover h-[200px]"
                    />
                    <p className="flex items-center gap-2 absolute bottom-4 left-2 text-white">
                      <FaMapMarkerAlt />
                      Rajasthan
                    </p>
                  </div>
                </div>
              </div>
            </label>
          </div>

          <div>
            <label for="radio-card-4" class="radio-card relative rounded-xl">
              <input
                type="radio"
                name="radio-card"
                id="radio-card-4"
                className="radio_Button"
              />
              <div class="card-content-wrapper">
                <span class="check-icon"></span>
                <div class="card-content ">
                  <div className="relative">
                    <img
                      src={img1}
                      className="rounded-xl object-cover h-[200px]"
                    />
                    <p className="flex items-center gap-2 absolute bottom-4 left-2 text-white">
                      <FaMapMarkerAlt />
                      Munnar
                    </p>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <Link to={"/SpecialActivities"}>
        <button className="bg-[#8DD3BB] text-black flex items-center gap-3 px-7 py-2 font-semibold  rounded-md sm-max:mb-[2rem] ">
          Next <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default RecomendedDestination;
