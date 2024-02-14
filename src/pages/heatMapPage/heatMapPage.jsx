import React from 'react'
import "./heatMapPage.css"
import InfoTab from '../../components/infoTab/infoTab.jsx'
import leaf from "../../assets/icons/leafIcon.png"
import car from "../../assets/icons/tyre.png"
import co2 from "../../assets/icons/co2.png"
import thunder from "../../assets/icons/thunder.png"
import LeftTab from '../../components/leftTab/leftTab.jsx'
import CarComponent from '../../components/carComponent/carComponent.jsx'
import TreeMapChart from '../../components/mosaicPlot/mosaicPlot.jsx'
import Table from "../tablePage/tablePage.jsx";
export default function heatMapPage() {

  return (
 <>
 <div className='flex flex-col outerDiv'>
    <div className="flex infoTabs mb-5">
      <InfoTab color="#FFDC6B" title="EVs" value="32"  battery={true} image={thunder} />
      <InfoTab color="#70cf97" title="Green KM" value="3,231" image={leaf} infoTab={true} />
      <InfoTab color="#725CFF" title="Trips" value="217" image={car} infoTab={true} />
      <InfoTab color="#FF7D85" title="CO2 Emission" value="3,600 kg" image={co2}  infoTab={true}/>
    </div> 
    <div className='flex flex-row outerDiv '>
   <div className=' flex flex-col gap-2 left'>
    <LeftTab></LeftTab>
    <CarComponent></CarComponent>
   </div>
    <div className='mapContainer flex flex-col'>
      <p className='font-xl mapTitle font-epi mt-2 italic ml-2'> Fleet Charged Status (Trip Ready EVs)</p>
<TreeMapChart></TreeMapChart>
      </div>
        </div>
        <div className='mt-10 tableContainer'> <Table ></Table></div>
     
      </div>
    </>
    
  )
}
