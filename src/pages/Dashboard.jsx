import React from "react";
import Navbar from "../components/Navbar";
import SidebarItem from "../components/SidebarItem";
import { sidebarItems } from "../assets/sidebar";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import profile from '../assets/profile.png'
import Background from '../assets/Background.png'
import Schedule from '../assets/Schedule.png'
import Integrations from '../assets/Integrations.png'
import Tutorial from '../assets/Tutorial.png'
import Collaborate from '../assets/Collaborate.png'
import Goal from '../assets/Goal.png'
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
        <div className="px-[72px] flex flex-col items-center">
          <div className="w-full relative h-[320px] bg-[#F7F2FFE5] rounded-3xl overflow-hidden">
            <img src={Background} className="absolute z-10 inset-0 object-cover" alt="background-img" />
            <img src={Schedule} className="absolute top-0 right-0 object-cover" alt="schedule-img" />
            <img src={Integrations} className="absolute bottom-0 right-0 object-cover" alt="schedule-img" />
            <img src={Tutorial} className="absolute top-0 right-[200px] object-cover" alt="schedule-img" />
            <img src={Collaborate} className="absolute bottom-0 right-[200px] object-cover" alt="schedule-img" />
            <img src={Goal} className="absolute bottom-0 right-[450px] object-cover" alt="schedule-img" />
            

          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
