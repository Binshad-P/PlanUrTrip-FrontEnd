import React, { useEffect, useState } from "react";
import moment from "moment";
import { MdDateRange,MdAccessTime } from "react-icons/md";
import { FaTemperatureArrowDown,FaTemperatureArrowUp } from "react-icons/fa6";
const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState( []);
  const [data, setData] = useState([]);
  
  let REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5";
  let REACT_APP_API_KEY = "05d163adf69b1d2beee574328a616008";
  let REACT_APP_ICON_URL = "https://openweathermap.org/img/w";

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${REACT_APP_API_URL}/weather/?q=varanasi&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [lat, long]);
  return (
    <>
    <div className="flex ">
<div className="flex flex-col justify-center items-center bg-[#8dd3ba] p-3 rounded-tl-lg rounded-bl-lg">
      <img className="w-[80%]" src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}/>
       <p className="flex  h-full font-bold">{data?.weather[0]?.main}</p>
    </div>
<div className="bg-[#ffffffae] p-5 rounded-tr-lg rounded-br-lg">
    
    <div>
        <div className="flex gap-5">
        <p className="flex items-center "><MdDateRange />{moment().format("LL")}</p>
        <p className="flex items-center"><MdAccessTime />{moment().format("LT")}</p>
        </div>
        <hr/>
        <div className="flex justify-between items-center mt-[15px]">
            <div><p className="font-bold text-2xl">{data?.main?.temp}°C</p></div>
        
        <div>
            <p className="flex items-center gap-2"><FaTemperatureArrowUp />{data?.main?.temp_max}°C</p>
            <p className="flex items-center gap-2"><FaTemperatureArrowDown/>{data?.main?.temp_min}°C</p>
        </div>
        </div>
    </div>
</div>
</div>
</>
  
  );
};

export default Weather;
