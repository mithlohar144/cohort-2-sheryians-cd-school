import React from 'react'
import ReactDom from 'react-dom/client'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Feature from './components/Feature.jsx'
import Rating from './components/Rating.jsx'



const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Feature />
      <Rating />
      <Footer />
    </div>
  )
}

export default App