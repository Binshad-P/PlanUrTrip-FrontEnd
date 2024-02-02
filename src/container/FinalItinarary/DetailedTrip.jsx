import React, { useEffect, useRef } from "react";
import './DetailedTrip.css'

import { GoDotFill } from "react-icons/go";
const DetailedTrip = () => {
  const timelineLineRef = useRef(null);
  const timelineImageRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const maxTimelineHeight =
        (document.querySelectorAll(".my-container").length - 1) * 100;
  
      let speed = 25; // Default speed
      if (window.innerWidth <= 600) {
        // Adjust the device width as needed
        speed = 12; // Decreased speed for mobile
      }
  
      const initialScrollPercentage = window.scrollY / maxTimelineHeight / 2; // Adjust the initial value as needed
      const scrollPercentage = initialScrollPercentage * speed;
  
      const adjustedPercentage = Math.min(100, scrollPercentage);
      timelineLineRef.current.style.height = `${adjustedPercentage}%`;
      timelineImageRef.current.style.top = `${adjustedPercentage}%`;
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div >
        <p className="text-2xl font-semibold my-5">Detailed Trip</p>
        <div>
            <div>
            <div class={`${window.innerWidth >= 600 && "my-timeline" }`} >

<div class="my-container ">
 
  <div class="text-box px-[80px] sm-max:px-[0rem] ">
    <p className="font-bold text-2xl flex items-center">Day 1</p>
    <hr className="my-4"/>
    <div className="flex mb-4 ">
    <p><GoDotFill size={22} /></p>
    <p>Our journey will begin from Riyadh at an early hour, where you will witness the magnificent sunrise and feel the positive energy filling your heart. You will be filled with excitement and anticipation as you embark on your first adventure in the Empty Quarter</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p>We will set off in our car towards "Ash-Shalfa," where the sand dunes will captivate you, and you will feel the adrenaline rushing through your veins as you drive through these amazing dunes.</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p>You will find yourself in Umm Al-Hadeed, also known as the "The Meteorite fall Place" where you will experience a completely different world and learn about the history of this area from our guides.</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p>We Reach "Um Athla" station to refuel and prepare for our upcoming adventure.</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p> You will enjoy a delicious dinner under the enchanting desert sky. You will have a delightful session around the campfire under the mesmerizing desert sky filled with stars. You will exchange stories and conversations with your fellow travelers, enjoying the atmosphere of friendship and intimacy..</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p> We will enjoy a delicious breakfast in Al-Kharj City.</p>
    </div>
    
  </div>
</div>
<div class="my-container ">
 
  <div class="text-box px-[80px] sm-max:px-[0rem]">
    <p className="font-bold text-2xl">Day 2</p>
    <hr className="my-4"/>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p>Our journey will begin from Riyadh at an early hour, where you will witness the magnificent sunrise and feel the positive energy filling your heart. You will be filled with excitement and anticipation as you embark on your first adventure in the Empty Quarter</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p>We will set off in our car towards "Ash-Shalfa," where the sand dunes will captivate you, and you will feel the adrenaline rushing through your veins as you drive through these amazing dunes.</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p>You will find yourself in Umm Al-Hadeed, also known as the "The Meteorite fall Place" where you will experience a completely different world and learn about the history of this area from our guides.</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p>We Reach "Um Athla" station to refuel and prepare for our upcoming adventure.</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p> You will enjoy a delicious dinner under the enchanting desert sky. You will have a delightful session around the campfire under the mesmerizing desert sky filled with stars. You will exchange stories and conversations with your fellow travelers, enjoying the atmosphere of friendship and intimacy..</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p> We will enjoy a delicious breakfast in Al-Kharj City.</p>
    </div>
    
  </div>
</div>
<div class="my-container ">
 
  <div class="text-box px-[80px] sm-max:px-[0rem]">
    <p className="font-bold text-2xl">Day 3</p>
    <hr className="my-4"/>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p>Our journey will begin from Riyadh at an early hour, where you will witness the magnificent sunrise and feel the positive energy filling your heart. You will be filled with excitement and anticipation as you embark on your first adventure in the Empty Quarter</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p>We will set off in our car towards "Ash-Shalfa," where the sand dunes will captivate you, and you will feel the adrenaline rushing through your veins as you drive through these amazing dunes.</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p>You will find yourself in Umm Al-Hadeed, also known as the "The Meteorite fall Place" where you will experience a completely different world and learn about the history of this area from our guides.</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p>We Reach "Um Athla" station to refuel and prepare for our upcoming adventure.</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p> You will enjoy a delicious dinner under the enchanting desert sky. You will have a delightful session around the campfire under the mesmerizing desert sky filled with stars. You will exchange stories and conversations with your fellow travelers, enjoying the atmosphere of friendship and intimacy..</p>
    </div>
    <div className="flex mb-4">
    <p><GoDotFill size={22} /></p>
    <p> We will enjoy a delicious breakfast in Al-Kharj City.</p>
    </div>
    
  </div>
</div>




<div className="timeline-line" ref={timelineLineRef}></div>
<div className="timeline-image sm-max:hidden" ref={timelineImageRef}><img class="timeline-image" src="http://flagcorp.brandedbybrandemic.com/wp-content/uploads/2023/10/Frame-39652-1.svg" alt=""/></div>
</div>
            </div>
        </div>
    </div>
  )
}

export default DetailedTrip