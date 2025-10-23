
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
    <div onClick={onSelect} className="flex cursor-pointer flex-col items-center gap-1">
      <div className={`${isSelected ? 'bg-[#0066FFCC]' : `${dark ? 'bg-[#EEEEEE1F]' : 'bg-[#EEEEEE]'}`} rounded-[45px] py-1.5 px-4 flex items-center justify-center w-[56px] h-[36px] hover:bg-[#0066FFCC] duration-150 gap-4`}>
        {IconComponent && <IconComponent className={`${isSelected ? 'text-white' : dark ? 'text-gray-400' : 'text-black'} w-6 h-6`} />}
      </div>
      <p className={`${dark ? 'text-white' : 'text-black'} font-roboto-flex text-[12px]`}>{name}</p>
    </div>
  );
};

export default SidebarItem;
