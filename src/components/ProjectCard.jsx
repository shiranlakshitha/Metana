import React from 'react'
import { IoIosMore } from "react-icons/io";

const ProjectCard = ({title, description, image}) => {
  return (
    <div className="w-[304px] h-[236px] overflow-hidden py-4 px-2 flex flex-col justify-center mx-auto">
        <div className='w-[282px] h-[180px] rounded-2xl overflow-hidden bg-[#F2F2F7]'>
            <img src={image} alt="project-img" />
        </div>
        <h3 className='font-inter text-[14px] font-semibold'>{title}</h3>
        <div className='flex flex-row items-center gap-1 justify-between'>
            <p className='font-roboto-flex text-[12px] text-[#3C3C4399]'>{description}</p>
            <IoIosMore className='w-4 h-4 text-[#979A9B]'/>
        </div>
    </div>
  )
}

export default ProjectCard