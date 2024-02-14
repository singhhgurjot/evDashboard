import React from 'react'
import "./carComponent.css"
import car from "../../assets/icons/carMain.png"
export default function carComponent() {
  return (
    <div className='infoTab2'>
      <img className="cars" src={car}></img>
    </div>
  )
}
