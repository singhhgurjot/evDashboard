import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import HeatMapPage from "./pages/heatMapPage/heatMapPage.jsx"
import Table from "./pages/tablePage/tablePage.jsx"
function App() {


  return (
<Routes>
  <Route path='/' element={<HeatMapPage/>} />
  <Route path="/table" element={<Table/>} />
</Routes>
  )
}

export default App
