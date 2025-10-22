import React from "react";
import { HiHome, HiOutlineHome } from "react-icons/hi2";
import { CiFolderOn } from "react-icons/ci";
import { TfiLayout } from "react-icons/tfi";
import { SlCloudUpload } from "react-icons/sl";
import { IoIosMore } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
const iconComponents = {
  HiHome,
  CiFolderOn, 
  TfiLayout,
  SlCloudUpload,
  IoIosMore,
  CiCircleQuestion,
  IoSettingsOutline
};



const SidebarItem = ({name, image}) => {
    const IconComponent = iconComponents[image]
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="bg-[#0066FFCC] rounded-[45px] py-1.5 px-4 flex items-center justify-center w-[56px] h-[36px]">
        {IconComponent && <IconComponent className="text-white w-6 h-6" />}
      </div>
      <p className="font-roboto-flex text-[12px]">{name}</p>
    </div>
  );
};

export default SidebarItem;
