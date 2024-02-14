import React from 'react'
import "./InfoTab.css"
import leaf from "../../assets/icons/leafIcon.png"
export default function InfoTab(props) {
  if(props.infoTab==true){
  return (

    <div className='infoTab flex items-center font-epi'>
      <div className='circleContainer flex items-center justify-center' style={{backgroundColor:props.color}}>
       <img src={props.image} className='image'></img>
      </div>
      <div className='tabTitle flex flex-col  ml-5'> <p className='title italic '>{props.title}</p>
      <p className='tabValue font-bold'>{props.value}</p></div>
    </div>
  )
  }
  else{
    return(
    <div className='flex items-center font-epi battery'>
      <div className='absolute flex items-center justify-center '>
      <div className='batteryCircleContainer flex items-center justify-center ml-5' style={{ }}>
        <img src={props.image} className='image'></img>
      </div>
      <div className='batteryTabTitle flex flex-col  ml-5 mr-20'> <p className='italic '>{props.title}</p>
        <p className='tabValue font-bold'>{props.value}</p>
        </div>
        </div>
    </div>

    )
  }
}
