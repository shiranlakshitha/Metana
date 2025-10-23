import React from 'react'
import Welcome from './pages/Welcome'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <div className='flex items-center justify-center min-h-screen'>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/dashboard' element={<Dashboard />} />
         </Routes>
      </div>
    </>
  )
}

export default App