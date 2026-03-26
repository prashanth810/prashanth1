import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Homepage = lazy(() => import('./components/Homepage/Homepage'))
const PrivacyPolicy = lazy(() => import('./components/privacypolicy/PrivacyPolicy'))

const Loader = () => (
  <div className='flex items-center justify-center min-h-screen bg-black'>
    <div style={{
      width: 40, height: 40,
      border: '3px solid #1a1a1a',
      borderTop: '3px solid #0ef',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
)

const App = () => {
  return (
    <div className='bg-black text-white'>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App