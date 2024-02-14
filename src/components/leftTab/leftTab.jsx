import React from 'react'
import "./leftTab.css"
import graph from "../../assets/icons/graph.png"
import carTyre from "../../assets/icons/carTyre.png"
import LeftCompo from './leftCompo'
export default function leftTab() {
  return (
    <div className='leftTab flex flex-col justify-evenly'>
    <LeftCompo title="Utilisation"value="" image={graph}></LeftCompo>
      <LeftCompo title="Trips/Day"value="3.5"image={carTyre} ></LeftCompo>
      <LeftCompo title="KM/Trip" value="25"image={carTyre}></LeftCompo>
      <LeftCompo title="Daily Utilisation" value="13"image={carTyre}></LeftCompo>
    </div>
  )
}
