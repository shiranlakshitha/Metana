import React from "react";
import Navbar from "../components/Navbar";
import SidebarItem from "../components/SidebarItem";
import { sidebarItems } from "../assets/sidebar";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import profile from '../assets/profile.png'

const Dashboard = () => {
  return (
    <div className="min-w-[1530px] flex flex-row min-h-screen">
      {/*sidebar*/}
      <div className="w-[96px] flex flex-col justify-between pt-[60px] pb-[24px] px-2 bg-[#f9f9f9]">
        <div>
          {sidebarItems.slice(0, 5).map((items, key) => (
            <SidebarItem
            key={key}
            name={items.name}
            image={items.image}
            />
          ))}
        </div>
        <div className="w-full flex flex-col items-center gap-4">
           <CiCircleQuestion className="w-5 h-5 text-[#5F6367]"/>
           <IoSettingsOutline className="w-5 h-5 text-[#5F6367]" />
           <img src={profile} alt="profile-img" />
        </div>
      </div>
      <div className="w-full">
        <div className="px-[72px] py-[24px]">
          <Navbar />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
