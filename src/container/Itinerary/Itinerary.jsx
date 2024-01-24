import React, { useState } from "react";

import { FaArrowRight } from "react-icons/fa";
const MultiStepForm = () => {
  const steps = ["Name", "Select Place", "Date"];


  const [tab, setTab] = useState(0);

  const [duration, setDuration] = useState(0);

  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);



  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="h-[100vh]">
      {currentStep === 1 && (
        <div className="bg-itinerary bg-cover w-full h-full">
          <div className="flex flex-col w-full h-full justify-center items-center gap-10">
            <div className="flex justify-between w-[750px] sm-max:w-[400px] ">
              {steps?.map((step, i) => (
                <div
                  key={i}
                  className={`step-item ${currentStep === i + 1 && "active"} 
                ${(i + 1 < currentStep || complete) && "complete"}`}>
                  <div className="step " onClick={()=>setCurrentStep(i+1)}>{i + 1}</div>
                  <p className="text-white">{step}</p>
                </div>
              ))}
            </div>
            <label className="font-Marcellus text-3xl text-white">
              Personalise your trip
            </label>
            <input
              className="py-[20px] px-[120px] text-center text-white placeholder:text-white rounded-md  outline-none border-none focus:ring-0 bg-[#ffffff48] sm-max:px-[70px] "
              type="text"
              name="TripName"
              placeholder="Enter your trip’s name"
            />
            <div className="bg-[#8DD3BB] flex text-black gap-3 items-center py-3 px-[30px] outline-none">
              <button
                className="flex items-center gap-5"
                onClick={() => {
                  currentStep === steps.length
                    ? setComplete(true)
                    : setCurrentStep((prev) => prev + 1);
                  // setStep((prevStep) => prevStep + 1);
                }}
              >
                {currentStep === steps.length
                  ? "Generate Trip"
                  : `save&continue`}
                {currentStep < steps.length ? <FaArrowRight /> : ""}
              </button>
              {/* {step > 1 && <button className='bg-[#8DD3BB] flex text-black gap-3 items-center py-3 px-[30px]' onClick={handlePrev}>Previous</button>} */}
            </div>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className="bg-itinerary bg-cover w-full h-full">
          <div className="flex flex-col w-full h-full justify-center items-center gap-10">
            <div className="flex justify-between  w-[750px] sm-max:w-[400px]">
              {steps?.map((step, i) => (
                <div
                  key={i}
                  className={`step-item ${currentStep === i + 1 && "active"} 
                ${(i + 1 < currentStep || complete) && "complete"}
                `}
                >
                  <div className="step" onClick={()=>setCurrentStep(i+1)}>{i + 1}</div>
                  <p className="text-white">{step}</p>
                </div>
              ))}
            </div>
            <p className="font-Marcellus text-3xl text-white">
              Select trip Mode
            </p>
            <div className="flex bg-[#ffffff48] sm-max:px-[10px] rounded-lg">
              <div
                className={`flex flex-col items-center justify-center px-20 py-10  cursor-pointer sm-max:px-2 ${
                  tab == 1 ? "text-[#8DD3BB]" : "text-white"
                }`}
                onClick={() => setTab(1)}
                tabIndex="0"
              >
                <p className="  text-xl font-semibold">Dynamic</p>
                <p className=" max-w-[10rem] text-center">
                  Frequent Change Of Accomodation
                </p>
              </div>
              <div className="w-[2px] h-[100px] bg-white mt-[30px]"></div>
              <div
                className={`flex flex-col items-center justify-center px-20 py-10  cursor-pointer sm-max:px-3 ${
                  tab == 2 ? "text-[#8DD3BB]" : "text-white"
                }`}
                onClick={() => setTab(2)}
                tabIndex="0"
              >
                <p className="text-xl font-semibold">Relaxed</p>
                <p className=" max-w-[10rem] text-center">
                  Move Less, Stay Longer In One Place
                </p>
              </div>
            </div>
            {(tab === 1 || tab === 0) && (
              <div className="flex  bg-[#ffffff48] rounded-lg  sm-max:px-[20px]">
                <div
                  className={`flex flex-col items-center justify-center px-16 py-10 sm-max:px-5 ${
                    duration == 1 ? "text-[#8DD3BB]" : "text-white"
                  }`}
                  onClick={() => setDuration(1)}
                  tabIndex="0"
                >
                  <p className=" text-xl font-semibold">Short</p>
                  <p className="">3-5 Days</p>
                </div>
                <div className="w-[2px] h-[100px] bg-white mt-[15px]"></div>
                <div
                  div
                  className={`flex flex-col items-center justify-center px-16 py-10 sm-max:px-5 ${
                    duration == 2 ? "text-[#8DD3BB]" : "text-white"
                  }`}
                  onClick={() => setDuration(2)}
                  tabIndex="0"
                >
                  <p className=" text-xl font-semibold">MidSize</p>
                  <p className="">6-9 Days</p>
                </div>
                <div className="w-[2px] h-[100px] bg-white mt-[15px]"></div>
                <div
                  div
                  className={`flex flex-col items-center justify-center px-16 py-10 sm-max:px-5 ${
                    duration == 3 ? "text-[#8DD3BB]" : "text-white"
                  }`}
                  onClick={() => setDuration(3)}
                  tabIndex="0"
                >
                  <p className=" text-xl font-semibold">Long</p>
                  <p className="">10-16 Days</p>
                </div>
              </div>
            )}
            {tab === 2 && (
              <div className="flex  bg-[#ffffff48] sm-max:px-[20px] rounded-lg">
                <div
                  div
                  className={`flex flex-col items-center justify-center px-16 py-10 sm-max:px-5 ${
                    duration == 4 ? "text-[#8DD3BB]" : "text-white"
                  }`}
                  onClick={() => setDuration(4)}
                  tabIndex="0"
                >
                  <p className=" text-xl font-semibold">MidSize</p>
                  <p className="">6-9 Days</p>
                </div>
                <div className="w-[2px] h-[100px] bg-white mt-[15px]"></div>
                <div
                  div
                  className={`flex flex-col items-center justify-center px-16 py-10 sm-max:px-5 ${
                    duration == 5 ? "text-[#8DD3BB]" : "text-white"
                  }`}
                  onClick={() => setDuration(5)}
                  tabIndex="0"
                >
                  <p className=" text-xl font-semibold">Long</p>
                  <p className="">10-16 Days</p>
                </div>
              </div>
            )}
            <div className="bg-[#8DD3BB] flex text-black gap-3 items-center py-3 px-[30px] outline-none">
              <button
                className="flex items-center gap-5"
                onClick={() => {
                  currentStep === steps.length
                    ? setComplete(true)
                    : setCurrentStep((prev) => prev + 1);
                  // setStep((prevStep) => prevStep + 1);
                }}
              >
                {currentStep === steps.length
                  ? "Generate Trip"
                  : `save&continue`}
                {currentStep < steps.length ? <FaArrowRight /> : ""}
              </button>
              {/* {step > 1 && <button className='bg-[#8DD3BB] flex text-black gap-3 items-center py-3 px-[30px]' onClick={handlePrev}>Previous</button>} */}
            </div>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="bg-itinerary bg-cover w-full h-full">
          <div className="flex flex-col w-full h-full justify-center items-center gap-10">
            <div className="flex justify-between  w-[750px] sm-max:w-[400px]">
              {steps?.map((step, i) => (
                <div
                  key={i}
                  className={`step-item ${currentStep === i + 1 && "active"} 
                ${(i + 1 < currentStep || complete) && "complete"}
                `}
                >
                  <div className="step" onClick={()=>setCurrentStep(i+1)}>{i + 1}</div>
                  <p className="text-white">{step}</p>
                </div>
              ))}
            </div>
            <label className="font-Marcellus text-3xl text-white">
              Your trip date
            </label>
            <input
              className="py-[20px] px-[120px] text-center text-white placeholder:text-white rounded-md  outline-none border-none focus:ring-0 bg-[#ffffff48] sm-max:px-[70px]"
              type="date"
              name="TripName"
              placeholder="Enter your trip’s name"
            />
            <div className="bg-[#8DD3BB] flex text-black gap-3 items-center py-3 px-[30px] outline-none">
              <button
                className="flex items-center gap-5"
                onClick={() => {
                  currentStep === steps.length
                    ? setComplete(true)
                    : setCurrentStep((prev) => prev + 1);
                  // setStep((prevStep) => prevStep + 1);
                }}
              >
                {currentStep === steps.length
                  ? "Generate Trip"
                  : `save&continue`}
                {currentStep < steps.length ? <FaArrowRight /> : ""}
              </button>
              {/* {step > 1 && <button className='bg-[#8DD3BB] flex text-black gap-3 items-center py-3 px-[30px]' onClick={handlePrev}>Previous</button>} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
