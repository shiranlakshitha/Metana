import React from 'react'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <div className='min-w-[1530px] flex flex-row min-h-screen'>
        {/*sidebar*/}
        <div className='w-[5%]'>
            shiran
        </div>
        <div className='w-[95%]'>
            <div>
                <Navbar />
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Dashboard