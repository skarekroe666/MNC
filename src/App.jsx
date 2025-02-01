import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Results from './components/Results'

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
    </div>
  )
}

export default App