import React from 'react'
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'
import img1 from '../../assets/images/A_img1.png'
import './SpecialActivities.css'
import { Link } from 'react-router-dom'
const SpecialActivities = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-12  bg-[#e6e4e442] sm-max:h-full">
    <p className="font-Marcellus text-3xl sm-max:mt-[2rem]">Special Activities</p>
    <div>
      <div class="flex gap-5 sm-max:flex-col md-max:flex-wrap md-max:px-[1rem] md-max:gap-[2rem]">
        <div>
          <label for="radio-card-1" class="radio-card relative rounded-xl">
            <input
              type="checkbox"
              name="radio-card"
              id="radio-card-1"
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
                    The Red Sea Adventures
                  </p>
                </div>
              </div>
            </div>
          </label>
        </div>

        <div>
          <label for="radio-card-2" class="radio-card relative rounded-xl">
            <input
              type="checkbox"
              name="radio-card"
              id="radio-card-2"
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
            
                    The Red Sea Adventures
                  </p>
                </div>
              </div>
            </div>
          </label>
        </div>
        <div>
          <label for="radio-card-3" class="radio-card relative rounded-xl">
            <input
              type="checkbox"
              name="radio-card"
              id="radio-card-3"
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
              
                    The Red Sea Adventures
                  </p>
                </div>
              </div>
            </div>
          </label>
        </div>

        <div>
          <label for="radio-card-4" class="radio-card relative rounded-xl">
            <input
              type="checkbox"
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
                   
                  The Red Sea Adventures
                  </p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
    <Link to={'/ReadyToExplore'}> <button className="bg-[#8DD3BB] text-black flex items-center gap-3 px-7 py-2 font-semibold  rounded-md mb-[2rem] ">
      Next <FaArrowRight />
    </button>
    </Link>
  </div>
  )
}

export default SpecialActivities