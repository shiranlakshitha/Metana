
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



const SidebarItem = ({name, image, dark, isSelected, onSelect}) => {
    const IconComponent = iconComponents[image]
    
  return (
    <div onClick={onSelect} className="flex cursor-pointer flex-row md:flex-col items-center gap-1 max-md:bg-[#977BFD] max-md:rounded-2xl">
      <div className={`${isSelected ? ' md:bg-[#0066FFCC]' : `${dark ? 'md:bg-[#EEEEEE1F]' : 'md:bg-[#EEEEEE]'}`} rounded-[45px] py-1.5 px-4 flex items-center justify-center w-[56px] h-[36px] hover:bg-[#0066FFCC] duration-150 gap-4`}>
        {IconComponent && <IconComponent className={`${isSelected ? 'md:text-white text-black' : dark ? 'md:text-gray-400 text-white' : 'md:text-black'}  w-6 h-6`} />}
      </div>
      <p className={`${isSelected ? 'md:text-white text-black' : dark ? 'md:text-gray-400 text-white' : 'md:text-black'}  font-roboto-flex text-[12px]`}>{name}</p>
    </div>
  );
};

export default SidebarItem;
