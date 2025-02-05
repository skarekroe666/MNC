import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Results from './components/Results'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background SVG */}

      {/* Components */}
      <Navbar/>
      <Home/>
      <About/>
      <Results/>
      <Shop/>
      <Footer/>
    </div>
  )
}

export default App