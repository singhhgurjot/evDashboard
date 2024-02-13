import React from 'react'
import "./infoTab.css"
import leaf from "../../assets/icons/leafIcon.png"
export default function infoTab() {
  return (
    <div className='infoTab flex items-center font-epi'>
      <div className='circleContainer flex items-center justify-center'>
       <img src={leaf} className='image'></img>
      </div>
      <div className='tabTitle flex flex-col  ml-5'> <p className='title '>Green KM</p>
      <p className='tabValue font-bold'>3,231</p></div>
     
    </div>
  )
}
