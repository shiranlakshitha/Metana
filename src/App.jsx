import React from 'react'
import Welcome from './pages/Welcome'
import Dashboard from './pages/Dashboard'
import { HiOutlineHome } from "react-icons/hi2";
import { CiFolderOn } from "react-icons/ci";
import { TfiLayout } from "react-icons/tfi";
import { SlCloudUpload } from "react-icons/sl";
import { IoIosMore } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

const App = () => {
  return (
    <>
      <div className='flex items-center justify-center min-h-screen'>
        <Welcome />
      </div>
    </>
  )
}

export default App