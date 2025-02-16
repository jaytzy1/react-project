import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Rootlayout/>} > 
       <Route path='/' element={<Home/>} />
      </Route>
     </Routes>
    </div>
  )
}

export default App
