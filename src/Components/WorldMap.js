import React from "react";
import { BiCircle, BiPhoneIncoming, BiShapeTriangle } from "react-icons/bi";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} 
from "react-simple-maps";
const markers = [
 
  {
    markerOffset: 25,
    name: "Manaus",
    coordinates: [-60.02578, -3.117034],
  },
  {
    markerOffset: 25,
    name: "Giza",
    coordinates: [31.131302, 29.97648],
  },
  {
    markerOffset: 25,
    name: "Shanghai",
    coordinates: [121.46917, 31.224361],
  },
  {
    markerOffset: 25,
    name: "Queensland",
    coordinates: [142.702789, -20.917574],
  },
  {
    markerOffset:25,
    name:"India",
    coordinates:[ 78.9626, 20.5937],
  },
    {
      markerOffset:25,
      name:"South-Africa",
      coordinates:[21.628892, -30.266661],
    },
    {
      markerOffset:25,
      name:"DRC",
      coordinates:[23.471267, -1.827817],
    },
    {
      markerOffset:25,
      name:"Shri-Lanka",
      coordinates:[81.096282, 6.943875],
    },
    {
      markerOffset:25,
      name:"Argentina",
      coordinates:[-71.107672, -49.664611],
    },
    {
      markerOffset:25,
      name:"Russia",
      coordinates:[95.531783, 69.248555],
    },
    {
      markerOffset:25,
      name:"Niger",
      coordinates:[6.667811, 14.846836],
    },
    {
      markerOffset:25,
      name:"Algerie",
      coordinates:[1.425, 34.048],
    },

  
];
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  const fetchData = async()=>{
      return (await (await fetch("https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json")).json)
  }
  console.log("!@#$%^&*()_kunal",fetchData())

const WorldMap = () => {
  return (
    <div className="worldmap">
      <ComposableMap
        data-tip=""
        style={{ height: "100%", width: "100%"}}
      >
        <ZoomableGroup zoom={1.3} >
          <Geographies
            geography={geoUrl}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#00FF00"
                  stroke="#000000"
                  strokeWidth={1}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              {/* <RiInboxUnarchiveLine r={8} fill="red" stroke="#fff" strokeWidth={1} /> */}
              <BiShapeTriangle r={5} fill="green" stroke="	#FF8C00" strokeWidth={3} />
              
              <text
                textAnchor="middle"
                y1={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#383874",fontSize:"20", fontWeight:"600"}}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};
export default WorldMap;



//import { GenIcon } from "react-icons";
//import { IconContext } from "react-icons/lib";
//import { RiInboxUnarchiveLine, RiInsertColumnLeft, RiInsertColumnRight } from "react-icons/ri";