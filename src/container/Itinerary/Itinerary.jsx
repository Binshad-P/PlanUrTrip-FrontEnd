import React, { useState } from 'react';
import './MultiStepForm.css'; // Import your CSS file
import { FaArrowRight } from "react-icons/fa";
const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const calculateProgress = () => {
    return ((step - 1) / 3) * 100; // Assuming you have 3 steps in your form
  };

  return (
    <div className="multistep-form-container">
 
      {step === 1 && (
        <div className='bg-itinerary bg-cover w-full h-full'>
               <div className="progress-bar absolute top-4" style={{ width: `${calculateProgress()}%` }}></div>
          <div className='flex flex-col w-full h-full justify-center items-center gap-10'>
         <label className='font-Marcellus text-3xl text-white'>Personalise your trip</label>
         <input className='py-[20px] px-[120px] text-center text-white placeholder:text-white rounded-md  outline-none border-none focus:ring-0 bg-[#ffffff48]'  type='text' name='TripName' placeholder='Enter your trip’s name'/>
         </div>
        </div>
      )}
      {step === 2 && (
          <div className='bg-itinerary bg-cover w-full h-full'>
          <div className='flex flex-col w-full h-full justify-center items-center gap-10'>
         <label className='font-Marcellus text-3xl text-white'>Personalise your trip</label>
         <input className='py-[20px] px-[120px] text-center text-white placeholder:text-white rounded-md  outline-none border-none focus:ring-0 bg-[#ffffff48]'  type='text' name='TripName' placeholder='Enter your trip’s name'/>
         </div>
        </div>
      )}
      {step === 3 && (
         <div className='bg-itinerary bg-cover w-full h-full'>
         <div className='flex flex-col w-full h-full justify-center items-center gap-10'>
        <label className='font-Marcellus text-3xl text-white'>Personalise your trip</label>
        <input className='py-[20px] px-[120px] text-center text-white placeholder:text-white rounded-md  outline-none border-none focus:ring-0 bg-[#ffffff48]'  type='date' name='TripName' placeholder='Enter your trip’s name'/>
        </div>
       </div>
      )}
      <div className="buttons ">
        {/* {step > 1 && <button className='bg-[#8DD3BB] flex text-black gap-3 items-center py-3 px-[30px]' onClick={handlePrev}>Previous</button>} */}
        {step < 3 ? <button className='bg-[#8DD3BB] flex text-black gap-3 items-center py-3 px-[30px]' onClick={handleNext}>save&continue <FaArrowRight /> </button> : <button className='bg-[#8DD3BB] flex text-black gap-3 items-center py-3 px-[30px]' onClick={handleSubmit}>Generate Trip</button>}
      </div>
    </div>
  );
};

export default MultiStepForm;
