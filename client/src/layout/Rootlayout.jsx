import React from 'react'
import FirstHeader from '../components/FirstHeader'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div>
     <FirstHeader/> 
     <Outlet/>
    </div>
  )
}

export default Rootlayout
