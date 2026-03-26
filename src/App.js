import React from 'react'
import Homepage from './components/Homepage/Homepage'
import { Route, Routes } from 'react-router-dom'
import PrivacyPolicy from './components/privacypolicy/PrivacyPolicy'
import Antigravity from './components/antigravity/Antigravity'

const App = () => {
  return (
    <div className='bg-black text-white'>
      <div style={{ width: '100%', position: 'relative' }}>
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
      </Routes>
    </div>
  )
}

export default App
