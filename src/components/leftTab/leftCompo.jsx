import React from 'react'
import "./leftTab.css"
import graph from "../../assets/icons/graph.png"
import carTyre from "../../assets/icons/carTyre.png"
import LeftCompo from './leftCompo'
export default function leftCompo(props) {
  return (
      <div className='flex items-center font-epi'>
          <div className='squareContainer flex items-center justify-center' style={{ backgroundColor: "#56A04E" }}>
              <img src={props.image} className='image'></img>
          </div>
          <div className='tabTitle flex flex-col  ml-5'> <p className='title italic '>{props.title}</p>
              <p className='tabValue font-bold'>{props.value}</p></div>
      </div>
  )
}
