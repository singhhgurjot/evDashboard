import React from 'react'
import "./heatMapPage.css"
import InfoTab from '../../components/infoTab/infoTab.jsx'
import leaf from "../../assets/icons/leafIcon.png"
import car from "../../assets/icons/tyre.png"
import co2 from "../../assets/icons/co2.png"
import thunder from "../../assets/icons/thunder.png"
export default function heatMapPage() {
  return (
 <>
 <div className='flex flex-col'>
    <div className="flex justify-between infoTabs">
      <InfoTab color="#FFDC6B" title="EVs" value="32"  battery={true} image={thunder} />
      <InfoTab color="#70cf97" title="Green KM" value="3,231" image={leaf} infoTab={true} />
      <InfoTab color="#725CFF" title="Trips" value="217" image={car} infoTab={true} />
      <InfoTab color="#FF7D85" title="CO2 Emission" value="3,600 kg" image={co2}  infoTab={true}/>
    </div> 
   
      
    
      </div>
    </>
    
  )
}
