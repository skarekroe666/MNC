import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'

const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background SVG */}

      {/* Components */}
      <Navbar />
      <Home/>
      <About/>
      <Shop/>
    </div>
  )
}

export default App