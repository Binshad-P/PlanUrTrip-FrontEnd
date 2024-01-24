import React from 'react'
import "leaflet/dist/leaflet.css";

import { MapContainer,Marker,TileLayer,Popup } from 'react-leaflet'


const Map = () => {
    const markers = [
        {
          geocode: [32.2396,77.1887],
          popUp: "Jammu Kashmir",
          imageUrl: "https://1.bp.blogspot.com/-UEeZSgfkniQ/XfO1yoA98eI/AAAAAAAADxY/qYVqvKd8h1YdtBiqxAdUZYl7ShzZ1KJZgCLcBGAsYHQ/s640/Jammu%2BKashmir-Map-Population-Culture-Economy-Tourism-Capital%2Betc%252C.jpg"

        },
        {
          geocode: [15.2993, 74.1240],
          popUp: "Goa",
          imageUrl:"https://assets.serenity.co.uk/47000-47999/47829/996x492.jpg"
        },
        {
          geocode: [ 10.8505,76.2711],
          popUp: "Kerala",
          imageUrl:'https://media.tacdn.com/media/attractions-content--1x-1/11/81/ea/b9.jpg'
          
        }
      ];
  return (
    
    <div>
         <MapContainer center={[20.5937,  78.9629]} zoom={4}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map(marker=>(
        <Marker position={marker.geocode}>
            <Popup>
            <div>
                <h3>{marker.popUp}</h3>
                <img src={marker.imageUrl} alt={`Image for ${marker.popUp}`} className='w-[150px] h-[50px] object-cover' />
              </div>
            </Popup>
        </Marker>
      ))}
        </MapContainer>
    </div>
  )
}

export default Map
