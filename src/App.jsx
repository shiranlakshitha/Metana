import React from 'react'
import Welcome from './pages/Welcome'
import Dashboard from './pages/Dashboard'


const App = () => {
  return (
    <>
      <div className='flex items-center justify-center min-h-screen'>
        <Dashboard />
      </div>
    </>
  )
}

export default App