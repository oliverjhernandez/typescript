import React from 'react'
import About from './components/About'
import Interests from './components/Interests'
import Info from './components/Info'

function App() {
  return (
    <div>
      <div className='box'>
        <Info />
        <About />
        <Interests />
      </div>
    </div>
  )
}

export default App
