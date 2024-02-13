import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfoTab from './components/infoTab/infoTab'
function App() {


  return (
 <>
 <div className='flex justify-between'>
 <InfoTab></InfoTab>
 <InfoTab></InfoTab>
 <InfoTab></InfoTab>
 <InfoTab></InfoTab>
 </div>
 </>
  )
}

export default App
