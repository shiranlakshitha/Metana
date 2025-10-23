import React from 'react'
import logo from '../assets/logo.png'
import { IoIosSearch } from "react-icons/io";
import { BsStars } from "react-icons/bs";

const Navbar = ({dark}) => {
  return (
    <div className='flex flex-row items-center w-full justify-between'>
        {/*logo*/}
        <div className='w-[112px] h-[30px]'>
            <img src={logo} className='w-full h-auto object-cover' alt="logo" />
        </div>
        {/*search bar*/}
        {dark ? (<div className='flex flex-row items-center bg-[#323232] w-[594px] rounded-[99px] py-[8px] pl-[16px] gap-2 text-[12px]'>
            <IoIosSearch className='text-[#ffffff] w-3.5 h-3.5'/>
            <input type="text" placeholder='Search projects and experiences' className='w-full font-roboto-flex text-[#ffffff] focus:outline-none' />
        </div>) : (<div className='flex flex-row items-center bg-[#F2F2F7] w-[594px] rounded-[99px] py-[8px] pl-[16px] gap-2 text-[12px]'>
            <IoIosSearch className='text-[#3C3C4399] w-3.5 h-3.5'/>
            <input type="text" placeholder='Search projects and experiences' className='w-full font-roboto-flex text-[#3C3C4399] focus:outline-none' />
        </div>)}
        {/*button*/}
        <div className='flex font-inter text-[12px] flex-row items-center py-2 px-3.5 border-2 border-[#D1D1D1] rounded-[99px] gap-3'>
            {dark ? (<p className='text-white'>Try Pro</p>) : (<p>Try Pro</p>)}
            <BsStars  className='text-[#007AFF]'/>
        </div>
    </div>
  )
}

export default Navbar