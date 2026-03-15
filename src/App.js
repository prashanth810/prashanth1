import React from 'react'
import Homepage from './components/Homepage/Homepage'
import { Route, Routes } from 'react-router-dom'
import PrivacyPolicy from './components/privacypolicy/PrivacyPolicy'

const App = () => {
  return (
    <div className='bg-black text-white'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
      </Routes>
    </div>
  )
}

export default App
