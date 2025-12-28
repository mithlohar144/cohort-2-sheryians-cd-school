import React from 'react'
import Navbar from './comppnents/Navbar'
import Hero from './comppnents/Hero'
import Feature from './comppnents/Feature'
import About from './comppnents/About'
import Advantage from './comppnents/Advantage'

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Feature />
      <About />
      <Advantage />
    </div>
  )
}

export default App