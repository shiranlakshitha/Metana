import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SidebarItem from "../components/SidebarItem";
import { sidebarItems } from "../assets/sidebar";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import profile from "../assets/profile.png";
import Background from "../assets/Background.png";
import Schedule from "../assets/Schedule.png";
import Integrations from "../assets/Integrations.png";
import Tutorial from "../assets/Tutorial.png";
import Collaborate from "../assets/Collaborate.png";
import Goal from "../assets/Goal.png";
import { FaRegSquarePlus } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import TemplateCard from "../components/TemplateCard";
import { templates } from "../assets/templates";
import { LuClock5 } from "react-icons/lu";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../assets/projects";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Dashboard = () => {
  const [isDark, setIsDark] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0)
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  const handleDark = () => {
    setIsDark(!isDark)
  }
  return (
    <div className={isDark ? "dark" : ""}>
      <div className=" relative min-w-full flex flex-row gap-6 h-auto lg:h-[1056px] overflow-hidden dark:bg-[#1F1F1F]">
        {/*sidebar*/}
        <div className="w-[96px] hidden md:flex flex-col justify-between pt-[60px] pb-[24px] px-2 bg-[#f9f9f9] dark:bg-[#1F1F1F]">
          <div className="flex flex-col gap-4">
            <div onClick={handleDark} className={`absolute top-2 left-8 px-1 py-1 rounded-full border-2 cursor-pointer ${isDark ? 'border-white': 'border-black'}`}>
                {isDark ? (<MdOutlineLightMode className='w-4 h-4 text-white'/>) : (<MdDarkMode className='w-4 h-4'/>)}
            </div>
            {sidebarItems.slice(0, 5).map((items, key) => (
              <SidebarItem onSelect={() => {setSelectedItem(key)}} isSelected={selectedItem == key} dark={isDark} key={key} name={items.name} image={items.image} />
            ))}
          </div>
          <div className="w-full flex flex-col items-center gap-4">
            <CiCircleQuestion className={`w-5 h-5 ${isDark ? 'text-white': 'text-[#5F6367]'}`} />
            <IoSettingsOutline className={`w-5 h-5 ${isDark ? 'text-white': 'text-[#5F6367]'}`} />
            <img src={profile} alt="profile-img" />
          </div>
        </div>
        <div className="w-full">
          <div className="px-[20px] md:px-[72px] w-full py-[24px]">
            <Navbar dark={isDark}/>
          </div>
          <div className="px-[15px] md:px-[36px] lg:px-[72px] flex flex-col items-center dark:bg-[#1F1F1F]">
            <div className="w-full  relative h-[320px] p-[40px] bg-[#F7F2FFE5]  rounded-3xl lg:overflow-hidden">
              <img
                src={Background}
                className="hidden md:block absolute z-10 inset-0 object-fill w-full h-full"
                alt="background-img"
              />
              <img
                src={Schedule}
                className="hidden lg:block absolute top-0 right-0 object-cover"
                alt="schedule-img"
              />
              <img
                src={Integrations}
                className="hidden lg:block absolute bottom-0 right-0 object-cover"
                alt="schedule-img"
              />
              <img
                src={Tutorial}
                className="hidden lg:block absolute top-0 right-[200px] object-cover"
                alt="schedule-img"
              />
              <img
                src={Collaborate}
                className="hidden lg:block absolute bottom-0 right-[200px] object-cover"
                alt="schedule-img"
              />
              <img
                src={Goal}
                className="hidden lg:block absolute bottom-0 right-[450px] object-cover"
                alt="schedule-img"
              />
               <div 
    className="flex justify-center items-center sm:absolute inset-0 z-20 pointer-events-none"
    style={{
      background: 'linear-gradient(to top left, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 70%)'
    }}
  />
  
              <div className="w-[279px]">
                <h2 className="text-4xl font-poppins leading-[44px] font-semibold">
                  Getting started in Sonola
                </h2>
                <p className="font-inter w-[248px] leading-[24px] text-[16px] text-[#5F6367]">
                  Create intriguing marketing contents with ease!{" "}
                </p>
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #977BFD 0%, #9B59FE 100%)",
                  }}
                  className="mt-[36px] flex flex-row rounded-[12px] justify-center items-center gap-1.5 p-3.5 w-[248px] h-[54px] bg-[]"
                >
                  <FaRegSquarePlus className="text-white w-[19px] h-[11px]" />
                  <p className="font-inter text-[16px] text-white">
                    Start creating now
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row items-center justify-between p-[15px] gap-2">
                <div className="flex flex-row items-center gap-2">
                  <CiStar className="w-4 h-4 text-[#5F6367] dark:text-[#ffffff]" />
                  <p className="font-inter text-[#5F6367] text-[16px] dark:text-[#ffffff]">
                    For you
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <p className="font-roboto-flex text-[12px] text-[#5F6367] dark:text-[#ffffff]">
                    View all templates
                  </p>
                  <GoArrowRight className="w-4 h-4 text-[#5F6367] dark:text-[#ffffff]" />
                </div>
              </div>
              <div className="w-full grid-cols-1 md:grid-cols-2 grid lg:grid-cols-4 justify-items-center">
                {templates.map((template, index) => (
                  <TemplateCard
                    key={index}
                    dark={isDark}
                    title={template.title}
                    description={template.description}
                    image={template.image}
                    isSelected={selectedTemplate === index}
                    onSelect={() => setSelectedTemplate(index)}
                  />
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="flex flex-row items-center justify-between p-[15px] gap-2">
                <div className="flex flex-row items-center gap-2">
                  <LuClock5 className="w-4 h-4 text-[#5F6367] dark:text-[#ffffff]" />
                  <p className="font-inter text-[#5F6367] text-[16px] dark:text-[#ffffff]">
                    Recents
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <p className="font-roboto-flex text-[12px] text-[#5F6367] dark:text-[#ffffff]">
                    See in projects
                  </p>
                  <GoArrowRight className="w-4 h-4 text-[#5F6367] dark:text-[#ffffff]" />
                </div>
              </div>
              <div className="grid-cols-1 md:grid-cols-2 grid lg:grid-cols-4 justify-items-center">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    dark={isDark}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
