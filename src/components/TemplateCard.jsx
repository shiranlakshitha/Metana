import React from 'react'
import { GoArrowRight } from "react-icons/go";

const TemplateCard = ({image, title, description}) => {
  return (
    <div className='w-[304px] h-[240px] py-1 px-[10px] bg-[#F2F2F7] rounded-2xl overflow-hidden'>
        <div className='w-[274px] h-[180px] rounded-2xl overflow-hidden'>
            <img src={image} alt="template-img" />
        </div>
        <div className='flex flex-col py-2'>
            <h3 className='font-aeonik text-[14px]'>{title}</h3>
            <div className='flex flex-row items-center justify-between gap-1'>
                <p className='font-roboto-flex text-[12px]'>{description}</p>
                <GoArrowRight className="w-4 h-4 text-[#5F6367]"/>
            </div>
        </div>
    </div>
  )
}

export default TemplateCard