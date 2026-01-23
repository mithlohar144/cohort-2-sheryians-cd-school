import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Productt from './pages/Productt'

const App = () => {

 



  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Productt />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    
  )
}

export default App
