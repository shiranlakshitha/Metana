import React from 'react'
import { GoArrowRight } from "react-icons/go";

const TemplateCard = ({image, title, description, isSelected, onSelect, dark}) => {
  return (
    <div onClick={onSelect} className={`w-[304px] h-[240px] py-1 px-[10px] rounded-2xl flex flex-col items-center mx-auto overflow-hidden cursor-pointer transition-all duration-200 ${
        isSelected ? 'bg-[#F2F2F7]' : 'bg-transparent hover:bg-[#F2F2F7]/50'
      }`}>
        <div className='w-[274px] h-[180px] rounded-2xl overflow-hidden'>
            <img src={image} alt="template-img" />
        </div>
        <div className='flex flex-col py-2 w-full'>
            <h3 className={`font-aeonik text-[14px] ${dark ? (isSelected ? 'text-black' : 'text-white') : 'text-black'}`}>{title}</h3>
            <div className='flex flex-row w-full items-center justify-between gap-1'>
                <p className={`font-roboto-flex text-[12px] ${dark ? (isSelected ? 'text-black' : 'text-white') : 'text-black'}`}>{description}</p>
                {isSelected ? (<GoArrowRight className="w-4 h-4 text-[#5F6367]"/>): ('')}
            </div>
        </div>
    </div>
  )
}

export default TemplateCard